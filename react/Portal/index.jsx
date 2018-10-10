let Portal
if (process.env.USE_REACT) {
  const ReactDOM = require('react-dom')
  Portal = ({ into, children }) => {
    const targetElement = document.querySelector(into)
    return ReactDOM.createPortal(children, targetElement)
  }
} else {
  Portal = require('preact-portal').default
}

export default Portal
