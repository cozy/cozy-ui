let defaultViewer
if (process.env.USE_REACT) {
  defaultViewer = require('./index').default
} else {
  defaultViewer = ''
}

export default defaultViewer
