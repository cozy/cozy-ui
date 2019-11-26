let Portal
if (process.env.USE_PREACT) {
  Portal = require('preact-portal')
} else {
  const ReactDOM = require('react-dom')
  Portal = ({ into, children }) => {
    const targetElement = document.querySelector(into)
    return ReactDOM.createPortal(children, targetElement)
  }
}

export default Portal
