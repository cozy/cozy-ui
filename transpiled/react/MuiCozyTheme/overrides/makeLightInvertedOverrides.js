import merge from 'lodash/merge';
import { makeLightNormalOverrides } from "cozy-ui/transpiled/react/MuiCozyTheme/overrides/makeLightNormalOverrides";
export var makeLightInvertedOverrides = function makeLightInvertedOverrides(theme) {
  var makeOverridesForInvertedTheme = function makeOverridesForInvertedTheme(theme) {
    return {
      MuiLinearProgress: {
        colorPrimary: {
          backgroundColor: 'rgba(255,255,255,0.2)'
        },
        colorSecondary: {
          backgroundColor: 'rgba(255,255,255,0.2)'
        }
      },
      MuiSnackbarContent: {
        root: {
          backgroundColor: theme.palette.grey[200]
        }
      },
      MuiTabs: {
        root: {
          '&.segmented': {
            '& $indicator': {
              backgroundColor: theme.palette.primary.main
            }
          }
        }
      },
      MuiTab: {
        root: {
          '&.segmented': {
            '&$selected': {
              color: theme.palette.primary.contrastText
            }
          }
        }
      },
      MuiSwitch: {
        switchBase: {
          color: theme.palette.grey[100]
        },
        colorPrimary: {
          '&$checked': {
            '& + $track': {
              backgroundColor: theme.palette.success.dark
            }
          }
        },
        colorSecondary: {
          '&$checked': {
            '& + $track': {
              backgroundColor: theme.palette.success.dark
            }
          }
        }
      }
    };
  };

  var invertedOverrides = merge(makeLightNormalOverrides(theme), makeOverridesForInvertedTheme(theme));
  return invertedOverrides;
};