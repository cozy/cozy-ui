import React, { useContext } from 'react';
export var EncryptedContext = /*#__PURE__*/React.createContext();
export var useEncrypted = function useEncrypted() {
  var context = useContext(EncryptedContext);

  if (!context) {
    throw new Error('useEncrypted must be used within a EncryptedProvider');
  }

  return context;
};

var EncryptedProvider = function EncryptedProvider(_ref) {
  var url = _ref.url,
      children = _ref.children;
  var contextValue = {
    url: url
  };
  return /*#__PURE__*/React.createElement(EncryptedContext.Provider, {
    value: contextValue
  }, children);
};

export default /*#__PURE__*/React.memo(EncryptedProvider);