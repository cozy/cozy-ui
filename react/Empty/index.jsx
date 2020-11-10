import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { MainTitle, BaseText } from '../Text'
import Icon, { iconPropType } from '../Icon'
import styles from './styles.styl'

export const Empty = ({
  icon,
  title,
  text,
  children,
  className,
  noTransform,
  ...restProps
}) => {
  let withTransform = null
  if (!noTransform) {
    console.warn(
      "Empty shouldn't have css transformation on it, but should be managed by the application. Please put the css of withTransform class into the application and set noTransform to true."
    )
    withTransform = 'withTransform'
  }

  return (
    <div
      className={cx(styles['c-empty'], styles[withTransform], className)}
      {...restProps}
    >
      <Icon
        className={styles['c-empty-img']}
        icon={icon}
        width="100%"
        height="100%"
      />
      {title && (
        <MainTitle tag="h2" className={styles['c-empty-title']}>
          {title}
        </MainTitle>
      )}
      {text && <EmptySubTitle tag="p">{text}</EmptySubTitle>}
      <div className={styles['c-empty-text']}>{children}</div>
    </div>
  )
}

Empty.propTypes = {
  icon: iconPropType.isRequired,
  title: PropTypes.node.isRequired,
  text: PropTypes.node,
  className: PropTypes.string,
  noTransform: PropTypes.bool
}

Empty.defaultProps = {
  noTransform: false
}

export const EmptySubTitle = ({ ...restProps }) => (
  <BaseText className={styles['c-empty-text']} {...restProps} />
)
export default Empty
