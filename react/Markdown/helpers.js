import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import unified from 'unified'

export const remarkPlugins = [remarkGfm]

const markdown = unified().use(remarkParse).use(remarkPlugins)

// Nodes whose children are blocks or cells: a space keeps their words apart
const BLOCKS = ['root', 'blockquote', 'list', 'listItem', 'table', 'tableRow']

const getWords = node => {
  if (node.type === 'image' || node.type === 'imageReference')
    return node.alt ?? ''
  if (node.type === 'break') return ' '
  if (typeof node.value === 'string') return node.value

  return (node.children ?? [])
    .map(getWords)
    .join(BLOCKS.includes(node.type) ? ' ' : '')
}

/**
 * Gives the words of a Markdown content on one line, without its syntax,
 * as the Markdown component shows them: for a preview
 *
 * @param {string} content - Markdown content
 * @returns {string}
 */
export const getPlainTextFromMarkdown = content =>
  getWords(markdown.parse(content)).replace(/\s+/g, ' ').trim()
