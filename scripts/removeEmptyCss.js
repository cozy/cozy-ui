const replace = require('replace-in-file')

const REGEX = /[^\};\{\n]+\{\s*\}/gm
const options = {
  files: ['dist/cozy-ui.min.css', 'dist/cozy-ui.utils.min.css'],
  from: REGEX,
  to: ''
}

replace(options)
  .then(results => {
    console.log('Replacement results:', results)
  })
  .catch(error => {
    console.error('Error occurred:', error)
  })
