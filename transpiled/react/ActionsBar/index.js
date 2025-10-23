import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useRef, useState, useMemo } from 'react';
import ResponsiveAction from "cozy-ui/transpiled/react/ActionsBar/ResponsiveAction";
import withActionsLocales from "cozy-ui/transpiled/react/ActionsBar/locales/withActionsLocales";
import ActionsMenu from "cozy-ui/transpiled/react/ActionsMenu";
import { makeActions, others } from "cozy-ui/transpiled/react/ActionsMenu/Actions";
import { getOnlyNeededActions } from "cozy-ui/transpiled/react/ActionsMenu/Actions/helpers";
import ActionsItems from "cozy-ui/transpiled/react/ActionsMenu/ActionsItems";
import AppBar from "cozy-ui/transpiled/react/AppBar";
import Box from "cozy-ui/transpiled/react/Box";
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import CheckCircleIcon from "cozy-ui/transpiled/react/Icons/CheckCircle";
import CrossIcon from "cozy-ui/transpiled/react/Icons/Cross";
import CrossCircleIcon from "cozy-ui/transpiled/react/Icons/CrossCircle";
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";
import Toolbar from "cozy-ui/transpiled/react/Toolbar";
import Typography from "cozy-ui/transpiled/react/Typography";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import CozyTheme from "cozy-ui/transpiled/react/providers/CozyTheme";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  appBar: function appBar(_ref) {
    var isMobile = _ref.isMobile;
    return {
      width: !isMobile ? 'calc(100% - 44px)' : '100%',
      right: !isMobile ? '22px' : '0',
      height: isMobile ? '4rem' : '3rem',
      top: isMobile ? 'auto' : 0,
      bottom: isMobile ? 0 : undefined,
      zIndex: 'var(--zIndex-selection)',
      borderRadius: isMobile ? '16px 16px 0 0' : '0 0 16px 16px',
      boxShadow: isMobile ? 'var(--shadow8)' : 'var(--shadow1)'
    };
  },
  toolbar: {
    height: 'inherit'
  },
  selectedCount: function selectedCount(_ref2) {
    var isMobile = _ref2.isMobile;
    return {
      display: 'flex',
      flexShrink: 0,
      position: 'relative',
      height: 'inherit',
      minWidth: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '0.5rem',
      gap: !isMobile ? '1rem' : undefined,
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        right: '-0.5rem',
        borderTop: '0.5rem solid transparent',
        borderBottom: '0.5rem solid transparent',
        borderLeft: '0.5rem solid var(--primaryColor)'
      }
    };
  },
  desktopCloseButton: {
    position: 'absolute',
    right: 0
  },
  actionsContainer: function actionsContainer(_ref3) {
    var isMobile = _ref3.isMobile;
    return {
      display: 'flex',
      height: '100%',
      flexGrow: 1,
      paddingRight: !isMobile ? 48 : 0,
      alignItems: 'center',
      justifyContent: !isMobile ? 'end' : 'center'
    };
  }
});

var SelectedCount = function SelectedCount(_ref4) {
  var docs = _ref4.docs,
      onClose = _ref4.onClose;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  if (isMobile) return /*#__PURE__*/React.createElement(Box, {
    className: "u-flex u-flex-items-center u-h-100 u-pr-1",
    borderRadius: "15px 0 0 0",
    bgcolor: "primary.main",
    color: "primary.contrastText"
  }, /*#__PURE__*/React.createElement(IconButton, {
    color: "inherit",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CrossCircleIcon
  })), docs.length);
  return /*#__PURE__*/React.createElement("div", {
    className: "u-flex u-flex-items-center u-h-100 u-ph-1"
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "u-mr-1",
    icon: CheckCircleIcon,
    color: "var(--iconTextColor)"
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "body1",
    component: "span"
  }, t('selected_light', docs.length)));
};

var ActionsBar = function ActionsBar(_ref5) {
  var actions = _ref5.actions,
      docs = _ref5.docs,
      autoClose = _ref5.autoClose,
      maxDesktopActions = _ref5.maxDesktopActions,
      onClose = _ref5.onClose;

  var _useBreakpoints2 = useBreakpoints(),
      isMobile = _useBreakpoints2.isMobile;

  var anchorRef = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showMenu = _useState2[0],
      setShowMenu = _useState2[1];

  var styles = useStyles({
    isMobile: isMobile
  });
  var showDesktopCloseButton = !!onClose && !isMobile;
  var maxActionsDisplayed = isMobile ? 4 : maxDesktopActions;
  var cleanedActions = useMemo(function () {
    return getOnlyNeededActions(actions, docs);
  }, [actions, docs]);
  var countActionsToDisplay = cleanedActions.length > maxActionsDisplayed ? maxActionsDisplayed - 1 : maxActionsDisplayed;
  var SLICE_INDEX = Math.max(1, countActionsToDisplay);
  var barActions = cleanedActions.slice(0, SLICE_INDEX);
  var menuActions = cleanedActions.slice(SLICE_INDEX);
  var otherAction = makeActions([others]);

  var handleClick = function handleClick() {
    autoClose && (onClose === null || onClose === void 0 ? void 0 : onClose());
  };

  return /*#__PURE__*/React.createElement(CozyTheme, {
    variant: "inverted"
  }, /*#__PURE__*/React.createElement(AppBar, {
    className: styles.appBar,
    position: "fixed",
    color: "inherit"
  }, /*#__PURE__*/React.createElement(Toolbar, {
    className: styles.toolbar,
    variant: isMobile ? 'regular' : 'dense',
    disableGutters: true
  }, showDesktopCloseButton && /*#__PURE__*/React.createElement(IconButton, {
    className: styles.desktopCloseButton,
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: CrossIcon
  })), /*#__PURE__*/React.createElement(SelectedCount, {
    docs: docs,
    onClose: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.actionsContainer
  }, /*#__PURE__*/React.createElement(ActionsItems, {
    docs: docs,
    component: ResponsiveAction,
    actions: barActions,
    onClick: handleClick
  }), menuActions.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, isMobile ? /*#__PURE__*/React.createElement(ActionsItems, {
    docs: docs,
    component: ResponsiveAction,
    actions: otherAction,
    onClick: function onClick() {
      return setShowMenu(true);
    }
  }) : /*#__PURE__*/React.createElement(IconButton, {
    ref: anchorRef,
    onClick: function onClick() {
      return setShowMenu(true);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: DotsIcon
  })), /*#__PURE__*/React.createElement(ActionsMenu, {
    ref: anchorRef,
    open: showMenu,
    docs: docs,
    actions: menuActions,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    componentsProps: {
      actionsItems: {
        onClick: handleClick
      }
    },
    onClose: function onClose() {
      return setShowMenu(false);
    }
  }))))));
};

ActionsBar.propTypes = {
  /**
   * A number corresponding to the display of the maximum number of items.
   * The other actions will be displayed in an additional menu.
   * Only works on desktop since maximum number is forced in mobile
   */
  maxDesktopActions: PropTypes.number,
  autoClose: PropTypes.bool
};
ActionsBar.defaultProps = {
  maxDesktopActions: 5,
  autoClose: true
};
export default withActionsLocales(ActionsBar);