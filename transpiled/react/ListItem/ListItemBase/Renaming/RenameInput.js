import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import PropTypes from 'prop-types';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useClient } from 'cozy-client';
import { splitFilename } from 'cozy-client/dist/models/file';
import RenameDialog from "cozy-ui/transpiled/react/ListItem/ListItemBase/Renaming/RenameDialog";
import { renameFile } from "cozy-ui/transpiled/react/ListItem/ListItemBase/Renaming/helpers";
import Input from "cozy-ui/transpiled/react/Input";
import InputGroup from "cozy-ui/transpiled/react/InputGroup";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var KEYS = {
  ESCAPE: 'Escape',
  ENTER: 'Enter'
};
var useStyles = makeStyles({
  inputGroup: {
    maxWidth: 'none',
    height: '2rem',
    margin: '1rem 1rem 1rem 0',
    '& > div': {
      display: 'flex'
    },
    '& input': {
      maxWidth: 'none',
      padding: '.3125rem'
    }
  },
  spinner: {
    margin: '.4375rem'
  }
});

var RenameInput = function RenameInput(_ref) {
  var file = _ref.file,
      onClose = _ref.onClose;
  var client = useClient();
  var styles = useStyles();
  var textInput = useRef();

  var _useReducer = useReducer(function (prev) {
    return !prev;
  }, false),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      isBusy = _useReducer2[0],
      toggleBusy = _useReducer2[1];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalOpened = _useState2[0],
      setIsModalOpened = _useState2[1];

  var defaultValue = file.name;

  var check = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var value, oldExtension, newExtension;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = textInput.current.value;

              if (!(value === '' || value === '.' || value === '..')) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return submit();

            case 4:
              return _context.abrupt("return");

            case 5:
              oldExtension = splitFilename({
                name: defaultValue,
                type: 'file'
              }).extension;
              newExtension = splitFilename({
                name: value,
                type: 'file'
              }).extension;

              if (!(oldExtension === newExtension)) {
                _context.next = 11;
                break;
              }

              _context.next = 10;
              return submit();

            case 10:
              return _context.abrupt("return");

            case 11:
              setIsModalOpened(true);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function check() {
      return _ref2.apply(this, arguments);
    };
  }();

  var submit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var value;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              value = textInput.current.value;
              _context2.next = 3;
              return close(value);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function submit() {
      return _ref3.apply(this, arguments);
    };
  }();

  var cancel = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return close(defaultValue);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function cancel() {
      return _ref4.apply(this, arguments);
    };
  }();

  var close = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(value) {
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              toggleBusy();

              if (!(value !== defaultValue)) {
                _context4.next = 4;
                break;
              }

              _context4.next = 4;
              return renameFile(client, file, value);

            case 4:
              onClose();

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function close(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleKeyDown = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(event) {
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(event.key === KEYS.ENTER)) {
                _context5.next = 5;
                break;
              }

              _context5.next = 3;
              return check();

            case 3:
              _context5.next = 8;
              break;

            case 5:
              if (!(event.key === KEYS.ESCAPE)) {
                _context5.next = 8;
                break;
              }

              _context5.next = 8;
              return cancel();

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function handleKeyDown(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  var handleBlur = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!isModalOpened && !isBusy)) {
                _context6.next = 3;
                break;
              }

              _context6.next = 3;
              return check();

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function handleBlur() {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleFocus = function handleFocus() {
    var length = splitFilename({
      name: defaultValue,
      type: 'file'
    }).filename.length;
    textInput.current.setSelectionRange(0, length);
  };

  useEffect(function () {
    textInput.current.focus();
  }, []);
  return /*#__PURE__*/React.createElement(InputGroup, {
    className: styles.inputGroup
  }, /*#__PURE__*/React.createElement(Input, {
    ref: textInput,
    type: "text",
    defaultValue: defaultValue,
    disabled: isModalOpened || isBusy,
    onBlur: handleBlur,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown
  }), (isModalOpened || isBusy) && /*#__PURE__*/React.createElement(Spinner, {
    className: styles.spinner
  }), isModalOpened && /*#__PURE__*/React.createElement(RenameDialog, {
    onSubmit: submit,
    onCancel: cancel
  }));
};

RenameInput.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};
export default RenameInput;