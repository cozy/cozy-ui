import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

const mkText = baseClass => props => {
  const { className, children, tag, ellipsis, ...restProps } = props
  const Tag = tag
  return (
    <Tag
      className={cx(
        baseClass,
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

export const Text = mkText(styles['g-text'])
export const MainTitle = mkText(styles['g-title-h1'])
export const Title = mkText(styles['g-title-h2'])
export const SubTitle = mkText(styles['g-title-h3'])
export const Bold = mkText(styles['g-title-h4'])
export const Caption = mkText(styles['g-caption'])

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
