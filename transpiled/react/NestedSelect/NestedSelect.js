import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _toArray from "@babel/runtime/helpers/toArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import cx from 'classnames';
import List from "cozy-ui/transpiled/react/List";
import Input from "cozy-ui/transpiled/react/Input";
import Typography from "cozy-ui/transpiled/react/Typography";
import ItemRow from "cozy-ui/transpiled/react/NestedSelect/ItemRow";
import { makeHistory } from "cozy-ui/transpiled/react/NestedSelect/helpers";
var styles = {
  "Modal__back": "styles__Modal__back___qxUn_",
  "search-container--without-title": "styles__search-container--without-title___3P2fe"
};
export { ItemRow };
/**
 * Select like component to choose an option among a list of options.
 * Options can have children; selecting an option that has children
 * will show the children of the chosen option instead of selecting
 * the option.
 */

var NestedSelect = function NestedSelect(_ref) {
  var _state$searchValue;

  var onSelect = _ref.onSelect,
      ContentComponent = _ref.ContentComponent,
      HeaderComponent = _ref.HeaderComponent,
      canSelectParent = _ref.canSelectParent,
      isSelected = _ref.isSelected,
      title = _ref.title,
      transformParentItem = _ref.transformParentItem,
      radioPosition = _ref.radioPosition,
      ellipsis = _ref.ellipsis,
      options = _ref.options,
      searchOptions = _ref.searchOptions,
      noDivider = _ref.noDivider;
  var innerRef = useRef();

  var _useState = useState({
    history: makeHistory(options, canSelectParent),
    searchValue: '',
    searchResult: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleBack = function handleBack() {
    var _state$history = _toArray(state.history),
        item = _state$history[0],
        newHistory = _state$history.slice(1);

    setState(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        history: newHistory
      });
    });
    return item;
  };

  var handleNavToChildren = function handleNavToChildren(item) {
    var newHistory = [item].concat(_toConsumableArray(state.history));
    setState(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        history: newHistory
      });
    });
  };

  var handleSelect = function handleSelect(item) {
    onSelect(item);
  };

  var handleClickItem = function handleClickItem(item) {
    if (item.children && item.children.length > 0) {
      handleNavToChildren(item);
    } else {
      handleSelect(item);
    }
  };

  var onChange = function onChange(ev) {
    var onSearch = searchOptions === null || searchOptions === void 0 ? void 0 : searchOptions.onSearch;

    if (onSearch) {
      var searchValue = ev.target.value;
      var searchResult = onSearch(searchValue);
      setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          searchValue: searchValue,
          searchResult: searchResult
        });
      });
    }
  };

  var current = state.history[0];
  var children = current.children || [];
  var level = state.history.length - 1;
  var parentItem = transformParentItem(omit(current, 'children'));
  var hasSearchResult = ((_state$searchValue = state.searchValue) === null || _state$searchValue === void 0 ? void 0 : _state$searchValue.length) > 0;

  var isSelectedWithLevel = function isSelectedWithLevel(item) {
    return isSelected(item, level);
  };

  var currentTitle = current.title || title;
  return /*#__PURE__*/React.createElement("span", {
    ref: innerRef
  }, HeaderComponent ? /*#__PURE__*/React.createElement(HeaderComponent, {
    title: currentTitle,
    showBack: state.history.length > 1,
    onClickBack: handleBack
  }) : null, level > 0 ? current.header ? current.header : typeof options.childrenHeader === 'function' ? options.childrenHeader(level) : options.childrenHeader : options.header, /*#__PURE__*/React.createElement(ContentComponent, null, canSelectParent && level > 0 ? /*#__PURE__*/React.createElement(ItemRow, {
    radioPosition: radioPosition,
    item: parentItem,
    onClick: handleClickItem,
    isSelected: isSelectedWithLevel(parentItem),
    ellipsis: ellipsis,
    noDivider: noDivider
  }) : null, searchOptions && level === 0 && /*#__PURE__*/React.createElement("div", {
    className: cx('u-ml-1 u-mb-half', _defineProperty({
      'u-mr-1': currentTitle
    }, styles['search-container--without-title'], !currentTitle))
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: searchOptions.placeholderSearch,
    onChange: onChange,
    value: state.searchValue
  })), hasSearchResult ? state.searchResult.length === 0 ? /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    className: "u-flex u-flex-justify-center u-mb-1 "
  }, searchOptions.noDataLabel) : state.searchResult.map(function (item, index) {
    return /*#__PURE__*/React.createElement(ItemRow, {
      radioPosition: radioPosition,
      key: item.key || item.title,
      item: item,
      onClick: handleClickItem,
      isSelected: isSelectedWithLevel(item),
      isLast: index === state.searchResult.length - 1,
      ellipsis: ellipsis,
      noDivider: noDivider
    });
  }) : children.map(function (item, index) {
    return /*#__PURE__*/React.createElement(ItemRow, {
      radioPosition: radioPosition,
      key: item.key || item.title,
      item: item,
      onClick: handleClickItem,
      isSelected: isSelectedWithLevel(item),
      isLast: index === children.length - 1,
      ellipsis: ellipsis,
      noDivider: noDivider
    });
  })));
};

NestedSelect.defaultProps = {
  ContentComponent: List,
  HeaderComponent: null,
  transformParentItem: function transformParentItem(x) {
    return x;
  },
  radioPosition: 'right'
};
var ItemPropType = PropTypes.shape({
  /** Used to open NestedSelect on the element with this "id" value */
  focusedId: PropTypes.string,

  /** Header shown above options list */
  header: PropTypes.node,

  /** Icon shown on the left of the item */
  icon: PropTypes.element,

  /** Key used for the item, if not passed, title is used */
  key: PropTypes.string,

  /** Label used for the item */
  title: PropTypes.node,

  /** Description of the item */
  description: PropTypes.node,

  /** Options below the current one */
  children: PropTypes.array,

  /** Additional information */
  info: PropTypes.node,

  /** Action displayed to the right of item */
  action: PropTypes.shape({
    /** Component to render */
    Component: PropTypes.func,

    /** Props to pass to the component */
    props: PropTypes.object
  })
});
NestedSelect.propTypes = {
  /** Can be set to "right" or "left". Defaults to "right" */
  radioPosition: PropTypes.oneOf(['left', 'right']),

  /** The whole option item is passed to this function when selected */
  onSelect: PropTypes.func.isRequired,

  /** Determines if the row looks selected. The `option` is passed as an argument. */
  isSelected: PropTypes.func.isRequired,

  /** Options that will be rendered as nested lists of choices */
  options: PropTypes.shape({
    /** Header shown above options list */
    header: PropTypes.node,

    /** Header shown above options list inside a children */
    childrenHeader: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /** Array of options */
    children: PropTypes.arrayOf(ItemPropType)
  }),

  /** If true, parent option will be shown at the top of its children */
  canSelectParent: PropTypes.bool,

  /**
   * `parentItem` is passed into this function before being used to render
   * the parent item row (canSelectParent must be true).
   * Use this if you want the parent to have a different text on the "outer"
   * row than inside the "inner" row.
   *
   * @example
   * ```
   * const transformParentItem = item => ({ ...item, title: "Everything"})
   * ````
   */
  transformParentItem: PropTypes.func,

  /**
   * Search options defines :
   * - placeholder in input search
   * - the implementation of a search
   * - how to display the results of a search
   */
  searchOptions: PropTypes.shape({
    placeholderSearch: PropTypes.string.isRequired,
    noDataLabel: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
  }),

  /** To manage ellipsis on ItemRow */
  ellipsis: PropTypes.bool,

  /** Remove dividers after each row */
  noDivider: PropTypes.bool,

  /** Component to wrap the content  */
  ContentComponent: PropTypes.elementType
};
export default NestedSelect;