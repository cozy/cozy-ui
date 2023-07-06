import { getLuminance, useTheme } from '@material-ui/core';
import { useEffect } from 'react';
import { getFlagshipMetadata, isFlagshipApp } from 'cozy-device-helper';
import { useWebviewIntent } from 'cozy-intent';
import { ThemeColor, parseArg } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";
export var DOMStrings;

(function (DOMStrings) {
  DOMStrings["BackgroundDefault"] = "default";
  DOMStrings["BackgroundPaper"] = "paper";
  DOMStrings["CozyBarBackground"] = "background-color";
  DOMStrings["CozyBarClass"] = ".coz-bar-wrapper";
  DOMStrings["CozyBarPrimaryClass"] = "coz-theme-primary";
  DOMStrings["DialogClass"] = ".MuiPaper-root";
  DOMStrings["OverlayActive"] = "rgba(0, 0, 0, 0.5)";
  DOMStrings["OverlayTransparent"] = "transparent";
  DOMStrings["RootModalColor"] = "color";
  DOMStrings["SidebarID"] = "sidebar";
})(DOMStrings || (DOMStrings = {}));

var LUMINANCE_BREAKPOINT = 0.5;
export var makeOnMount = function makeOnMount(_ref) {
  var cozybar = _ref.cozybar,
      fullscreen = _ref.fullscreen,
      sidebar = _ref.sidebar,
      rootModal = _ref.rootModal,
      theme = _ref.theme;
  var hasBottomBackground = !rootModal;
  var hasTopBackground = cozybar && !rootModal;
  return fullscreen ? {
    bottomBackground: theme.palette.background.paper,
    bottomTheme: ThemeColor.Dark,
    topBackground: theme.palette.background.paper,
    topTheme: ThemeColor.Dark
  } : {
    bottomBackground: hasBottomBackground ? theme.palette.background[sidebar ? DOMStrings.BackgroundDefault : DOMStrings.BackgroundPaper] : undefined,
    bottomTheme: ThemeColor.Light,
    bottomOverlay: DOMStrings.OverlayActive,
    topOverlay: DOMStrings.OverlayActive,
    topBackground: hasTopBackground ? getComputedStyle(cozybar).getPropertyValue(DOMStrings.CozyBarBackground) : undefined,
    topTheme: ThemeColor.Light
  };
};
export var makeOnUnmount = function makeOnUnmount(_ref2) {
  var rootModal = _ref2.rootModal,
      theme = _ref2.theme,
      immersive = _ref2.immersive,
      sidebar = _ref2.sidebar,
      cozybar = _ref2.cozybar;
  var hasDarkRoot = rootModal && getLuminance(getComputedStyle(rootModal).getPropertyValue(DOMStrings.RootModalColor)) < LUMINANCE_BREAKPOINT;
  var hasBottomBackground = !rootModal;
  var hasDarkBottomTheme = hasDarkRoot || !immersive;
  var hasTopBackground = cozybar && !rootModal;
  var hasDarkTopTheme = hasDarkRoot || !immersive && !(cozybar && cozybar.classList.contains(DOMStrings.CozyBarPrimaryClass));
  return {
    bottomBackground: hasBottomBackground ? theme.palette.background[sidebar ? DOMStrings.BackgroundDefault : DOMStrings.BackgroundPaper] : undefined,
    bottomTheme: hasDarkBottomTheme ? ThemeColor.Dark : ThemeColor.Light,
    bottomOverlay: DOMStrings.OverlayTransparent,
    topOverlay: DOMStrings.OverlayTransparent,
    topBackground: hasTopBackground ? getComputedStyle(cozybar).getPropertyValue(DOMStrings.CozyBarBackground) : undefined,
    topTheme: hasDarkTopTheme ? ThemeColor.Dark : ThemeColor.Light
  };
};

var makeCaller = function makeCaller(fullScreen, hasAnotherDialog, immersive) {
  return ['cozy-ui/Dialog', fullScreen ? '--fullScreen' : '', hasAnotherDialog ? '--stacked' : '', immersive ? '--immersive' : ''].join('');
};

var getRootModal = function getRootModal() {
  var modals = document.querySelectorAll(DOMStrings.DialogClass);
  /**
   * If we have more than one modal, we are in a stacked dialog scenario.
   * In this case we want to have access to the DOM element of the root modal.
   * This will allow us to apply the correct background color if a root modal exists, for instance.
   */

  return modals.length > 1 ? modals[0] : null;
};

var useHook = function useHook(open, fullscreen) {
  var theme = useTheme();
  var cozybar = document.querySelector(DOMStrings.CozyBarClass);
  var sidebar = document.getElementById(DOMStrings.SidebarID);
  var rootModal = getRootModal();
  var immersive = Boolean(getFlagshipMetadata().immersive);
  useDialogSetFlagshipUI(open, makeOnMount({
    fullscreen: fullscreen,
    theme: theme,
    sidebar: sidebar,
    rootModal: rootModal,
    cozybar: cozybar
  }), makeOnUnmount({
    rootModal: rootModal,
    theme: theme,
    immersive: immersive,
    sidebar: sidebar,
    cozybar: cozybar
  }), makeCaller(!!fullscreen, !!rootModal, immersive));
};
/**
 * Custom version of useSetFlagshipUi() that is aware of the Dialog component.
 *
 * The difference here is that we send messages to the Native app when a props change.
 * In the original version, we send the mount message as soon as the component is rendered.
 *
 * Dialog can be rendered but hidden, so we need to wait for the open prop to be true
 */


export var useDialogSetFlagshipUI = function useDialogSetFlagshipUI(open, onMount, onUnmount, caller) {
  var webviewIntent = useWebviewIntent();
  useEffect(function () {
    if (open) parseArg(webviewIntent, onMount, "".concat(caller || 'unknown', " (onOpenMount)"));
    return function () {
      /**
       * As we are listening to the open prop, we still want to send an unmount message when the prop changes to false.
       * To avoid false positives, we need to ensure the component is currently showing.
       * We do that by checking if value of open during this cleanup cycle is false,
       * if it is, that means the component is currently showing and is in the process of hiding.
       *
       * Note that this will also handle abrupt unmounting, as in hiding the dialog without using the open prop.
       */
      if (open === false || open === undefined) return;
      parseArg(webviewIntent, onUnmount, "".concat(caller || 'unknown', " (onOpenUnmount)"));
    };
    /**
     * We don't want to listen to onMount/onUnmount arguments
     * It will create far too many unwanted calls
     * We only care about webviewIntent or open props presence,
     * Open should always be present, webviewIntent is more uncertain
     */
  }, [open, webviewIntent]); // eslint-disable-line react-hooks/exhaustive-deps
};
export var useDialogEffects = isFlagshipApp() ? useHook : // eslint-disable-next-line @typescript-eslint/no-empty-function
function () {};