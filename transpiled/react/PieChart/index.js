import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["data", "options", "primaryText", "secondaryText", "single", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '@material-ui/core';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import Typography from "cozy-ui/transpiled/react/Typography";
import isTesting from "cozy-ui/transpiled/react/helpers/isTesting";
ChartJS.register(ArcElement, Tooltip);
var useStyles = makeStyles(function (theme) {
  return {
    container: {
      position: 'relative',
      zIndex: '1',
      width: '192px',
      height: '192px'
    },
    background: {
      position: 'absolute',
      boxSizing: 'border-box',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      border: '24px solid var(--actionColorGhost)',
      borderRadius: '100%',
      zIndex: -1,
      backgroundColor: function backgroundColor(_ref) {
        var single = _ref.single;
        return !single && theme.palette.variant === 'inverted' ? theme.palette.primary.main : 'none';
      },
      boxShadow: function boxShadow(_ref2) {
        var single = _ref2.single;
        return !single && theme.palette.variant === 'inverted' ? "0 0 0 2px ".concat(theme.palette.primary.main) : 'none';
      }
    },
    centerText: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      top: '25px',
      left: '25px',
      right: '25px',
      bottom: '25px',
      borderRadius: '50%',
      zIndex: '-1'
    },
    typography: {
      color: function color(_ref3) {
        var single = _ref3.single;
        return !single && theme.palette.variant === 'inverted' ? theme.palette.primary.contrastText : theme.palette.text.primary;
      }
    }
  };
});
export var makeOptions = function makeOptions(_ref4) {
  var options = _ref4.options,
      single = _ref4.single;

  var madeOptions = _objectSpread({
    cutout: '75%',
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    animation: isTesting() ? false : {
      duration: 1000
    }
  }, options);

  if (single) set(madeOptions, 'plugins.tooltip.filter', function (item) {
    return item.label;
  });
  return madeOptions;
};
export var makeData = function makeData(_ref5) {
  var data = _ref5.data,
      single = _ref5.single,
      theme = _ref5.theme;
  var madeData = cloneDeep(data);
  if (single) set(madeData, 'datasets[0].backgroundColor', [theme.palette.primary.main, 'transparent']);
  return madeData;
};

var PieChart = function PieChart(_ref6) {
  var data = _ref6.data,
      _ref6$options = _ref6.options,
      options = _ref6$options === void 0 ? {} : _ref6$options,
      primaryText = _ref6.primaryText,
      secondaryText = _ref6.secondaryText,
      _ref6$single = _ref6.single,
      single = _ref6$single === void 0 ? false : _ref6$single,
      className = _ref6.className,
      props = _objectWithoutProperties(_ref6, _excluded);

  var theme = useTheme();
  var classes = useStyles({
    single: single
  });
  var madeOptions = makeOptions({
    options: options,
    single: single
  });
  var madeData = makeData({
    data: data,
    single: single,
    theme: theme
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx(classes.container, className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: classes.background
  }), /*#__PURE__*/React.createElement(Doughnut, {
    data: madeData,
    options: madeOptions
  }), (primaryText || secondaryText) && /*#__PURE__*/React.createElement("div", {
    className: classes.centerText
  }, primaryText && /*#__PURE__*/React.createElement(Typography, {
    classes: {
      root: classes.typography
    },
    variant: "h3"
  }, primaryText), secondaryText && /*#__PURE__*/React.createElement(Typography, {
    classes: {
      root: classes.typography
    },
    variant: "body2"
  }, secondaryText)));
};

PieChart.propTypes = {
  /** Data to be passed to chart.js graph */
  data: PropTypes.object.isRequired,

  /** Options to be passed to chart.js graph */
  options: PropTypes.object,

  /** Text to show as primary */
  primaryText: PropTypes.string,

  /** Text to show as secondary */
  secondaryText: PropTypes.string,

  /** Whether to use a single data */
  single: PropTypes.bool,
  className: PropTypes.string
};
export default PieChart;