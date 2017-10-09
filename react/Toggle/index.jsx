import styles from './styles'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Toggle extends Component {
  onChange () {
    if (this.props.onToggle) {
      this.props.onToggle(!this.props.checked)
    }
  }
  render (props, state) {
    return (
      <span className={styles['toggle']}>
        <input type='checkbox' id={props.id} className={styles['checkbox']} checked={props.checked} onChange={this.onChange.bind(this)} />
        <label htmlFor={props.id} className={styles['label']} />
      </span>
    )
  }
}

Toggle.propTypes = {
  id: PropTypes.string.isRequired,  // A unique id for the toggle, used internally.
  checked: PropTypes.bool,          // The state of the toggle
  onToggle: PropTypes.func          // A callback when the state of the toggle changes. Called with the new state as argument.
}

export default Toggle
