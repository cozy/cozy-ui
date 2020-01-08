import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

export const BaseText = React.forwardRef((props, ref) => {
  const { className, children, tag, ellipsis, ...restProps } = props
  const Tag = tag
  return (
    <Tag
      ref={ref}
      className={cx(
        {
          ['u-ellipsis']: ellipsis
        },
        className
      )}
      {...restProps}
    >
      {children}
    </Tag>
  )
})

const commonDefaultProps = {
  tag: 'div',
  ellipsis: false
}

const commonProps = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  ellipsis: PropTypes.bool
}

const makeTextComponent = (componentName, { className: extraClassName }) => {
  const Component = React.forwardRef(({ className, ...restProps }, ref) => (
    <BaseText
      className={cx(extraClassName, className)}
      {...restProps}
      ref={ref}
    />
  ))
  Component.displayName = `ForwardRef(${componentName})`
  Component.propTypes = commonProps
  Component.defaultProps = commonDefaultProps
  return Component
}

export const Text = makeTextComponent('Text', { className: 'u-text' })
export const MainTitle = makeTextComponent('MainTitle', {
  className: 'u-title-h1'
})
export const Title = makeTextComponent('Title', { className: 'u-title-h2' })
export const SubTitle = makeTextComponent('SubTitle', {
  className: 'u-title-h3'
})
export const Bold = makeTextComponent('Bold', { className: 'u-title-h4' })
export const Uppercase = makeTextComponent('Uppercase', {
  className: 'u-uppercase'
})
export const Caption = makeTextComponent('Caption', { className: 'u-caption' })
export const ErrorMessage = makeTextComponent('ErrorMessage', {
  className: styles.ErrorMessage
})

export default Text
