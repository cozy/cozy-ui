let defaultViewer
if (process.env.USE_REACT) {
  defaultViewer = require('./index')
} else {
  defaultViewer = ''
}

export default defaultViewer
