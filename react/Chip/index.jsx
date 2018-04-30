import cx from 'classnames'
import React from 'react'
import styles from './styles.styl'

class Chip extends React.Component {
  render ({ children, className, ...props }) {
    return (
      <div className={
          cx(styles.Chip, className, this.constructor.className)}
          {...props}
      >
        { children }
      </div>
    )
  }
}

export class RoundChip extends Chip {
  static className = styles.RoundChip
}

export default Chip
