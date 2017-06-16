import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Toggle from '../../../react/Toggle'

storiesOf('Toggle')
  .add('simple usage', () => (
      <Toggle id="storybook-toggle" checked={true} onToggle={action('toggled')} />
  ))
