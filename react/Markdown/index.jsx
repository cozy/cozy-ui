import React from 'react'
import ReactMarkdown from 'react-markdown'

export const defaultRendererOptions = {
  Link: props => <a href={props.href} target='_blank'>{props.children}</a>
}

export const Markdown = ({ source, renderers }) =>
  <ReactMarkdown
    source={source}
    renderers={renderers || defaultRendererOptions}
  />

export default Markdown
