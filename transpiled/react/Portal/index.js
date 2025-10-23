import ReactDOM from 'react-dom';

var Portal = function Portal(_ref) {
  var into = _ref.into,
      children = _ref.children;
  var targetElement = document.querySelector(into);
  return /*#__PURE__*/ReactDOM.createPortal(children, targetElement);
};

export default Portal;