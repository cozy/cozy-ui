import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import sortBy from 'lodash/sortBy';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
var styles = {
  "AppsSection": "AppsSection__AppsSection___3WHhE",
  "AppsSection__list": "AppsSection__AppsSection__list___2Uy0E"
};
import AppTile from "cozy-ui/transpiled/react/AppTile";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";
import { getTranslatedManifestProperty } from "cozy-ui/transpiled/react/AppSections/helpers";

var makeNameGetter = function makeNameGetter(t) {
  return function (app) {
    return getTranslatedManifestProperty(app, 'name', t);
  };
};

var makeAppsListNameLowerCased = function makeAppsListNameLowerCased(appsList) {
  return appsList.map(function (app) {
    return _objectSpread(_objectSpread({}, app), {}, {
      name: app.name.toLowerCase()
    });
  });
};

export var AppsSection = function AppsSection(_ref) {
  var appsList = _ref.appsList,
      subtitle = _ref.subtitle,
      onAppClick = _ref.onAppClick,
      IconComponent = _ref.IconComponent,
      displaySpecificMaintenanceStyle = _ref.displaySpecificMaintenanceStyle,
      disableClick = _ref.disableClick;

  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var apps = useMemo(function () {
    return makeAppsListNameLowerCased(appsList);
  }, [appsList]);
  var sortedApps = useMemo(function () {
    return sortBy(apps, makeNameGetter(t));
  }, [apps, t]);
  var getAppBySlug = useMemo(function () {
    return function (slug) {
      return appsList.find(function (app) {
        return app.slug === slug;
      });
    };
  }, [appsList]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.AppsSection
  }, subtitle, apps && !!apps.length && /*#__PURE__*/React.createElement("div", {
    className: styles.AppsSection__list
  }, sortedApps.map(function (app) {
    var realApp = getAppBySlug(app.slug);
    var isDisableClick = disableClick === null || disableClick === void 0 ? void 0 : disableClick(realApp);
    return /*#__PURE__*/React.createElement(AppTile, {
      app: realApp,
      namePrefix: getTranslatedManifestProperty(realApp, 'name_prefix', t),
      name: getTranslatedManifestProperty(realApp, 'name', t),
      onClick: function onClick() {
        return !isDisableClick && onAppClick(realApp.slug);
      },
      key: realApp.slug,
      showDeveloper: !isMobile,
      displaySpecificMaintenanceStyle: displaySpecificMaintenanceStyle,
      IconComponent: IconComponent
    });
  })));
};
AppsSection.propTypes = {
  appsList: PropTypes.array,
  subtitle: PropTypes.element,
  onAppClick: PropTypes.func,
  IconComponent: PropTypes.element,
  displaySpecificMaintenanceStyle: PropTypes.bool,
  disableClick: PropTypes.func
};
export default AppsSection;