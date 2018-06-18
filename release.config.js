const parserPreset = require('./parser-preset')

module.exports = {
  prepare: [
    {
      path: '@semantic-release/changelog',
      changelogFile: 'CHANGELOG.md'
    }
  ],
  analyzeCommits: parserPreset
}
