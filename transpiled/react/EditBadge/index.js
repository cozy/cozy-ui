import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["src", "onUpload", "onDelete", "anchorOrigin", "children"];
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import EditMenu from "cozy-ui/transpiled/react/EditBadge/EditMenu";
import StatusWrapper from "cozy-ui/transpiled/react/EditBadge/StatusWrapper";
import Badge from "cozy-ui/transpiled/react/Badge";
import Button from "cozy-ui/transpiled/react/Buttons";
import Icon from "cozy-ui/transpiled/react/Icon";
import PenIcon from "cozy-ui/transpiled/react/Icons/Pen";

var EditBadge = function EditBadge(_ref) {
  var src = _ref.src,
      onUpload = _ref.onUpload,
      onDelete = _ref.onDelete,
      anchorOrigin = _ref.anchorOrigin,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  var _useState3 = useState('PRESENT'),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1]; // PRESENT || ABSENT || LOADING


  var _useState5 = useState(Date.now()),
      _useState6 = _slicedToArray(_useState5, 2),
      timestamp = _useState6[0],
      setTimestamp = _useState6[1];

  var menuAnchorRef = useRef(null);
  return /*#__PURE__*/React.createElement(Badge, _extends({}, props, {
    anchorOrigin: anchorOrigin,
    badgeContent: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      ref: menuAnchorRef,
      component: "div",
      className: "u-miw-auto u-w-2-half u-h-2-half u-bdrs-circle",
      classes: {
        label: 'u-flex u-w-auto'
      },
      style: {
        outline: '4px solid var(--paperBackgroundColor)'
      },
      label: /*#__PURE__*/React.createElement(Icon, {
        icon: PenIcon
      }),
      size: "small",
      onClick: function onClick() {
        return setShowMenu(function (v) {
          return !v;
        });
      }
    }), /*#__PURE__*/React.createElement(EditMenu, {
      anchorRef: menuAnchorRef.current,
      status: status,
      showMenu: showMenu,
      setShowMenu: setShowMenu,
      setStatus: setStatus,
      setTimestamp: setTimestamp,
      onUpload: onUpload,
      onDelete: onDelete
    }))
  }), /*#__PURE__*/React.createElement(StatusWrapper, {
    src: src(timestamp),
    status: status,
    setStatus: setStatus,
    timestamp: timestamp
  }, children));
};

EditBadge.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  }
};
EditBadge.propTypes = {
  src: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
export default EditBadge;