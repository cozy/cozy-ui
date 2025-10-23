import React, { useContext } from 'react';
export var ViewStackContext = /*#__PURE__*/React.createContext();
export var useViewStack = function useViewStack() {
  return useContext(ViewStackContext);
};