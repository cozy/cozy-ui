/* eslint-disable @typescript-eslint/ban-ts-comment */
// TODO: remove eslint-disable and @ts-ignore rules
import { useTheme } from '@material-ui/core';
import { getFlagshipMetadata, isFlagshipApp } from 'cozy-device-helper';
import { useSetFlagshipUI } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";

var getTopBackground = function getTopBackground(theme, cozyBar) {
  return cozyBar && getComputedStyle(cozyBar).getPropertyValue('background-color') || theme.palette.background.paper;
};

var getTopTheme = function getTopTheme(cozyBar) {
  return getFlagshipMetadata().immersive || cozyBar && cozyBar.classList.contains('coz-theme-primary') ? 'light' : 'dark';
};

var useHook = function useHook() {
  var theme = useTheme();
  var cozyBar = document.querySelector('.coz-bar-wrapper');
  var sidebar = document.getElementById('sidebar');
  useSetFlagshipUI({
    bottomBackground: theme.palette.background.paper,
    // @ts-ignore
    bottomTheme: 'dark',
    topBackground: theme.palette.background.paper,
    // @ts-ignore
    topTheme: 'dark'
  }, {
    bottomBackground: theme.palette.background[sidebar ? 'default' : 'paper'],
    bottomTheme: getFlagshipMetadata().immersive ? 'light' : 'dark',
    bottomOverlay: 'transparent',
    topOverlay: 'transparent',
    topBackground: getTopBackground(theme, cozyBar),
    topTheme: getTopTheme(cozyBar)
  }, 'cozy-ui/Modal');
};

var Component = function Component() {
  useHook();
  return null;
};

export var ModalEffects = isFlagshipApp() ? Component : function () {
  return null;
};