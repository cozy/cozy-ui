import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import cx from 'classnames'

import Icon from '../../Icon'
import Typography from '../../Typography'
import LeftIcon from '../../Icons/Left'

import styles from './styles.styl'

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
    <Typography variant={isCurrent ? 'h3' : 'body1'} gutterBottom={isCurrent}>
      <Tag
        onClick={onClick}
        className={cx({
          'u-clickable': onClick
        })}
      >
        {name}
      </Tag>
      {showSeparator && <BreadcrumbSeparator />}
    </Typography>
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

const Breadcrumbs = ({ items, className, style }) => {
  const previousItems = items.slice(0, -1)
  const [lastPreviousItem] = previousItems.slice(-1)
  const [currentItem] = items.slice(-1)

  return (
    <div style={style} className={cx(styles.Breadcrumb, className)}>
      {items.length > 1 && (
        <IconButton
          onClick={lastPreviousItem.onClick}
          className={styles.Breadcrumb__previousButton}
          size="medium"
        >
          <Icon icon={LeftIcon} />
        </IconButton>
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

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(itemPropTypes))
}

export default Breadcrumbs
