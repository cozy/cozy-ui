import React, { Component } from 'react'
import Popover from '../Popover'
import styles from './styles.styl'
import cx from 'classnames'
class Tooltip extends Component {
  state = { open: false }
  onMouseEnter = () => {
    this.setState({ open: true })
  }
  onMouseLeave = () => {
    this.setState({ open: false })
  }
  render() {
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        {this.state.open && (
          <Popover align={'center'}>
            {displayedBellow => (
              <div
                className={cx(styles['tooltip-buble'], {
                  [styles['tooltip-top']]: displayedBellow,
                  [styles['tooltip-bottom']]: !displayedBellow
                })}
              >
                <div className={styles['tooltip-message']}>
                  {this.props.title}
                </div>
              </div>
            )}
          </Popover>
        )}
        {this.props.children}
      </div>
    )
  }
}

export default Tooltip
