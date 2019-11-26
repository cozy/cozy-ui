let defaultViewer
if (process.env.USE_PREACT) {
  defaultViewer = ''
} else {
  defaultViewer = require('./index').default
}

export default defaultViewer
