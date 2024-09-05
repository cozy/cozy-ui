import React from 'react';
// @ts-expect-error - The following component is not typed
import { nameToColor } from 'cozy-ui/react/Avatar/helpers'; // @ts-expect-error - The following component is not typed

import Typography from 'cozy-ui/react/Typography';
var styles = {
  "AppTile-icon": "styles__AppTile-icon___1f0c0",
  "AppTile-icon--default": "styles__AppTile-icon--default___1tjiF",
  "AppTile-icon-maintenance": "styles__AppTile-icon-maintenance___2VOvO",
  "AppTile-container-maintenance": "styles__AppTile-container-maintenance___u1a1M"
};
import { TileIcon } from "cozy-ui/transpiled/react/Tile";
import { makeStyles } from "cozy-ui/transpiled/react/styles";
var useStyles = makeStyles({
  letter: {
    color: 'white',
    margin: 'auto'
  },
  letterWrapper: {
    backgroundColor: function backgroundColor(_ref) {
      var name = _ref.name;
      return nameToColor(name);
    }
  }
});
export var ShortcutTile = function ShortcutTile(_ref2) {
  var _file$attributes, _file$attributes$meta, _file$attributes2, _file$attributes2$met;

  var file = _ref2.file;
  var classes = useStyles({
    name: file.name
  });
  var icon = (_file$attributes = file.attributes) === null || _file$attributes === void 0 ? void 0 : (_file$attributes$meta = _file$attributes.metadata) === null || _file$attributes$meta === void 0 ? void 0 : _file$attributes$meta.icon;
  var iconMimeType = (_file$attributes2 = file.attributes) === null || _file$attributes2 === void 0 ? void 0 : (_file$attributes2$met = _file$attributes2.metadata) === null || _file$attributes2$met === void 0 ? void 0 : _file$attributes2$met.iconMimeType;

  if (icon) {
    return /*#__PURE__*/React.createElement(TileIcon, null, /*#__PURE__*/React.createElement("img", {
      className: styles['AppTile-icon'],
      src: iconMimeType ? "data:".concat(iconMimeType, ";base64,").concat(icon) : "data:image/svg+xml;base64,".concat(window.btoa(icon)),
      width: 48,
      height: 48,
      alt: file.name
    }));
  }

  return /*#__PURE__*/React.createElement(TileIcon, null, /*#__PURE__*/React.createElement("div", {
    className: classes.letterWrapper
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.letter,
    variant: "h2",
    align: "center"
  }, file.name[0].toUpperCase())));
};