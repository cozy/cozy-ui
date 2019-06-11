import React, { PureComponent } from 'react'
import cx from 'classnames'

import styles from './styles.styl'

export class Card extends PureComponent {
  render() {
    const { className, ...rest } = this.props
    return <div className={cx(styles['c-card'], className)} {...rest} />
  }
}

export default Card
