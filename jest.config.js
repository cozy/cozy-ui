process.env.TZ = 'UTC'

module.exports = {
  testURL: 'http://localhost/',
  moduleFileExtensions: ['js', 'jsx', 'json', 'styl', 'ts', 'tsx'],
  setupFilesAfterEnv: ['./test/jestsetup.js', 'jest-canvas-mock'],
  moduleDirectories: ['node_modules', 'src', 'react-styleguidist/lib'],
  moduleNameMapper: {
    '\\.(png|gif|jpe?g|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.styl$': 'identity-obj-proxy',
    'react-styleguidist.+\\.jsx?$': 'babel-jest',
    '^rsg-components(.*)$':
      '<rootDir>/node_modules/react-styleguidist/lib/client/rsg-components$1',
    'react-pdf/dist/esm/entry.webpack': 'react-pdf',
    '^cozy-client$': 'cozy-client/dist/index'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-styleguidist|cozy-harvest-lib)/)'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/transpiled/', '/dist/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'babel-jest'
  },
  globals: {
    __ALLOW_HTTP__: false,
    cozy: {}
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
