import ReactDOM from 'react-dom'

const Portal = ({ into, children }) => {
  const targetElement = document.querySelector(into)
  return ReactDOM.createPortal(children, targetElement)
}

export default Portal
