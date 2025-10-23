import React from 'react'
import ReactMarkdown from 'react-markdown'

import Link from '../Link'
import Typography from '../Typography'

const Markdown = ({ content }) => {
  return (
    <ReactMarkdown
      source={content}
      renderers={{
        link: ({ children, href }) => (
          <Link href={href} rel="noreferrer" target="_blank">
            {children}
          </Link>
        ),
        heading: ({ children, level }) => (
          <Typography variant={`h${level}`} className="u-mb-1">
            {children}
          </Typography>
        ),
        paragraph: ({ children }) => (
          <Typography variant="body1" className="u-mb-1">
            {children}
          </Typography>
        )
      }}
    />
  )
}

export default Markdown
