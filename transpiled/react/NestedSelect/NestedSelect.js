import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _toArray from "@babel/runtime/helpers/toArray";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import Input from "cozy-ui/transpiled/react/Input";
import Typography from "cozy-ui/transpiled/react/Typography";
import ItemRow from "cozy-ui/transpiled/react/NestedSelect/ItemRow";
export { ItemRow };
/**
 * Select like component to choose an option among a list of options.
 * Options can have children; selecting an option that has children
 * will show the children of the chosen option instead of selecting
 * the option.
 */

var NestedSelect = /*#__PURE__*/function (_Component) {
  _inherits(NestedSelect, _Component);

  var _super = _createSuper(NestedSelect);

  function NestedSelect(props) {
    var _this;

    _classCallCheck(this, NestedSelect);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleBack", function () {
      var _this$state$history = _toArray(_this.state.history),
          item = _this$state$history[0],
          newHistory = _this$state$history.slice(1);

      _this.setState({
        history: newHistory
      });

      return item;
    });

    _defineProperty(_assertThisInitialized(_this), "handleNavToChildren", function (item) {
      var newHistory = [item].concat(_toConsumableArray(_this.state.history));

      _this.setState({
        history: newHistory
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (item) {
      _this.props.onSelect(item); // It is important to reset history if the NestedSelected is used
      // multiple times in a row without being dismounted. For example
      // if it displayed in Carousel that slides in the NestedSelect
      // and slides it out on selection.
      // But, we want in this case that the resetting does not happen
      // while the animation is running.
      // There is probably a better way to do this.


      setTimeout(function () {
        _this.resetHistory();
      }, 500);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (item) {
      if (item.children && item.children.length > 0) {
        _this.handleNavToChildren(item);
      } else {
        _this.handleSelect(item);
      }
    });

    _this.state = {
      history: [props.options],
      searchValue: '',
      searchResult: []
    };
    return _this;
  }

  _createClass(NestedSelect, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "resetHistory",
    value: function resetHistory() {
      if (this.unmounted) {
        return;
      }

      this.setState({
        history: [this.props.options]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ContentComponent = _this$props.ContentComponent,
          HeaderComponent = _this$props.HeaderComponent,
          canSelectParent = _this$props.canSelectParent,
          isSelected = _this$props.isSelected,
          title = _this$props.title,
          transformParentItem = _this$props.transformParentItem,
          radioPosition = _this$props.radioPosition;
      var _this$state = this.state,
          history = _this$state.history,
          searchValue = _this$state.searchValue,
          searchResult = _this$state.searchResult;
      var current = history[0];
      var children = current.children || [];
      var level = history.length - 1;

      var isSelectedWithLevel = function isSelectedWithLevel(item) {
        return isSelected(item, level);
      };

      var parentItem = transformParentItem(omit(current, 'children'));
      var searchOptions = this.props.searchOptions;
      var hasSearchResult = searchValue.length > 0;

      var onChange = function onChange(ev) {
        var onSearch = searchOptions && searchOptions.onSearch;

        if (onSearch) {
          var _searchValue = ev.target.value;

          var _searchResult = onSearch(_searchValue);

          _this2.setState({
            searchValue: _searchValue,
            searchResult: _searchResult
          });
        }
      };

      return /*#__PURE__*/React.createElement(React.Fragment, null, HeaderComponent ? /*#__PURE__*/React.createElement(HeaderComponent, {
        title: current.title || title,
        showBack: history.length > 1,
        onClickBack: this.handleBack
      }) : null, /*#__PURE__*/React.createElement(ContentComponent, null, canSelectParent && level > 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ItemRow, {
        radioPosition: radioPosition,
        item: parentItem,
        onClick: this.handleClickItem,
        isSelected: isSelectedWithLevel(parentItem)
      })) : null, searchOptions && level === 0 && /*#__PURE__*/React.createElement("div", {
        className: "u-mh-1 u-mb-half"
      }, /*#__PURE__*/React.createElement(Input, {
        placeholder: searchOptions.placeholderSearch,
        onChange: onChange,
        value: searchValue
      })), hasSearchResult ? searchResult.length === 0 ? /*#__PURE__*/React.createElement(Typography, {
        variant: "body1",
        className: "u-flex u-flex-justify-center u-mb-1 "
      }, searchOptions.noDataLabel) : searchResult.map(function (item) {
        return /*#__PURE__*/React.createElement(ItemRow, {
          radioPosition: radioPosition,
          key: item.key || item.title,
          item: item,
          onClick: _this2.handleClickItem,
          isSelected: isSelectedWithLevel(item)
        });
      }) : children.map(function (item) {
        return /*#__PURE__*/React.createElement(ItemRow, {
          radioPosition: radioPosition,
          key: item.key || item.title,
          item: item,
          onClick: _this2.handleClickItem,
          isSelected: isSelectedWithLevel(item)
        });
      })));
    }
  }]);

  return NestedSelect;
}(Component);

NestedSelect.defaultProps = {
  ContentComponent: 'div',
  HeaderComponent: null,
  transformParentItem: function transformParentItem(x) {
    return x;
  },
  radioPosition: 'right'
};
var ItemPropType = PropTypes.shape({
  icon: PropTypes.element,

  /** Key used for the item, if not passed, title is used */
  key: PropTypes.string,

  /** Label used for the item */
  title: PropTypes.node.isRequired,

  /** Description of the item */
  description: PropTypes.node,

  /** Options below the current one */
  children: PropTypes.array
});
NestedSelect.propTypes = {
  /**
   * Can be set to "right" or "left". Defaults to "right"
   */
  radioPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * The whole option item is passed to this function when selected
   */
  onSelect: PropTypes.func.isRequired,

  /**
   * Determines if the row looks selected. The `option` is
   * passed as an argument.
   */
  isSelected: PropTypes.func.isRequired,

  /**
   * Options that will be rendered as nested lists of choices
   */
  options: PropTypes.shape({
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
  })
};
export default NestedSelect;