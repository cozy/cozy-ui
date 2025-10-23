/* eslint-disable @typescript-eslint/ban-ts-comment */
// TODO: remove eslint-disable and @ts-ignore rules
import { useTheme } from '@material-ui/core';
import { isFlagshipApp } from 'cozy-device-helper';
import { getFlagshipMetadata } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/helpers";
import { useSetFlagshipUI } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";
import { useCozyTheme } from "cozy-ui/transpiled/react/providers/CozyTheme";

var getTopBackground = function getTopBackground(theme, cozyBar) {
  return cozyBar && getComputedStyle(cozyBar).getPropertyValue('background-color') || theme.palette.background.paper;
};

var getTopTheme = function getTopTheme(cozyBar, isLight) {
  return getFlagshipMetadata().immersive || cozyBar && cozyBar.classList.contains('coz-theme-primary') || // Needed for previous versions of cozy-bar like v7. Can be removed when all apps in v12.
  !isLight ? 'light' : 'dark';
};

var useHook = function useHook() {
  var theme = useTheme();

  var _useCozyTheme = useCozyTheme(),
      isLight = _useCozyTheme.isLight;

  var cozyBar = document.querySelector('.coz-bar-wrapper');
  var sidebar = document.getElementById('sidebar');
  useSetFlagshipUI({
    bottomBackground: theme.palette.background.paper,
    // @ts-expect-error
    bottomTheme: isLight ? 'dark' : 'light',
    topBackground: theme.palette.background.paper,
    // @ts-expect-error
    topTheme: isLight ? 'dark' : 'light'
  }, {
    bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper'],
    bottomTheme: getFlagshipMetadata().immersive || !isLight ? 'light' : 'dark',
    bottomOverlay: 'transparent',
    topOverlay: 'transparent',
    topBackground: getTopBackground(theme, cozyBar),
    topTheme: getTopTheme(cozyBar, isLight)
  }, 'cozy-ui/Modal');
};

var Component = function Component() {
  useHook();
  return null;
};

export var ModalEffects = isFlagshipApp() ? Component : function () {
  return null;
};