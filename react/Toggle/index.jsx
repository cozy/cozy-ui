import styles from './styles'

import React, { Component } from 'react'

class Toggle extends Component {
  onChange () {
    if (this.props.onToggle) {
      this.props.onToggle(!this.props.checked)
    }
  }
  render (props, state) {
    props.id = props.id || props.name

    return (
      <span className={styles['toggle']}>
        <input type="checkbox" name={props.id} id={props.id} className={styles['checkbox']} checked={props.checked} onChange={this.onChange.bind(this)} />
        <label for={props.id} className={styles['label']} />
      </span>
    )
  }
}

function deprecated (arg) {
  console.warn(`[Toggle] ${arg} is deprecated, please upgrade your Toggle component.`)
}

Toggle.propTypes = {
  id: React.PropTypes.string.isRequired,  // A unique id for the toggle, used internally.
  name: deprecated('name') || React.PropTypes.string, // Previous incarnation of `id`
  checked: React.PropTypes.bool,          // The state of the toggle
  onToggle: React.PropTypes.func          // A callback when the state of the toggle changes. Called with the new state as argument.
}

export default Toggle
