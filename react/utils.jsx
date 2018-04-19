import React from 'react'

const mkComponent = (Tag, extra = {}) => ({
  children,
  className,
  ...props
}) => {
  const { className: extraClassName, ...restExtra } = extra

  return (
    <Tag
      {...restExtra}
      {...props}
      className={(className || '') + ' ' + (extraClassName || '')}
    >
      {children}
    </Tag>
  )
}

export { mkComponent }
