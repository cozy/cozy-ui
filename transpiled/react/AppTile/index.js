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
    favorite: "Ajout\xE9 sur l'accueil"
  }
};
var ru = {
  app_item: {
    by: "\u041E\u0442",
    installed: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E",
    maintenance: "\u041D\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0438",
    update: "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E",
    favorite: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"
  }
};
var vi = {
  app_item: {
    by: "B\u1EDFi",
    installed: "\u0110\xE3 c\xE0i \u0111\u1EB7t",
    maintenance: "\u0110ang b\u1EA3o tr\xEC",
    update: "C\xF3 c\u1EADp nh\u1EADt m\u1EDBi",
    favorite: "\u0110\xE3 th\xEAm v\xE0o trang ch\u1EE7"
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
import { createUseI18n } from "cozy-ui/transpiled/react/providers/I18n";
var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
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
  var name = nameProp || app.name;
  var statusLabel = getCurrentStatusLabel(app);
  var isStatusArray = Array.isArray(showStatus);
  var statusToDisplay = isShortcutFile(app) && statusLabel === APP_STATUS.installed ? 'favorite' : isStatusArray ? showStatus.indexOf(statusLabel) > -1 && statusLabel : showStatus && statusLabel;
  var IconComponent = IconComponentProp || AppIcon;
  var isInMaintenanceWithSpecificDisplay = displaySpecificMaintenanceStyle && statusLabel === APP_STATUS.maintenance;
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
  }, namePrefix ? "".concat(namePrefix, " ").concat(name) : name), developer.name && showDeveloper && /*#__PURE__*/React.createElement(TileSubtitle, null, "".concat(t('app_item.by'), " ").concat(developer.name)), statusToDisplay && /*#__PURE__*/React.createElement(TileFooter, {
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