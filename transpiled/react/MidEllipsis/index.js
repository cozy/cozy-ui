import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["text", "className", "children"];
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
/** The left-to-right mark (LRM) is a control character (an invisible formatting character)
 * used in computerized typesetting (including word processing in a program like Microsoft Word)
 * of text that contains a mixture of left-to-right text (such as English or Russian)
 * and right-to-left text (such as Arabic, Persian or Hebrew).
 * It is used to set the way adjacent characters are grouped with respect to text direction.
 * https://en.wikipedia.org/wiki/Left-to-right_mark
 *
 * In this case it allows us to hack the RTL direction of the {lastPart} in order to keep it LTR-looking
 * while still benefitting from the desired RTL overflow direction.
 * */

var LRM = /*#__PURE__*/React.createElement(React.Fragment, null, "\u200E");
var MidEllipsis = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var text = _ref.text,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  if (text && typeof text !== 'string') throw new Error('The "text" prop of MidEllipsis can only be a string');
  if (children && typeof children !== 'string') throw new Error('The children of MidEllipsis can only be a string');
  var str = text || children;
  var partLength = Math.round(str.length / 2);
  var firstPart = str.substring(0, partLength);
  var lastPart = str.substring(partLength, str.length);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx('u-midellipsis', className),
    ref: ref
  }, props), /*#__PURE__*/React.createElement("span", null, firstPart), /*#__PURE__*/React.createElement("span", null, LRM, lastPart, LRM));
});
MidEllipsis.displayName = 'MidEllipsis';
MidEllipsis.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};
export default MidEllipsis;