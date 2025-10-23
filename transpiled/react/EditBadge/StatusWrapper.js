import cx from 'classnames';
import React from 'react';
import Spinner from "cozy-ui/transpiled/react/Spinner";
import { AddPropsToChildren } from "cozy-ui/transpiled/react/utils/react";

var StatusWrapper = function StatusWrapper(_ref) {
  var src = _ref.src,
      status = _ref.status,
      setStatus = _ref.setStatus,
      timestamp = _ref.timestamp,
      children = _ref.children;

  if (status === 'LOADING') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, AddPropsToChildren(children, function (childProps) {
      return {
        className: cx(childProps.className, 'u-o-50')
      };
    }), /*#__PURE__*/React.createElement(Spinner, {
      className: "u-m-0",
      middle: true,
      size: "large"
    }));
  }

  if (status === 'PRESENT') {
    return AddPropsToChildren(children, function () {
      return {
        key: timestamp,
        src: src,
        onError: function onError() {
          return setStatus('ABSENT');
        }
      };
    });
  }

  return AddPropsToChildren(children, function () {
    return {
      key: timestamp
    };
  });
};

export default StatusWrapper;