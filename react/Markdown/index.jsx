import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import Link from '../Link'
import Typography from '../Typography'

const heading =
  level =>
  ({ children }) =>
    (
      <Typography variant={`h${level}`} className="u-mb-1">
        {children}
      </Typography>
    )

const components = {
  a: ({ children, href }) => (
    <Link href={href} rel="noreferrer" target="_blank">
      {children}
    </Link>
  ),
  p: ({ children }) => (
    <Typography variant="body1" className="u-mb-1">
      {children}
    </Typography>
  ),
  ...Object.fromEntries(
    [1, 2, 3, 4, 5, 6].map(level => [`h${level}`, heading(level)])
  )
}

const Markdown = ({ content }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  )
}

export default Markdown
