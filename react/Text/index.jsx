import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const BaseText = props => {
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

export const Text = ({ className, ...props }) => (
  <BaseText className={cx(styles['u-text'], className)} {...props} />
)
export const MainTitle = ({ className, ...props }) => (
  <BaseText className={cx(styles['u-title-h1'], className)} {...props} />
)
export const Title = ({ className, ...props }) => (
  <BaseText className={cx(styles['u-title-h2'], className)} {...props} />
)
export const SubTitle = ({ className, ...props }) => (
  <BaseText className={cx(styles['u-title-h3'], className)} {...props} />
)
export const Bold = ({ className, ...props }) => (
  <BaseText className={cx(styles['u-title-h4'], className)} {...props} />
)
export const Caption = ({ className, ...props }) => (
  <BaseText className={cx(styles['u-caption'], className)} {...props} />
)

// Props
const commonProps = {
  children: PropTypes.node.isRequired,
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
