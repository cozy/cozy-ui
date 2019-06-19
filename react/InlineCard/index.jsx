import React, { PureComponent } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.styl'

export class InlineCard extends PureComponent {
  render() {
    const { className, ...rest } = this.props
    return <span className={cx(styles['c-inline-card'], className)} {...rest} />
  }
}

InlineCard.propTypes = {
  className: PropTypes.string
}

export default InlineCard
