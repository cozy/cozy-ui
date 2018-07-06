const parserPreset = require('./parser-preset')

module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: parserPreset,
  rules: {
    'scope-case': [0],
    'subject-case': [0]
  }
}
