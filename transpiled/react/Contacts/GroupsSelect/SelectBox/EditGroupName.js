import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import Input from "cozy-ui/transpiled/react/legacy/Input";

var EditGroupName = function EditGroupName(_ref) {
  var groupId = _ref.groupId,
      groupName = _ref.groupName,
      setEditedGroupId = _ref.setEditedGroupId,
      renameGroup = _ref.renameGroup;
  var inputRef = useRef();

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var exitEditMode = function exitEditMode() {
    return setEditedGroupId('');
  };

  var handleKeyDown = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
      var ENTER_KEY_CODE;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ENTER_KEY_CODE = 13;

              if (e.keyCode == ENTER_KEY_CODE) {
                exitEditMode();
                renameGroup(groupId, inputRef.current.value);
              }

              stopPropagation(e);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleKeyDown(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(Input, {
    id: "editGroupInput",
    ref: inputRef,
    type: "text",
    defaultValue: groupName,
    size: "tiny",
    autoComplete: "off",
    autoFocus: true,
    onKeyDown: handleKeyDown,
    onClick: stopPropagation,
    onFocus: stopPropagation,
    onMouseDown: stopPropagation,
    onBlur: exitEditMode
  });
};

Option.propTypes = {
  groupName: PropTypes.string.isRequired,
  setEditedGroupId: PropTypes.string.isRequired
};
export default EditGroupName;