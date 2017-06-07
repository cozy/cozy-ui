import React from 'react';
import { storiesOf } from '@storybook/react';
import { Toggle } from '../../../react/Toggle'

storiesOf('Toggle')
  .addWithInfo(
    'simple usage',
    `This is the basic usage with the button with providing a label to show the text.`,
    () => (
      <Toggle />
    ),
  );
