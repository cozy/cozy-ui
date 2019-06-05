import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

export const BaseText = props => {
  const { className, children, tag, ellipsis, ...restProps } = props
  const Tag = tag
  return (
    <Tag
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

export const Text = ({ className, ...restProps }) => (
  <BaseText className={cx(styles['u-text'], className)} {...restProps} />
)
export const MainTitle = ({ className, ...restProps }) => (
  <BaseText className={cx(styles['u-title-h1'], className)} {...restProps} />
)
export const Title = ({ className, ...restProps }) => (
  <BaseText className={cx(styles['u-title-h2'], className)} {...restProps} />
)
export const SubTitle = ({ className, ...restProps }) => (
  <BaseText className={cx(styles['u-title-h3'], className)} {...restProps} />
)
export const Bold = ({ className, ...restProps }) => (
  <BaseText className={cx(styles['u-title-h4'], className)} {...restProps} />
)
export const Caption = ({ className, ...restProps }) => (
  <BaseText className={cx(styles['u-caption'], className)} {...restProps} />
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

export default Text
