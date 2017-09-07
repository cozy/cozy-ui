import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import Toggle from '../../../react/Toggle'

storiesOf('Toggle')
  .add(
    'simple usage',
    withInfo('The very simplest usage of a toggle')(() => (
      <Toggle id='storybook-toggle' />
    ))
  )
  .add(
    'with a default value',
    withInfo('You can set the default value')(() => (
      <div>
        Toggle is on:
        <br />
        <Toggle id='0' checked />
        <br />
        Toggle is off:
        <br />
        <Toggle id='1' checked={false} />
      </div>
    ))
  )
  .add(
    'execute something on toggle',
    withInfo('You can pass a function to the toggle')(() => (
      <Toggle id='0' onToggle={action('toggle')} />
    ))
  )
  .add(
    'with a controlled value',
    withInfo('You can control the toggle value. See the code to see the wrapper component.'
    )(() => {
      class ControlledToggle extends React.Component {
        constructor (props) {
          super(props)
          this.state = { checked: this.props.defaultChecked }
          this.handleToggle = this.handleToggle.bind(this)
        }

        handleToggle (checked) {
          this.setState(state => Object.assign({}, state, { checked }))
        }

        render () {
          return (
            <div>
              <label
                htmlFor='0'
                style={{
                  marginRight: '15px',
                  color: this.state.checked ? 'green' : 'gray'
                }}
              >{`Toggle is controlled and ${this.state.checked
                ? 'on'
                : 'off'}`}</label>
              <Toggle
                id='0'
                checked={this.state.checked}
                onToggle={this.handleToggle}
              />
            </div>
          )
        }
      }
      return <ControlledToggle defaultChecked={false} />
    })
  )
