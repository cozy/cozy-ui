import React from 'react'

const mkComponent = (Tag, extra = {}) => ({children, ...props}) => (
  <Tag {...extra} {...props}>{children}</Tag>
)

export { mkComponent }
