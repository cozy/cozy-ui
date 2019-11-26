let Portal
if (process.env.USE_PREACT) {
  try {
    Portal = require('preact-portal')
  } catch (e) {
    // We need this try/catch for webpack not to error if preact-portal
    // is not found
  }
} else {
  const ReactDOM = require('react-dom')
  Portal = ({ into, children }) => {
    const targetElement = document.querySelector(into)
    return ReactDOM.createPortal(children, targetElement)
  }
}

export default Portal
