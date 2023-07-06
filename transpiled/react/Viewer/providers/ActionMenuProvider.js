import React, { createContext, useContext } from 'react';
/**
 * @typedef {object} useActionMenuContextReturn
 * @property {string} information
 * @property {string} page
 */

var ActionMenuContext = /*#__PURE__*/createContext();

var ActionMenuProvider = function ActionMenuProvider(_ref) {
  var children = _ref.children,
      _ref$editPathByModelP = _ref.editPathByModelProps,
      editPathByModelProps = _ref$editPathByModelP === void 0 ? {} : _ref$editPathByModelP;
  return /*#__PURE__*/React.createElement(ActionMenuContext.Provider, {
    value: editPathByModelProps
  }, children);
};
/**
 * @returns {useActionMenuContextReturn}
 */


var useActionMenuContext = function useActionMenuContext() {
  var actionMenuContext = useContext(ActionMenuContext);

  if (!actionMenuContext) {
    throw new Error('ActionMenuContext must be used within a ActionMenuProvider');
  }

  return actionMenuContext;
};

export default useActionMenuContext;
export { ActionMenuProvider };