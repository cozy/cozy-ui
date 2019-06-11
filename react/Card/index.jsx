import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.styl'

export class Card extends PureComponent {
  render() {
    const { className, inset, ...rest } = this.props
    return (
      <div
        className={cx(
          styles['c-card'],
          {
            [styles['c-card--inset']]: inset
          },
          className
        )}
        {...rest}
      />
    )
  }
}

Card.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool
}

export default Card
