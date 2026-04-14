#!/usr/bin/env node
/**
 * Generates the cozy-ui skill reference files from source code.
 *
 * Sources:
 *   - react/[component]/Readme.md    component descriptions and usage examples
 *   - react/[component]/index.jsx    PropTypes and defaultProps
 *   - docs/skill/css-classes.md      static CSS reference (copied as-is)
 *
 * Output (skill/):
 *   - SKILL.md         overview with component count
 *   - components.md    full component reference
 *   - css-classes.md   static CSS reference
 *
 * Usage: node scripts/generate-skill.js
 */

'use strict'

const fs = require('fs')
const path = require('path')
const unified = require('unified')
const remarkParse = require('remark-parse')
const toString = require('mdast-util-to-string')

const markdownProcessor = unified().use(remarkParse)

const ROOT = path.join(__dirname, '..')
const REACT_DIR = path.join(ROOT, 'react')
const DOCS_SKILL_DIR = path.join(ROOT, 'docs', 'skill')
const OUTPUT_DIR = path.join(ROOT, 'skill')

// Directories to skip entirely
const SKIP_DIRS = new Set([
  'deprecated',
  'legacy',
  'node_modules',
  '__tests__',
  '__mocks__'
])

// Component name → category mapping
const CATEGORY_MAP = {
  Buttons: 'Buttons',
  Fab: 'Buttons',
  ExtendableFab: 'Buttons',
  IconButton: 'Buttons',
  DropdownButton: 'Buttons',
  ToggleButton: 'Buttons',
  ToggleButtonGroup: 'Buttons',

  InputGroup: 'Forms',
  Checkbox: 'Forms',
  Radios: 'Forms',
  SelectBox: 'Forms',
  FileInput: 'Forms',
  SearchBar: 'Forms',
  TextField: 'Forms',
  Switch: 'Forms',
  PasswordField: 'Forms',

  DatePicker: 'Date/Time',
  DateMonthPicker: 'Date/Time',

  Stack: 'Layout',
  Paper: 'Layout',
  Grid: 'Layout',
  Divider: 'Layout',
  Card: 'Layout',
  Empty: 'Layout',

  Breadcrumbs: 'Navigation',
  Tabs: 'Navigation',
  MuiTabs: 'Navigation',
  Sidebar: 'Navigation',
  NavigationList: 'Navigation',
  AppTitle: 'Navigation',
  BarTitle: 'Navigation',

  Alert: 'Feedback',
  PointerAlert: 'Feedback',
  Banner: 'Feedback',
  Spinner: 'Feedback',
  CircularProgress: 'Feedback',
  LinearProgress: 'Feedback',
  Skeletons: 'Feedback',
  ProgressionBanner: 'Feedback',
  Snackbar: 'Feedback',

  Avatar: 'Data Display',
  Badge: 'Data Display',
  ListItemText: 'Data Display',
  MidEllipsis: 'Data Display',
  Filename: 'Data Display',
  FilePath: 'Data Display',
  FilePathLink: 'Data Display',
  List: 'Data Display',
  ListItem: 'Data Display',
  ListSubheader: 'Data Display',
  Typography: 'Data Display',
  Chips: 'Data Display',
  Tooltip: 'Data Display',
  Accordion: 'Data Display',
  Table: 'Data Display',
  Stepper: 'Data Display',
  MobileStepper: 'Data Display',
  OrderedList: 'Data Display',
  UnorderedList: 'Data Display',
  LoadMore: 'Data Display',
  Thumbnail: 'Data Display',
  Markdown: 'Data Display',
  HistoryRow: 'Data Display',
  InfosBadge: 'Data Display',
  EditBadge: 'Data Display',
  GhostFileBadge: 'Data Display',
  Circle: 'Data Display',

  CozyDialogs: 'Dialogs',
  Dialog: 'Dialogs',
  ActionsMenu: 'Dialogs',
  ActionsBar: 'Dialogs',
  Menu: 'Dialogs',

  Icon: 'Icons',

  MuiCozyTheme: 'Utils',
  DropdownText: 'Utils'
}

// Category display order
const CATEGORY_ORDER = [
  'Buttons',
  'Forms',
  'Date/Time',
  'Layout',
  'Navigation',
  'Feedback',
  'Data Display',
  'Dialogs',
  'Icons',
  'Utils',
  'Hooks & Providers',
  'Labs',
  'Other'
]

// ─── Filesystem helpers ───────────────────────────────────────────────────────

function findComponents(dir, parentName = null, depth = 0) {
  if (depth > 3) return []
  const results = []
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch (err) {
    console.warn(`Warning: could not read directory ${dir}: ${err.message}`)
    return []
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (SKIP_DIRS.has(entry.name)) continue

    const componentDir = path.join(dir, entry.name)
    const readmePath = path.join(componentDir, 'Readme.md')

    if (fs.existsSync(readmePath)) {
      results.push({
        name: entry.name,
        parentName,
        dir: componentDir,
        readmePath,
        relativePath: path.relative(REACT_DIR, componentDir)
      })
    }

    // Recurse for providers/, Labs/, hooks/, etc.
    results.push(...findComponents(componentDir, entry.name, depth + 1))
  }

  return results
}

// ─── Readme parser ────────────────────────────────────────────────────────────

function parseReadme(filePath) {
  const tree = markdownProcessor.parse(fs.readFileSync(filePath, 'utf8'))

  // Extract prose description: paragraphs before the first code block
  const firstCodeIdx = tree.children.findIndex(n => n.type === 'code')
  const beforeCode =
    firstCodeIdx === -1 ? tree.children : tree.children.slice(0, firstCodeIdx)
  const description = beforeCode
    .filter(n => n.type === 'paragraph')
    .map(n => toString(n))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 300)

  // Extract all JSX code blocks
  const allExamples = tree.children
    .filter(n => n.type === 'code' && n.lang === 'jsx')
    .map(n => n.value.trim())

  // Extract primary import path (refined by the caller once we know the component name)
  let importPath = null
  const firstExample = allExamples[0] ?? null
  if (firstExample) {
    const allImports = [
      ...firstExample.matchAll(
        /from ['"]cozy-ui\/transpiled\/react\/([^'"]+)['"]/g
      )
    ]
    if (allImports.length > 0) {
      importPath = `cozy-ui/transpiled/react/${allImports[0][1]}`
    }
  }

  return { description, allExamples, importPath }
}

// ─── PropTypes parser ─────────────────────────────────────────────────────────

/**
 * Extracts a brace-balanced block starting after `pattern` in `source`.
 * Returns the content between the outer braces.
 */
function extractBraceBlock(source, pattern) {
  const startIdx = source.search(pattern)
  if (startIdx === -1) return null

  const braceStart = source.indexOf('{', startIdx)
  if (braceStart === -1) return null

  let depth = 0
  let inString = false
  let stringChar = ''
  let i = braceStart

  while (i < source.length) {
    const ch = source[i]
    if (inString) {
      if (ch === stringChar && source[i - 1] !== '\\') inString = false
    } else {
      if (ch === '"' || ch === "'" || ch === '`') {
        inString = true
        stringChar = ch
      } else if (ch === '{') {
        depth++
      } else if (ch === '}') {
        depth--
        if (depth === 0) return source.slice(braceStart + 1, i)
      }
    }
    i++
  }
  return null
}

/**
 * Collapses a multiline array literal [...] into a single line.
 * Needed because PropTypes.oneOf([...]) often spans multiple lines.
 */
function collapseArrays(text) {
  let result = ''
  let depth = 0
  let inString = false
  let stringChar = ''

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (inString) {
      if (ch === stringChar && text[i - 1] !== '\\') inString = false
      result += ch
    } else if (ch === '"' || ch === "'" || ch === '`') {
      inString = true
      stringChar = ch
      result += ch
    } else if (ch === '[') {
      depth++
      result += ch
    } else if (ch === ']') {
      depth--
      result += ch
    } else if (depth > 0 && (ch === '\n' || ch === '\r')) {
      // Collapse newlines inside array literals
      result += ' '
    } else {
      result += ch
    }
  }
  return result
}

/**
 * Converts a PropTypes expression string to a human-readable type string.
 */
function formatPropType(raw) {
  if (!raw) return '-'
  raw = raw
    .trim()
    .replace(/\.isRequired\s*$/, '')
    .trim()

  const simple = {
    'PropTypes.string': 'string',
    'PropTypes.bool': 'boolean',
    'PropTypes.number': 'number',
    'PropTypes.func': 'function',
    'PropTypes.node': 'React.node',
    'PropTypes.element': 'React.element',
    'PropTypes.elementType': 'React.elementType',
    'PropTypes.object': 'object',
    'PropTypes.array': 'array',
    'PropTypes.any': 'any',
    'PropTypes.symbol': 'symbol'
  }
  if (simple[raw]) return simple[raw]

  // oneOf(['a', 'b'])
  const oneOfMatch = raw.match(/^PropTypes\.oneOf\(\s*\[(.+)\]\s*\)$/)
  if (oneOfMatch) {
    const values = parseArrayValues(oneOfMatch[1])
    if (values.length > 0 && values.length <= 8) {
      return values.map(v => `\`${v}\``).join(' \\| ')
    }
    return 'string'
  }

  // oneOfType([PropTypes.string, PropTypes.bool])
  const oneOfTypeMatch = raw.match(/^PropTypes\.oneOfType\(\s*\[(.+)\]\s*\)$/)
  if (oneOfTypeMatch) {
    const parts = splitPropTypeArgs(oneOfTypeMatch[1])
    return parts.map(p => formatPropType(p.trim())).join(' \\| ')
  }

  // arrayOf(PropTypes.string)
  const arrayOfMatch = raw.match(/^PropTypes\.arrayOf\((.+)\)$/)
  if (arrayOfMatch) {
    return formatPropType(arrayOfMatch[1].trim()) + '[]'
  }

  // shape({...}) → object
  if (
    raw.startsWith('PropTypes.shape(') ||
    raw.startsWith('PropTypes.exact(')
  ) {
    return 'object'
  }

  // instanceOf(Foo) → Foo
  const instanceOfMatch = raw.match(/^PropTypes\.instanceOf\((\w+)\)$/)
  if (instanceOfMatch) return instanceOfMatch[1]

  // Fallback: strip PropTypes. prefix
  return raw.replace(/^PropTypes\./, '')
}

/**
 * Parses simple array values like "'a', 'b', 'c'" → ['a', 'b', 'c']
 * Skips spread elements like ...someArray
 */
function parseArrayValues(str) {
  const values = []
  const matches = str.matchAll(/['"`]([^'"`]+)['"`]/g)
  for (const m of matches) values.push(m[1])
  return values
}

/**
 * Splits a comma-separated list of PropTypes args, respecting nested parens.
 */
function splitPropTypeArgs(str) {
  const parts = []
  let depth = 0
  let current = ''
  for (const ch of str) {
    if (ch === '(' || ch === '[') depth++
    if (ch === ')' || ch === ']') depth--
    if (ch === ',' && depth === 0) {
      parts.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  if (current.trim()) parts.push(current.trim())
  return parts
}

/**
 * Extracts JSDoc inline descriptions from:
 *   /** description *\/
 *   propName: PropTypes...
 *
 * and from @typedef @property blocks:
 *   @property {type} propName - description
 */
function extractJsDocDescriptions(source) {
  const descriptions = {}

  // Inline JSDoc before a prop: /** text */ followed by propName:
  const inlineRe = /\/\*\*\s*([\s\S]*?)\s*\*\/\s*\n\s*(\w+)\s*:/g
  let m
  while ((m = inlineRe.exec(source)) !== null) {
    const desc = m[1].replace(/\s*\*\s*/g, ' ').trim()
    descriptions[m[2]] = desc
  }

  // @property {type} name - description
  const propertyRe = /@property\s+\{[^}]*\}\s+(\w+)\s*[-–]\s*([^\n*]+)/g
  while ((m = propertyRe.exec(source)) !== null) {
    descriptions[m[1]] = m[2].trim()
  }

  return descriptions
}

/**
 * Parses a propTypes block content into { propName: typeString }
 */
function parsePropBlock(blockContent) {
  const props = {}
  // Collapse multiline arrays first
  const collapsed = collapseArrays(blockContent)

  // Match: propName: PropTypes.xxx  (possibly with trailing comma or comment)
  const propRe =
    /^\s*(\w+)\s*:\s*(PropTypes\.\w+(?:\([^)]*\))?(?:\.isRequired)?)/gm
  let m
  while ((m = propRe.exec(collapsed)) !== null) {
    // For complex types that contain nested parens, capture the full expression
    const propName = m[1]
    // Find the full expression starting at match position
    const startPos = m.index + m[0].indexOf(m[2])
    const fullType = extractFullPropType(collapsed, startPos)
    props[propName] = fullType || m[2]
  }
  return props
}

/**
 * Extracts a full PropTypes expression starting at `pos`, handling nested parens.
 */
function extractFullPropType(str, pos) {
  let i = pos
  let depth = 0
  let started = false

  while (i < str.length) {
    const ch = str[i]
    if (ch === '(') {
      depth++
      started = true
    }
    if (ch === ')') depth--
    if (started && depth === 0 && (ch === ',' || ch === '\n')) {
      break
    }
    if (!started && (ch === ',' || ch === '\n')) break
    i++
  }

  return str.slice(pos, i).trim().replace(/,\s*$/, '').trim()
}

/**
 * Main prop parser for a component's index file.
 * Returns { props: { name → { type, default, description } } }
 */
function parsePropTypes(indexPath) {
  if (!fs.existsSync(indexPath)) return null

  const source = fs.readFileSync(indexPath, 'utf8')
  const jsdocDescs = extractJsDocDescriptions(source)

  // Find propTypes block — prefer the LAST assignment (the exported component's)
  // over intermediate ones (sub-components like DefaultButton)
  const propTypesPattern = /\w+\.propTypes\s*=/g
  let propTypesBlock = null
  let lastMatch
  let m2
  while ((m2 = propTypesPattern.exec(source)) !== null) {
    lastMatch = m2
  }
  if (lastMatch) {
    propTypesBlock = extractBraceBlock(
      source,
      new RegExp(lastMatch[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*')
    )
  }
  // Fallback: exported const XxxPropTypes
  if (!propTypesBlock) {
    for (const pattern of [
      /export\s+const\s+\w+PropTypes\s*=/,
      /export\s+const\s+\w+propTypes\s*=/
    ]) {
      propTypesBlock = extractBraceBlock(source, pattern)
      if (propTypesBlock) break
    }
  }

  if (!propTypesBlock) return null

  const rawProps = parsePropBlock(propTypesBlock)
  if (Object.keys(rawProps).length === 0) return null

  // Find defaultProps block — also use the LAST assignment for consistency
  const defaultPropsPattern = /\w+\.defaultProps\s*=/g
  let lastDefaultMatch
  let m3
  while ((m3 = defaultPropsPattern.exec(source)) !== null) {
    lastDefaultMatch = m3
  }
  const defaultPropsBlock = lastDefaultMatch
    ? extractBraceBlock(
        source,
        new RegExp(
          lastDefaultMatch[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*'
        )
      )
    : null
  const defaults = {}
  if (defaultPropsBlock) {
    const collapsed = collapseArrays(defaultPropsBlock)
    const defaultRe = /^\s*(\w+)\s*:\s*([^,\n]+)/gm
    let m
    while ((m = defaultRe.exec(collapsed)) !== null) {
      defaults[m[1]] = m[2].trim().replace(/,$/, '').trim()
    }
  }

  // Build final props
  const props = {}
  for (const [name, rawType] of Object.entries(rawProps)) {
    // Skip internal/unlikely-to-be-useful props
    if (name === 'classes') continue

    const type = formatPropType(rawType)
    const defaultVal = defaults[name]
    const description = jsdocDescs[name] || ''

    props[name] = { type, default: defaultVal, description }
  }

  return Object.keys(props).length > 0 ? props : null
}

// ─── Markdown generators ──────────────────────────────────────────────────────

function renderPropsTable(props) {
  if (!props || Object.keys(props).length === 0) return ''

  const rows = Object.entries(props)
    .map(([name, { type, default: def, description }]) => {
      const defCell = def !== undefined ? `\`${def}\`` : '-'
      const descCell = description || '-'
      return `| \`${name}\` | ${type} | ${defCell} | ${descCell} |`
    })
    .join('\n')

  return `| Prop | Type | Default | Description |
|------|------|---------|-------------|
${rows}`
}

// Styleguidist-specific imports that pollute examples
const STYLEGUIDIST_IMPORT_RE = /from ['"]cozy-ui\/docs\//
const STYLEGUIDIST_PATTERNS = [
  /\bVariants\b/,
  /\bisTesting\b/,
  /\binitialState\s*=/,
  /\bsetState\b/,
  /\bstate\./
]

/**
 * Tries to extract a usable JSX snippet from a single block.
 * Returns { imports, render } or null if the block is not exploitable.
 */
function extractFromBlock(example) {
  const lines = example.split('\n')
  const cleanImports = lines.filter(
    l => l.trim().startsWith('import ') && !STYLEGUIDIST_IMPORT_RE.test(l)
  )
  const semicolonIdx = lines.findIndex(l => l.trim() === ';')

  if (semicolonIdx !== -1) {
    const render = lines
      .slice(semicolonIdx + 1)
      .join('\n')
      .trim()
    // Skip blocks where the render is just a <Variants> wrapper (styleguidist-only)
    if (!render || /^\s*<Variants[\s>]/.test(render)) return null
    return { imports: cleanImports, render: render.split('\n').slice(0, 20).join('\n') }
  }

  // No semicolon: usable only if no styleguidist-specific patterns
  if (STYLEGUIDIST_PATTERNS.some(re => re.test(example))) return null
  const render = lines
    .filter(l => !l.trim().startsWith('import '))
    .join('\n')
    .trim()
  if (!render) return null
  return { imports: cleanImports, render: render.split('\n').slice(0, 25).join('\n') }
}

/**
 * Picks the best usable example from all JSX blocks of a Readme.
 * Returns a formatted string or null.
 */
function trimExample(allExamples) {
  if (!allExamples || allExamples.length === 0) return null

  for (const example of allExamples) {
    const result = extractFromBlock(example)
    if (result) {
      return [...result.imports, '', result.render].join('\n')
    }
  }
  return null
}

function generateComponentSection(component) {
  const { name, readmeParsed, props, relativePath } = component

  // Prefer an import that matches the component name exactly; fall back to first or path
  let resolvedImportPath = `cozy-ui/transpiled/react/${relativePath}`
  const firstExample = readmeParsed.allExamples[0] ?? null
  if (firstExample) {
    const allImports = [
      ...firstExample.matchAll(
        /from ['"]cozy-ui\/transpiled\/react\/([^'"]+)['"]/g
      )
    ]
    const exact = allImports.find(
      m => m[1] === name || m[1].endsWith(`/${name}`)
    )
    if (exact) {
      resolvedImportPath = `cozy-ui/transpiled/react/${exact[1]}`
    } else if (allImports.length > 0) {
      resolvedImportPath = `cozy-ui/transpiled/react/${allImports[0][1]}`
    }
  }

  const importStatement = `import ${name} from '${resolvedImportPath}'`

  let md = `### ${name}\n\n`

  if (readmeParsed.description) {
    md += `${readmeParsed.description}\n\n`
  }

  md += `\`\`\`jsx\n${importStatement}\n\`\`\`\n\n`

  const example = trimExample(readmeParsed.allExamples)
  if (example) {
    md += `**Example:**\n\n\`\`\`jsx\n${example}\n\`\`\`\n\n`
  }

  const propsTable = renderPropsTable(props)
  if (propsTable) {
    md += `${propsTable}\n\n`
  }

  return md
}

function generateComponentsMd(byCategory) {
  const lines = [
    '# Cozy UI Components Reference',
    '',
    '<!-- Auto-generated by scripts/generate-skill.js — do not edit manually -->',
    '',
    'Complete list of React components available in cozy-ui.',
    ''
  ]

  for (const category of CATEGORY_ORDER) {
    const components = byCategory[category]
    if (!components || components.length === 0) continue

    lines.push(`## ${category}`, '')
    for (const component of components) {
      lines.push(generateComponentSection(component))
    }
    lines.push('---', '')
  }

  return lines.join('\n')
}

function generateSkillMd(componentCount) {
  const templatePath = path.join(DOCS_SKILL_DIR, 'SKILL.md')
  const template = fs.readFileSync(templatePath, 'utf8')
  return template.replace(/\{\{componentCount\}\}/g, String(componentCount))
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  console.log('Generating cozy-ui skill files...')

  // Find all components with a Readme
  const allComponents = findComponents(REACT_DIR)
  console.log(`Found ${allComponents.length} components with Readme.md`)

  // Parse each component
  const processed = []
  for (const comp of allComponents) {
    const readmeParsed = parseReadme(comp.readmePath)

    // Try index.jsx then index.tsx then index.js
    let props = null
    for (const indexFile of ['index.jsx', 'index.tsx', 'index.js']) {
      const indexPath = path.join(comp.dir, indexFile)
      props = parsePropTypes(indexPath)
      if (props) break
    }

    // Determine category
    let category = CATEGORY_MAP[comp.name]
    if (!category) {
      if (comp.parentName === 'providers') category = 'Hooks & Providers'
      else if (comp.parentName === 'hooks') category = 'Hooks & Providers'
      else if (comp.parentName === 'Labs' || comp.name === 'Labs')
        category = 'Labs'
      else if (comp.parentName === 'CozyDialogs') category = 'Dialogs'
      else category = 'Other'
    }

    processed.push({ ...comp, readmeParsed, props, category })
  }

  // Group by category
  const byCategory = {}
  for (const comp of processed) {
    if (!byCategory[comp.category]) byCategory[comp.category] = []
    byCategory[comp.category].push(comp)
  }

  // Sort each category alphabetically
  for (const cat of Object.values(byCategory)) {
    cat.sort((a, b) => a.name.localeCompare(b.name))
  }

  const totalComponents = processed.length

  // Ensure output dir exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  // Write SKILL.md
  const skillMd = generateSkillMd(totalComponents)
  fs.writeFileSync(path.join(OUTPUT_DIR, 'SKILL.md'), skillMd)
  console.log(`  ✓ ${path.relative(ROOT, path.join(OUTPUT_DIR, 'SKILL.md'))}`)

  // Write components.md
  const componentsMd = generateComponentsMd(byCategory)
  fs.writeFileSync(path.join(OUTPUT_DIR, 'components.md'), componentsMd)
  console.log(`  ✓ ${path.relative(ROOT, path.join(OUTPUT_DIR, 'components.md'))}`)

  // Copy static css-classes.md
  const cssClassesSrc = path.join(DOCS_SKILL_DIR, 'css-classes.md')
  if (fs.existsSync(cssClassesSrc)) {
    fs.copyFileSync(cssClassesSrc, path.join(OUTPUT_DIR, 'css-classes.md'))
    console.log(`  ✓ ${path.relative(ROOT, path.join(OUTPUT_DIR, 'css-classes.md'))}`)
  } else {
    console.warn('  ⚠ docs/skill/css-classes.md not found, skipping')
  }

  // Summary
  const withProps = processed.filter(c => c.props).length
  console.log(
    `\nDone. ${totalComponents} components processed, ${withProps} with props extracted.`
  )
  console.log(`Output: ${OUTPUT_DIR}`)
}

main()
