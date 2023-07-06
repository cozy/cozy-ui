/* eslint-disable @typescript-eslint/ban-ts-comment */
// TODO: remove eslint-disable and @ts-ignore rules
import { useTheme } from '@material-ui/core';
import { isFlagshipApp } from 'cozy-device-helper';
import { getCssVariableValue } from "cozy-ui/transpiled/react/utils/color";
import { useSetFlagshipUI } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";

var getBottomBackground = function getBottomBackground(theme) {
  var sidebar = document.getElementById('sidebar');
  return sidebar ? getComputedStyle(sidebar).getPropertyValue('background-color') : theme.palette.background.paper;
};

var useHook = function useHook() {
  var theme = useTheme();
  useSetFlagshipUI({
    bottomBackground: theme.palette.background.paper,
    // @ts-ignore
    bottomTheme: 'dark',
    topOverlay: getCssVariableValue('overlay'),
    topBackground: theme.palette.background.paper,
    // @ts-ignore
    topTheme: 'light'
  }, {
    bottomBackground: getBottomBackground(theme),
    bottomTheme: 'dark',
    topOverlay: 'transparent',
    topBackground: theme.palette.background.paper,
    topTheme: 'dark'
  }, 'cozy-ui/ActionMenu');
};

export var useActionMenuEffects = isFlagshipApp() ? useHook : // eslint-disable-next-line @typescript-eslint/no-empty-function
function () {};