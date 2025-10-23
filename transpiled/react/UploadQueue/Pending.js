import React from 'react';
import Typography from "cozy-ui/transpiled/react/Typography";
import { translate } from "cozy-ui/transpiled/react/providers/I18n";
var Pending = translate()(function (props) {
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "primary"
  }, props.t('item.pending'));
});
export default Pending;