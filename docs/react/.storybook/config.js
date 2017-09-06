import { configure } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false,
  inline: true,
  source: true
});

function loadStories() {
  require('../stories/Toggle.js')
  // You can require as many stories as you need.
}

configure(loadStories, module)
