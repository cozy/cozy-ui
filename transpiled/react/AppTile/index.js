import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { APP_STATUS, getCurrentStatusLabel } from "cozy-ui/transpiled/react/AppTile/helpers";
var en = {
  app_item: {
    by: "By",
    installed: "Installed",
    maintenance: "In maintenance",
    update: "Update available",
    favorite: "Added to home page"
  }
};
var fr = {
  app_item: {
    by: "Par",
    installed: "Install\xE9e",
    maintenance: "En maintenance",
    update: "Mise \xE0 jour dispo.",
    favorite: "Ajout\xE9 sur la page d'accueil"
  }
};
var styles = {
  "AppTile-icon": "styles__AppTile-icon___1f0c0",
  "AppTile-icon--default": "styles__AppTile-icon--default___1tjiF",
  "AppTile-icon-maintenance": "styles__AppTile-icon-maintenance___2VOvO",
  "AppTile-container-maintenance": "styles__AppTile-container-maintenance___u1a1M"
};
import AppIcon from "cozy-ui/transpiled/react/AppIcon";
import { isShortcutFile } from "cozy-ui/transpiled/react/AppSections/helpers.js";
import Icon from "cozy-ui/transpiled/react/Icon";
import WrenchCircleIcon from "cozy-ui/transpiled/react/Icons/WrenchCircle";
import { ShortcutTile } from "cozy-ui/transpiled/react/ShortcutTile";
import Tile, { TileTitle, TileSubtitle, TileFooter, TileIcon, TileDescription } from "cozy-ui/transpiled/react/Tile";
import palette from "cozy-ui/transpiled/react/palette";
import { AppDoctype } from "cozy-ui/transpiled/react/proptypes";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { createUseI18n } from "cozy-ui/transpiled/react/providers/I18n";
var locales = {
  en: en,
  fr: fr
};
var dataset;

var getDataset = function getDataset() {
  if (dataset) return dataset;
  var root = document.querySelector('[role=application]');
  dataset = root && root.dataset;
  return dataset;
};

var getAppIconProps = function getAppIconProps() {
  return {
    domain: getDataset() && getDataset().cozyDomain,
    secure: window.location.protocol === 'https:'
  };
};

var useI18n = createUseI18n(locales);
export var AppTile = function AppTile(_ref) {
  var _app$metadata;

  var app = _ref.app,
      nameProp = _ref.name,
      namePrefix = _ref.namePrefix,
      onClick = _ref.onClick,
      showDeveloper = _ref.showDeveloper,
      showStatus = _ref.showStatus,
      IconComponentProp = _ref.IconComponent,
      displaySpecificMaintenanceStyle = _ref.displaySpecificMaintenanceStyle;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var _app$developer = app.developer,
      developer = _app$developer === void 0 ? {} : _app$developer;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var name = nameProp || app.name;
  var statusLabel = getCurrentStatusLabel(app);
  var isStatusArray = Array.isArray(showStatus);
  var statusToDisplay = isShortcutFile(app) && statusLabel === APP_STATUS.installed && isMobile ? 'favorite' : isStatusArray ? showStatus.indexOf(statusLabel) > -1 && statusLabel : showStatus && statusLabel;
  var IconComponent = IconComponentProp || AppIcon;
  var isInMaintenanceWithSpecificDisplay = displaySpecificMaintenanceStyle && statusLabel === APP_STATUS.maintenance;
  var tileSubtitle = isShortcutFile(app) ? (_app$metadata = app.metadata) === null || _app$metadata === void 0 ? void 0 : _app$metadata.source : developer.name;
  return /*#__PURE__*/React.createElement(Tile, {
    tag: "button",
    type: "button",
    onClick: onClick,
    className: cx(_defineProperty({}, styles['AppTile-container-maintenance'], isInMaintenanceWithSpecificDisplay)),
    isSecondary: statusLabel === APP_STATUS.installed
  }, /*#__PURE__*/React.createElement(TileIcon, null, isShortcutFile(app) ? /*#__PURE__*/React.createElement(ShortcutTile, {
    file: app
  }) : /*#__PURE__*/React.createElement(IconComponent, _extends({
    app: app,
    className: styles['AppTile-icon']
  }, getAppIconProps())), isInMaintenanceWithSpecificDisplay && /*#__PURE__*/React.createElement(Icon, {
    "data-testid": "icon-maintenance",
    icon: WrenchCircleIcon,
    color: palette['coolGrey'],
    className: styles['AppTile-icon-maintenance']
  })), /*#__PURE__*/React.createElement(TileDescription, {
    className: styles["AppTile-description"]
  }, /*#__PURE__*/React.createElement(TileTitle, {
    isMultiline: !statusLabel
  }, namePrefix ? "".concat(namePrefix, " ").concat(name) : name), showDeveloper && /*#__PURE__*/React.createElement(TileSubtitle, null, "".concat(t('app_item.by'), " ").concat(tileSubtitle)), statusToDisplay && /*#__PURE__*/React.createElement(TileFooter, {
    isAccent: statusLabel === APP_STATUS.update
  }, t("app_item.".concat(statusToDisplay)))));
};
AppTile.propTypes = {
  app: AppDoctype,
  name: PropTypes.string,
  namePrefix: PropTypes.string,
  onClick: PropTypes.func,
  IconComponent: PropTypes.element,
  showDeveloper: PropTypes.bool,
  showStatus: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  displaySpecificMaintenanceStyle: PropTypes.bool
};
AppTile.defaultProps = {
  showDeveloper: true,
  showStatus: true,
  displaySpecificMaintenanceStyle: false
};
export default AppTile;