import { configure } from '@storybook/react'
import { setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false,
  inline: true,
  source: true
});

const req = require.context('../stories', true, /\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
