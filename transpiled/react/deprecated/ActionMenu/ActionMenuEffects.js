/* eslint-disable @typescript-eslint/ban-ts-comment */
// TODO: remove eslint-disable and @ts-ignore rules
import { useTheme } from '@material-ui/core';
import { isFlagshipApp } from 'cozy-device-helper';
import { isRsg } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/helpers";
import { useSetFlagshipUI } from "cozy-ui/transpiled/react/hooks/useSetFlagshipUi/useSetFlagshipUI";
import { useCozyTheme } from "cozy-ui/transpiled/react/providers/CozyTheme";

var getBottomBackground = function getBottomBackground(theme) {
  var sidebar = document.getElementById('sidebar');
  return sidebar ? getComputedStyle(sidebar).getPropertyValue('background-color') : theme.palette.background.paper;
};

var useHook = function useHook() {
  var theme = useTheme();

  var _useCozyTheme = useCozyTheme(),
      isLight = _useCozyTheme.isLight;

  useSetFlagshipUI({
    bottomBackground: theme.palette.background.paper,
    // @ts-expect-error
    bottomTheme: isLight ? 'dark' : 'light',
    topOverlay: 'rgba(0, 0, 0, 0.5)',
    topBackground: theme.palette.background.paper,
    // @ts-expect-error
    topTheme: 'light'
  }, {
    bottomBackground: getBottomBackground(theme),
    bottomTheme: isLight ? 'dark' : 'light',
    topOverlay: 'transparent',
    topBackground: theme.palette.background.paper,
    topTheme: isLight ? 'dark' : 'light'
  }, 'cozy-ui/ActionMenu');
};

export var useActionMenuEffects = isFlagshipApp() || isRsg ? useHook : // eslint-disable-next-line @typescript-eslint/no-empty-function
function () {};