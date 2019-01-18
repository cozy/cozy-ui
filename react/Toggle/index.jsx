import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiCozyTheme from '../MuiCozyTheme'
import Switch from '@material-ui/core/Switch'
import omit from 'lodash/omit'

class Toggle extends Component {
  onChange = (e, checked) => {
    // The legacy `onToggle` prop takes only the checked state
    if (this.props.onToggle) {
      this.props.onToggle(checked)
    }

    // MUI's `onChange` props takes the event and the checked state
    if (this.props.onChange) {
      this.props.onChange(e, checked)
    }
  }

  render() {
    // `onToggle` is not a valid prop for MUI's `Switch`, so we omit it
    // `onToggle` will be used in `onChange`
    const switchProps = omit(this.props, ['onToggle'])

    return (
      <MuiCozyTheme>
        <Switch {...switchProps} color="primary" onChange={this.onChange} />
      </MuiCozyTheme>
    )
  }
}

Toggle.propsTypes = {
  ...Switch.propTypes,
  /** A callback when the state of the toggle changes. Called with the new state as argument. This is for backward compatibility purposes only. You should use `onChange` prop */
  onToggle: PropTypes.func
}

export default Toggle
