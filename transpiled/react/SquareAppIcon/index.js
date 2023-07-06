import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["name", "variant", "IconContent"];
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import AppIcon from "cozy-ui/transpiled/react/AppIcon";
import Badge from "cozy-ui/transpiled/react/Badge";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconCheckAnimated from "cozy-ui/transpiled/react/Icons/IconCheckAnimated";
import InfosBadge from "cozy-ui/transpiled/react/InfosBadge";
import Spinner from "cozy-ui/transpiled/react/Spinner";
import SvgIconCrossAnimated from "cozy-ui/transpiled/react/Icons/IconCrossAnimated";
import Typography from "cozy-ui/transpiled/react/Typography";
import iconOut from "cozy-ui/transpiled/react/Icons/LinkOut";
import iconPlus from "cozy-ui/transpiled/react/Icons/Plus";
import iconWarning from "cozy-ui/transpiled/react/Icons/WarningCircle";
import { alpha, makeStyles } from "cozy-ui/transpiled/react/styles";
import { nameToColor } from "cozy-ui/transpiled/react/Avatar";
import CozyTheme, { useCozyTheme } from "cozy-ui/transpiled/react/CozyTheme";
var styles = {
  "SquareAppIcon-wrapper": "styles__SquareAppIcon-wrapper___2SEuM",
  "SquareAppIcon-icon-container": "styles__SquareAppIcon-icon-container___39MRl",
  "SquareAppIcon-wrapper-ghost": "styles__SquareAppIcon-wrapper-ghost___1ZALZ",
  "SquareAppIcon-icon-container-normal": "styles__SquareAppIcon-icon-container-normal___DCe9y",
  "SquareAppIcon-wrapper-maintenance": "styles__SquareAppIcon-wrapper-maintenance___2ne2n",
  "SquareAppIcon-wrapper-loading": "styles__SquareAppIcon-wrapper-loading___3A1_X",
  "SquareAppIcon-spinner": "styles__SquareAppIcon-spinner___o0LO1",
  "onEnd": "styles__onEnd___1O6Q7",
  "isFailed": "styles__isFailed___2AYxx",
  "isSuccess": "styles__isSuccess___I6nFq",
  "end-animation": "styles__end-animation___1O0b3"
};
var useStyles = makeStyles(function (theme) {
  return {
    name: _defineProperty({
      color: 'var(--primaryTextColor)',
      width: '5.5rem',
      textAlign: 'center',
      fontSize: '0.875rem',
      lineHeight: '1.188rem',
      margin: '0.5rem 0.25rem 0 0.25rem',
      lineClamp: '2',
      boxOrient: 'vertical',
      display: '-webkit-box',
      height: '2.375rem'
    }, theme.breakpoints.down('sm'), {
      width: '3.75rem',
      fontSize: '0.6875rem',
      lineHeight: '1rem',
      margin: '0.25rem 0.25rem 0 0.25rem',
      height: '2rem'
    }),
    nameInverted: {
      textShadow: theme.textShadows[1]
    },
    squareAppIconGhost: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.ghostOpacity),
      border: "1px dashed ".concat(alpha(theme.palette.primary.main, theme.palette.border.ghostOpacity))
    },
    letter: {
      color: 'white',
      margin: 'auto'
    },
    shadow: {
      boxShadow: theme.shadows[1]
    },
    errorIcon: {
      fill: 'var(--errorColor)',
      backgroundColor: 'var(--primaryContrastTextColor)',
      borderRadius: '1rem'
    },
    tileWrapper: _defineProperty({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '6rem'
    }, theme.breakpoints.down('sm'), {
      width: '4.25rem'
    })
  };
});

var shouldRenderSpinner = function shouldRenderSpinner(variant, animationState) {
  return ['loading'].includes(variant) || animationState;
};

var SquareAppIconSpinner = function SquareAppIconSpinner(_ref) {
  var variant = _ref.variant,
      animationState = _ref.animationState;

  if (!shouldRenderSpinner(variant, animationState)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Spinner, {
    className: cx(styles['SquareAppIcon-spinner'], 'u-m-0')
  });
};

export var SquareAppIcon = function SquareAppIcon(_ref2) {
  var _cx;

  var name = _ref2.name,
      variant = _ref2.variant,
      IconContent = _ref2.IconContent,
      appIconProps = _objectWithoutProperties(_ref2, _excluded);

  var theme = useCozyTheme();
  var classes = useStyles();
  var appName = name || get(appIconProps, 'app.name') || get(appIconProps, 'app') || '';
  var letter = appName[0] || '';
  var prevVariant = React.useRef(variant);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      animationState = _useState2[0],
      setAnimationState = _useState2[1];

  var handleAnimationEnd = function handleAnimationEnd(e) {
    if (e.animationName.includes('end')) setAnimationState();
  };

  useEffect(function () {
    var curr = prevVariant.current;
    if (curr === 'loading' && variant === 'error') setAnimationState('failed');
    if (curr === 'loading' && (variant === 'default' || variant === undefined)) setAnimationState('success');
    prevVariant.current = variant;
  }, [variant]);
  var squareTheme = ['add', 'ghost'].includes(variant) ? theme : 'normal';
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "square-app-icon",
    className: cx(classes.tileWrapper)
  }, /*#__PURE__*/React.createElement(CozyTheme, {
    variant: squareTheme
  }, /*#__PURE__*/React.createElement(InfosBadge, {
    badgeContent: variant === 'shortcut' ? /*#__PURE__*/React.createElement(Icon, {
      size: "10",
      icon: iconOut
    }) : null,
    overlap: "rectangular",
    invisible: variant !== 'shortcut'
  }, /*#__PURE__*/React.createElement(SquareAppIconSpinner, {
    variant: variant,
    animationState: animationState
  }), /*#__PURE__*/React.createElement(Badge, {
    className: cx(styles['SquareAppIcon-wrapper'], styles["SquareAppIcon-wrapper-".concat(variant)], (_cx = {}, _defineProperty(_cx, classes.squareAppIconGhost, ['ghost', 'add'].includes(variant)), _defineProperty(_cx, classes.shadow, !['add', 'ghost'].includes(variant)), _cx)),
    badgeContent: variant === 'error' ? /*#__PURE__*/React.createElement(Icon, {
      size: "16",
      className: cx(classes.errorIcon),
      icon: iconWarning
    }) : '',
    color: variant === 'error' ? 'error' : undefined,
    withBorder: false,
    size: "large",
    overlap: "rectangular",
    style: variant === 'shortcut' && !IconContent ? {
      backgroundColor: nameToColor(name)
    } : null
  }, variant === 'shortcut' && !IconContent ? /*#__PURE__*/React.createElement(Typography, {
    className: classes.letter,
    variant: "h2",
    align: "center"
  }, letter.toUpperCase()) : /*#__PURE__*/React.createElement("div", {
    className: cx(styles['SquareAppIcon-icon-container'], _defineProperty({}, styles['SquareAppIcon-icon-container-normal'], theme === 'normal'))
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(styles['onEnd'], _defineProperty({}, styles['isSuccess'], animationState === 'success'), _defineProperty({}, styles['isFailed'], animationState === 'failed')),
    onAnimationEnd: handleAnimationEnd
  }, animationState && /*#__PURE__*/React.createElement(Icon, {
    size: "32",
    icon: animationState === 'success' ? IconCheckAnimated : SvgIconCrossAnimated
  })), variant === 'add' ? /*#__PURE__*/React.createElement(Icon, {
    icon: iconPlus,
    color: "var(--primaryColor)"
  }) : IconContent ? IconContent : /*#__PURE__*/React.createElement(AppIcon, appIconProps))))), /*#__PURE__*/React.createElement(Typography, {
    className: cx(classes.name, _defineProperty({}, classes.nameInverted, theme === 'inverted'), 'u-spacellipsis'),
    variant: "h6",
    align: "center"
  }, appName));
};
SquareAppIcon.propTypes = {
  name: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'loading', 'ghost', 'maintenance', 'error', 'add', 'shortcut']),
  IconContent: PropTypes.node
};
SquareAppIcon.defaultProps = {
  variant: 'default'
};
export default SquareAppIcon;