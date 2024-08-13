import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "cozy-ui/transpiled/react/styles";
import Banner from "cozy-ui/transpiled/react/Banner";
import { LinearProgress } from "cozy-ui/transpiled/react/Progress";
import Typography from "cozy-ui/transpiled/react/Typography";
var progressHeight = '0.125rem';

var styles = function styles(theme) {
  return {
    banner: {
      backgroundColor: theme.palette.background.contrast
    },
    progress: {
      backgroundColor: 'transparent',
      height: progressHeight,
      marginTop: "-".concat(progressHeight)
    }
  };
};

var ProgressionBanner = withStyles(styles)(function (_ref) {
  var classes = _ref.classes,
      value = _ref.value,
      text = _ref.text,
      icon = _ref.icon,
      button = _ref.button,
      progressBar = _ref.progressBar;
  var variant = value ? 'determinate' : undefined;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Banner, {
    className: classes.banner,
    icon: icon,
    text: /*#__PURE__*/React.createElement(Typography, {
      component: "span",
      variant: "h6"
    }, text),
    buttonOne: button,
    inline: true
  }), progressBar && /*#__PURE__*/React.createElement(LinearProgress, {
    className: classes.progress,
    variant: variant,
    value: value
  }));
});
ProgressionBanner.propTypes = {
  /** Percentage of progression, should be between 0 and 100 */
  value: PropTypes.number,

  /** Text to be shown in the banner */
  text: PropTypes.string,

  /** Icon to be shown in the banner */
  icon: PropTypes.node,

  /** Button to use in the banner */
  button: PropTypes.node,

  /** Progression bar is hidden if set to false (defaults to true) */
  progressBar: PropTypes.bool
};
ProgressionBanner.defaultProps = {
  progressBar: true
};
export default ProgressionBanner;