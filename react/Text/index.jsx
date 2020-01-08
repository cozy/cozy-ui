import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

function BaseText(props, ref) {
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
}
const ForwardRefBaseText = React.forwardRef(BaseText)
ForwardRefBaseText.displayName = 'forwardRef(BaseText)'
export { ForwardRefBaseText as BaseText }

function Text({ className, ...restProps }, ref) {
  return (
    <ForwardRefBaseText
      className={cx('u-text', className)}
      {...restProps}
      ref={ref}
    />
  )
}
const ForwardRefText = React.forwardRef(Text)
ForwardRefText.displayName = 'forwardRef(Text)'
export { ForwardRefText as Text }
export default ForwardRefText

function MainTitle({ className, ...restProps }, ref) {
  return (
    <ForwardRefBaseText
      className={cx('u-title-h1', className)}
      {...restProps}
      ref={ref}
    />
  )
}
const ForwardRefMainTitle = React.forwardRef(MainTitle)
ForwardRefMainTitle.displayName = 'forwardRef(MainTitle)'
export { ForwardRefMainTitle as MainTitle }

function Title({ className, ...restProps }, ref) {
  return (
    <ForwardRefBaseText
      className={cx('u-title-h2', className)}
      {...restProps}
      ref={ref}
    />
  )
}
const ForwardRefTitle = React.forwardRef(Title)
ForwardRefTitle.displayName = 'forwardRef(Title)'
export { ForwardRefTitle as Title }

function SubTitle({ className, ...restProps }, ref) {
  return (
    <ForwardRefBaseText
      className={cx('u-title-h3', className)}
      {...restProps}
      ref={ref}
    />
  )
}
const ForwardRefSubTitle = React.forwardRef(SubTitle)
ForwardRefSubTitle.displayName = 'forwardRef(SubTitle)'
export { ForwardRefSubTitle as SubTitle }

function Bold({ className, ...restProps }, ref) {
  return (
    <ForwardRefBaseText
      className={cx('u-title-h4', className)}
      {...restProps}
      ref={ref}
    />
  )
}
const ForwardRefBold = React.forwardRef(Bold)
ForwardRefBold.displayName = 'forwardRef(Bold)'
export { ForwardRefBold as Bold }

function Uppercase({ className, ...restProps }, ref) {
  return (
    <ForwardRefBaseText
      className={cx('u-uppercase', className)}
      {...restProps}
      ref={ref}
    />
  )
}
const ForwardRefUppercase = React.forwardRef(Uppercase)
ForwardRefUppercase.displayName = 'forwardRef(Uppercase)'
export { ForwardRefUppercase as Uppercase }

function Caption({ className, ...restProps }, ref) {
  return (
    <ForwardRefBaseText
      className={cx('u-caption', className)}
      {...restProps}
      ref={ref}
    />
  )
}
const ForwardRefCaption = React.forwardRef(Caption)
ForwardRefCaption.displayName = 'forwardRef(Caption)'
export { ForwardRefCaption as Caption }

function ErrorMessage({ className, ...restProps }, ref) {
  return (
    <ForwardRefBaseText
      className={cx(styles.ErrorMessage, className)}
      {...restProps}
      ref={ref}
    />
  )
}
const ForwardRefErrorMessage = React.forwardRef(ErrorMessage)
ForwardRefErrorMessage.displayName = 'forwardRef(ErrorMessage)'
export { ForwardRefErrorMessage as ErrorMessage }

// Props
const commonProps = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  ellipsis: PropTypes.bool
}

ForwardRefText.propTypes = {
  ...commonProps
}
ForwardRefMainTitle.propTypes = {
  ...commonProps
}
ForwardRefTitle.propTypes = {
  ...commonProps
}
ForwardRefSubTitle.propTypes = {
  ...commonProps
}
ForwardRefBold.propTypes = {
  ...commonProps
}
ForwardRefCaption.propTypes = {
  ...commonProps
}
ForwardRefUppercase.propTypes = {
  ...commonProps
}
ForwardRefErrorMessage.propTypes = {
  ...commonProps
}

// Default Props
const commonDefaultProps = {
  tag: 'div',
  ellipsis: false
}

ForwardRefText.defaultProps = {
  ...commonDefaultProps
}
ForwardRefMainTitle.defaultProps = {
  ...commonDefaultProps
}
ForwardRefTitle.defaultProps = {
  ...commonDefaultProps
}
ForwardRefSubTitle.defaultProps = {
  ...commonDefaultProps
}
ForwardRefBold.defaultProps = {
  ...commonDefaultProps
}
ForwardRefCaption.defaultProps = {
  ...commonDefaultProps
}

ForwardRefUppercase.defaultProps = {
  ...commonDefaultProps
}

ForwardRefErrorMessage.defaultProps = {
  ...commonDefaultProps
}
