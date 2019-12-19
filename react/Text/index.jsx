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

export const Text = React.forwardRef(({ className, ...restProps }, ref) => (
  <BaseText className={cx('u-text', className)} {...restProps} ref={ref} />
))
export const MainTitle = React.forwardRef(
  ({ className, ...restProps }, ref) => (
    <BaseText
      className={cx('u-title-h1', className)}
      {...restProps}
      ref={ref}
    />
  )
)
export const Title = React.forwardRef(({ className, ...restProps }, ref) => (
  <BaseText className={cx('u-title-h2', className)} {...restProps} ref={ref} />
))
export const SubTitle = React.forwardRef(({ className, ...restProps }, ref) => (
  <BaseText className={cx('u-title-h3', className)} {...restProps} ref={ref} />
))
export const Bold = React.forwardRef(({ className, ...restProps }, ref) => (
  <BaseText className={cx('u-title-h4', className)} {...restProps} ref={ref} />
))
export const Uppercase = React.forwardRef(
  ({ className, ...restProps }, ref) => (
    <BaseText
      className={cx('u-uppercase', className)}
      {...restProps}
      ref={ref}
    />
  )
)
export const Caption = React.forwardRef(({ className, ...restProps }, ref) => (
  <BaseText className={cx('u-caption', className)} {...restProps} ref={ref} />
))

export const ErrorMessage = React.forwardRef(
  ({ className, ...restProps }, ref) => (
    <BaseText
      className={cx(styles.ErrorMessage, className)}
      {...restProps}
      ref={ref}
    />
  )
)

// Props
const commonProps = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  ellipsis: PropTypes.bool
}

Text.propTypes = {
  ...commonProps
}
MainTitle.propTypes = {
  ...commonProps
}
Title.propTypes = {
  ...commonProps
}
SubTitle.propTypes = {
  ...commonProps
}
Bold.propTypes = {
  ...commonProps
}
Caption.propTypes = {
  ...commonProps
}
Uppercase.propTypes = {
  ...commonProps
}
ErrorMessage.propTypes = {
  ...commonProps
}

// Default Props
const commonDefaultProps = {
  tag: 'div',
  ellipsis: false
}

Text.defaultProps = {
  ...commonDefaultProps
}
MainTitle.defaultProps = {
  ...commonDefaultProps
}
Title.defaultProps = {
  ...commonDefaultProps
}
SubTitle.defaultProps = {
  ...commonDefaultProps
}
Bold.defaultProps = {
  ...commonDefaultProps
}
Caption.defaultProps = {
  ...commonDefaultProps
}

Uppercase.defaultProps = {
  ...commonDefaultProps
}

ErrorMessage.defaultProps = {
  ...commonDefaultProps
}

export default Text
