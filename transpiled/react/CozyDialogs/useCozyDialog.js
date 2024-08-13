import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["size", "actions", "actionsLayout", "title", "content", "open", "opened", "onBack", "onClose", "align", "disableTitleAutoPadding", "isFluidTitle", "disableGutters", "titleRef", "background", "componentsProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { useState } from 'react';
import cx from 'classnames';
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
import DialogTransition from "cozy-ui/transpiled/react/CozyDialogs/DialogTransition";
var globalId = 0;
var modalSizes = ['small', 'medium', 'large'];
var useStyles = makeStyles({
  paper: {
    background: function background(_ref) {
      var _background = _ref.background;
      return _background !== null && _background !== void 0 ? _background : 'var(--paperBackgroundColor)';
    }
  }
});

var useCozyDialog = function useCozyDialog(props) {
  var _componentsProps$dial;

  var size = props.size,
      actions = props.actions,
      actionsLayout = props.actionsLayout,
      title = props.title,
      content = props.content,
      open = props.open,
      opened = props.opened,
      onBack = props.onBack,
      onClose = props.onClose,
      align = props.align,
      disableTitleAutoPadding = props.disableTitleAutoPadding,
      isFluidTitle = props.isFluidTitle,
      disableGutters = props.disableGutters,
      titleRef = props.titleRef,
      background = props.background,
      componentsProps = props.componentsProps,
      otherProps = _objectWithoutProperties(props, _excluded);

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var _useState = useState(globalId++),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var paperClassName = modalSizes.includes(size) ? "".concat(size) : 'medium';
  var scrollPaperClassName = align == 'top' ? "alignTop" : '';
  var fullScreen = size !== 'small' && isMobile;
  var TransitionComponent = DialogTransition;
  var styles = useStyles({
    background: background
  });

  var dialogProps = _objectSpread(_objectSpread({
    'aria-labelledby': "modal-title-".concat(id),
    fullScreen: fullScreen,
    open: open !== undefined ? open : opened,
    onClose: onClose,
    TransitionComponent: TransitionComponent
  }, otherProps), {}, {
    classes: _objectSpread(_objectSpread({}, otherProps.classes), {}, {
      paper: "".concat(paperClassName, " ").concat(styles.paper, " ").concat(otherProps.classes ? otherProps.classes.paper : ''),
      scrollPaper: scrollPaperClassName
    }),
    TransitionProps: _objectSpread({
      fullScreen: fullScreen
    }, otherProps.TransitionProps)
  });

  var showCloseButton = !fullScreen && onClose;
  var showBackButton = onBack || fullScreen && onClose; // back and close buttons are merged in fullScreen

  var dialogTitleProps = _objectSpread(_objectSpread({}, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.dialogTitle), {}, {
    id: "modal-title-".concat(id),
    ref: titleRef,
    disableTypography: true,
    className: 'cozyDialogTitle ' + cx({
      'u-ellipsis': !isFluidTitle,
      dialogTitleFluid: isFluidTitle,
      dialogTitleWithClose: showCloseButton && !disableTitleAutoPadding,
      dialogTitleWithBack: showBackButton && !disableTitleAutoPadding
    }, componentsProps === null || componentsProps === void 0 ? void 0 : (_componentsProps$dial = componentsProps.dialogTitle) === null || _componentsProps$dial === void 0 ? void 0 : _componentsProps$dial.className)
  });

  var listItemClassName = 'listItem--dialog';
  var listItemProps = {
    classes: {
      root: listItemClassName
    }
  };
  var dividerClassName = 'divider--dialog';
  var dividerProps = {
    classes: {
      root: dividerClassName
    }
  };
  var dialogActionsClassName = 'cozyDialogActions';
  var dialogActionsProps = {
    classes: {
      root: dialogActionsClassName
    }
  };
  var dialogContentProps = {
    classes: {
      root: cx({
        disableGutters: disableGutters
      })
    },
    className: 'cozyDialogContent'
  };
  return {
    dialogProps: dialogProps,
    dialogTitleProps: dialogTitleProps,
    listItemProps: listItemProps,
    id: id,
    fullScreen: fullScreen,
    dividerProps: dividerProps,
    dialogActionsProps: dialogActionsProps,
    dialogContentProps: dialogContentProps
  };
};

export default useCozyDialog;