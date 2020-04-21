import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.styl'
import Icon from '../Icon'

const BreadcrumbSeparator = () => (
  <span className={styles.BreadcrumbSeparator}>/</span>
)

const BreadcrumbItem = ({
  name,
  onClick,
  isCurrent = false,
  tag = 'span',
  showSeparator = false
}) => {
  const Tag = tag
  return (
    <div
      className={cx(styles.BreadcrumbItem, {
        [styles['BreadcrumbItem--current']]: isCurrent
      })}
    >
      <Tag
        onClick={onClick}
        className={cx({
          'u-clickable': onClick
        })}
      >
        {name}
      </Tag>
      {showSeparator && <BreadcrumbSeparator />}
    </div>
  )
}

const itemPropTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tag: PropTypes.element
}

BreadcrumbItem.propTypes = {
  ...itemPropTypes,
  isCurrent: PropTypes.bool,
  showSeparator: PropTypes.bool
}

const Breadcrumbs = ({ items, className, theme, style }) => {
  const previousItems = items.slice(0, -1)
  const [lastPreviousItem] = previousItems.slice(-1)
  const [currentItem] = items.slice(-1)

  return (
    <div
      style={style}
      className={cx(
        styles.Breadcrumb,
        className,
        styles[`Breadcrumb--${theme}`]
      )}
    >
      {items.length > 1 && (
        <Icon
          icon={'left'}
          className={styles.Breadcrumb__previousButton}
          onClick={lastPreviousItem.onClick}
        />
      )}
      <div className={styles.Breadcrumb__items}>
        <div className={styles.Breadcrumb__previousItems}>
          {previousItems.map(({ name, onClick, tag }, index) => (
            <BreadcrumbItem
              key={index}
              name={name}
              onClick={onClick}
              tag={tag}
              showSeparator={index < previousItems.length - 1}
            />
          ))}
        </div>
        <BreadcrumbItem
          name={currentItem.name}
          tag={currentItem.tag}
          isCurrent
        />
      </div>
    </div>
  )
}

Breadcrumbs.defaultProps = {
  theme: 'default'
}

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'primary']),
  items: PropTypes.arrayOf(PropTypes.shape(itemPropTypes))
}

export default Breadcrumbs
