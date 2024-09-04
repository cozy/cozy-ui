This component is used to render markdown content. To see more about the Markdown, you can check the [Markdown Guide](https://www.markdownguide.org/).

```jsx

import Markdown from 'cozy-ui/transpiled/react/Markdown'

const textInMarkdown = `
# Demo

This is a text to test all possibilities of markdown.

## Headers

# H1 Header
## H2 Header
### H3 Header
#### H4 Header
##### H5 Header
###### H6 Header

## Paragraphs

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

## Emphasis

_Italic Text_

***Bold Text***

__Bold and Italic Text__

~~Strikethrough~~

<u>Underline</u>

## Lists

1. Ordered List Item 1
2. Ordered List Item 2
3. Ordered List Item 3

- Unordered List Item 1
- Unordered List Item 2
- Unordered List Item 3

## Links

[Link to GitHub](https://github.com/cozy/cozy-ui)

## Images

![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")

## Code

Inline code: \`const variable = 'value';\`

Block code:
\`\`\`javascript function add(a, b) { return a + b; }\`\`\`

## Blockquotes

> This is a blockquote.
`;

<Markdown content={textInMarkdown} />

```
