import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import flag from 'cozy-flags';
var styles = {
  "Sections__section": "Sections__Sections__section___2onYy"
};
import * as catUtils from "cozy-ui/transpiled/react/AppSections/categories";
import AppsSection from "cozy-ui/transpiled/react/AppSections/components/AppsSection";
import DropdownFilter from "cozy-ui/transpiled/react/AppSections/components/DropdownFilter";
import { APP_TYPE } from "cozy-ui/transpiled/react/AppSections/constants";
import { generateI18nConfig } from "cozy-ui/transpiled/react/AppSections/generateI18nConfig";
import { isShortcutFile } from "cozy-ui/transpiled/react/AppSections/helpers";
var en = {
  app_categories: {
    all: "All categories",
    banking: "Banking",
    clouds: "Clouds and vaults",
    cozy: "The essentials",
    education: "Education",
    energy: "Energy",
    finance: "Employment and finance",
    health: "Health",
    host_provider: "Host",
    insurance: "Insurance",
    isp: "Mobile and Internet",
    konnectors: "Services",
    list_separator: ", ",
    mes_infos: "MesInfos experimentation",
    online_services: "Online services",
    others: "Others",
    partners: "Partners",
    press: "Press",
    productivity: "Productivity",
    ptnb: "PTNB experimentation",
    public_service: "Public services",
    shopping: "Shopping",
    social: "Social",
    tech: "Tech",
    telecom: "Telecom",
    transport: "Transportation",
    pro: "Work",
    shortcuts: "Additional apps"
  },
  sections: {
    applications: "Applications",
    konnectors: "Services",
    shortcuts: "Additional apps"
  }
};
var fr = {
  app_categories: {
    all: "Toutes les cat\xE9gories",
    banking: "Banques",
    clouds: "Clouds et coffres",
    cozy: "Les essentielles",
    education: "\xC9ducation",
    energy: "Energie",
    finance: "Emploi et finance",
    health: "Sant\xE9",
    host_provider: "H\xE9bergeur",
    insurance: "Assurance",
    isp: "Mobile et Internet",
    konnectors: "Services",
    list_separator: ", ",
    mes_infos: "Exp\xE9rimentation MesInfos",
    online_services: "Services en ligne",
    others: "Autres",
    partners: "Partenaires",
    press: "Presse",
    productivity: "Productivit\xE9",
    ptnb: "Exp\xE9rimentation Carnet du Logement",
    public_service: "Services publics",
    shopping: "Shopping",
    social: "Social",
    tech: "Tech",
    telecom: "Mobile",
    transport: "Voyage et transport",
    pro: "Travail",
    shortcuts: "App suppl\xE9mentaires"
  },
  sections: {
    applications: "Applications",
    konnectors: "Services",
    shortcuts: "App suppl\xE9mentaires"
  }
};
var ru = {
  app_categories: {
    all: "\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
    banking: "\u0411\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0435 \u0434\u0435\u043B\u043E",
    clouds: "\u041E\u0431\u043B\u0430\u043A\u0430 \u0438 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430",
    cozy: "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",
    education: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435",
    energy: "\u042D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0430",
    finance: "\u0417\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u044C \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u044B",
    health: "\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435",
    host_provider: "\u0425\u043E\u0441\u0442\u0438\u043D\u0433",
    insurance: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435",
    isp: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C \u0438 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442",
    konnectors: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B",
    list_separator: ", ",
    mes_infos: "\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 MesInfos",
    online_services: "\u041E\u043D\u043B\u0430\u0439\u043D-\u0441\u0435\u0440\u0432\u0438\u0441\u044B",
    others: "\u041F\u0440\u043E\u0447\u0435\u0435",
    partners: "\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u044B",
    press: "\u041F\u0440\u0435\u0441\u0441\u0430",
    productivity: "\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",
    ptnb: "\u042D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 PTNB",
    public_service: "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438",
    shopping: "\u041F\u043E\u043A\u0443\u043F\u043A\u0438",
    social: "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438",
    tech: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438",
    telecom: "\u0422\u0435\u043B\u0435\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438",
    transport: "\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
    pro: "\u0420\u0430\u0431\u043E\u0442\u0430",
    shortcuts: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F"
  },
  sections: {
    applications: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
    konnectors: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B",
    shortcuts: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F"
  }
};
var vi = {
  app_categories: {
    all: "T\u1EA5t c\u1EA3 danh m\u1EE5c",
    banking: "Ng\xE2n h\xE0ng",
    clouds: "\u0110\xE1m m\xE2y v\xE0 kho l\u01B0u tr\u1EEF",
    cozy: "Thi\u1EBFt y\u1EBFu",
    education: "Gi\xE1o d\u1EE5c",
    energy: "N\u0103ng l\u01B0\u1EE3ng",
    finance: "Vi\u1EC7c l\xE0m v\xE0 t\xE0i ch\xEDnh",
    health: "S\u1EE9c kh\u1ECFe",
    host_provider: "M\xE1y ch\u1EE7",
    insurance: "B\u1EA3o hi\u1EC3m",
    isp: "Di \u0111\u1ED9ng v\xE0 Internet",
    konnectors: "D\u1ECBch v\u1EE5",
    list_separator: ", ",
    mes_infos: "Th\xED nghi\u1EC7m MesInfos",
    online_services: "D\u1ECBch v\u1EE5 tr\u1EF1c tuy\u1EBFn",
    others: "Kh\xE1c",
    partners: "\u0110\u1ED1i t\xE1c",
    press: "B\xE1o ch\xED",
    productivity: "N\u0103ng su\u1EA5t",
    ptnb: "Th\xED nghi\u1EC7m PTNB",
    public_service: "D\u1ECBch v\u1EE5 c\xF4ng",
    shopping: "Mua s\u1EAFm",
    social: "M\u1EA1ng x\xE3 h\u1ED9i",
    tech: "C\xF4ng ngh\u1EC7",
    telecom: "Vi\u1EC5n th\xF4ng",
    transport: "Giao th\xF4ng",
    pro: "C\xF4ng vi\u1EC7c",
    shortcuts: "\u1EE8ng d\u1EE5ng b\u1ED5 sung"
  },
  sections: {
    applications: "\u1EE8ng d\u1EE5ng",
    konnectors: "D\u1ECBch v\u1EE5",
    shortcuts: "\u1EE8ng d\u1EE5ng b\u1ED5 sung"
  }
};
import * as searchUtils from "cozy-ui/transpiled/react/AppSections/search";
import Typography from "cozy-ui/transpiled/react/Typography";
import { useBreakpoints } from "cozy-ui/transpiled/react/providers/Breakpoints";
import { useI18n, useExtendI18n } from "cozy-ui/transpiled/react/providers/I18n";
import withOnlyLocales from "cozy-ui/transpiled/react/providers/I18n/withOnlyLocales";
var locales = {
  en: en,
  fr: fr,
  ru: ru,
  vi: vi
};

var SectionTitle = function SectionTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "h3",
    gutterBottom: true
  }, children);
};

var SectionSubtitle = function SectionSubtitle(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "h4",
    className: "u-mv-1-half u-mb-1"
  }, children);
};

var SectionSubSubtitle = function SectionSubSubtitle(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(Typography, {
    variant: "subtitle1",
    color: "textSecondary",
    gutterBottom: true
  }, children);
};

var Section = function Section(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.Sections__section
  }, children);
};
/**
 * Shows a list of apps grouped by categories.
 *
 * Can be
 *
 * - uncontrolled: it controls an internal search object to filter the list.
 * - controlled: it is controlled by the `search` prop
 */


export var Sections = /*#__PURE__*/function (_Component) {
  _inherits(Sections, _Component);

  var _super = _createSuper(Sections);

  function Sections(props, context) {
    var _this;

    _classCallCheck(this, Sections);

    _this = _super.call(this, props, context);
    _this.state = {
      search: props.initialSearch || {}
    };
    _this.handleCategoryChange = _this.handleCategoryChange.bind(_assertThisInitialized(_this));
    return _this;
  } // Sets state.search from the option received from the DropdownFilter


  _createClass(Sections, [{
    key: "handleCategoryChange",
    value: function handleCategoryChange(categoryOption) {
      var search = searchUtils.makeSearchFromOption(categoryOption);

      if (!this.props.search) {
        // the component is uncontrolled
        this.setState({
          search: search
        });
      }

      if (typeof this.props.onSearchChange === 'function') {
        this.props.onSearchChange(search);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          apps = _this$props.apps,
          error = _this$props.error,
          onAppClick = _this$props.onAppClick,
          _this$props$breakpoin = _this$props.breakpoints,
          breakpoints = _this$props$breakpoin === void 0 ? {} : _this$props$breakpoin,
          hasNav = _this$props.hasNav,
          IconComponent = _this$props.IconComponent,
          showFilterDropdown = _this$props.showFilterDropdown,
          showTitles = _this$props.showTitles,
          showSubTitles = _this$props.showSubTitles,
          showSubSubTitles = _this$props.showSubSubTitles,
          displaySpecificMaintenanceStyle = _this$props.displaySpecificMaintenanceStyle,
          componentsProps = _this$props.componentsProps;
      var isMobile = breakpoints.isMobile,
          isTablet = breakpoints.isTablet;
      if (error) return /*#__PURE__*/React.createElement("p", {
        className: "u-error"
      }, error.message); // Depending on whether the component is controlled or uncontrolled,
      // search is taken from props or state

      var search = this.props.search || this.state.search;
      var searchMatcher = searchUtils.makeMatcherFromSearch(search);
      var filteredApps = apps.filter(searchMatcher);
      var konnectorGroups = catUtils.groupApps(filteredApps.filter(function (a) {
        return a.type === APP_TYPE.KONNECTOR;
      }));
      var webAppGroups = catUtils.groupApps(filteredApps.filter(function (a) {
        return a.type === APP_TYPE.WEBAPP;
      }));
      var shortcutsGroups = catUtils.groupApps(filteredApps.filter(function (a) {
        return isShortcutFile(a);
      }));
      var webAppsCategories = Object.keys(webAppGroups).map(function (cat) {
        return catUtils.addLabel({
          value: cat
        }, t);
      }).sort(catUtils.sorter);
      var konnectorsCategories = Object.keys(konnectorGroups).map(function (cat) {
        return catUtils.addLabel({
          value: cat
        }, t);
      }).sort(catUtils.sorter);
      var shortcutsCategories = Object.keys(shortcutsGroups).map(function (cat) {
        return catUtils.addLabel({
          value: cat
        }, t);
      }).sort(catUtils.sorter);
      var dropdownDisplayed = hasNav && (isMobile || isTablet) && showFilterDropdown;
      var rawSelectOptions = catUtils.generateOptionsFromApps(apps, {
        includeAll: true
      });
      var selectOptions = rawSelectOptions.map(function (option) {
        return catUtils.addLabel(option, t);
      });
      var optionMatcher = searchUtils.makeOptionMatcherFromSearch(search);
      var defaultFilterValue = selectOptions.find(optionMatcher);
      return /*#__PURE__*/React.createElement("div", {
        className: cx(styles.Sections, dropdownDisplayed && 'u-mt-half')
      }, dropdownDisplayed && /*#__PURE__*/React.createElement(DropdownFilter, {
        defaultValue: defaultFilterValue,
        options: selectOptions,
        onChange: this.handleCategoryChange
      }), !isMobile && !!webAppsCategories.length && showTitles && /*#__PURE__*/React.createElement(SectionTitle, null, t('sections.applications')), /*#__PURE__*/React.createElement(Section, null, !!webAppsCategories.length && /*#__PURE__*/React.createElement("div", null, webAppsCategories.map(function (cat) {
        return /*#__PURE__*/React.createElement(AppsSection, {
          key: cat.value,
          appsList: webAppGroups[cat.value],
          subtitle: /*#__PURE__*/React.createElement(SectionSubtitle, null, cat.label),
          onAppClick: onAppClick,
          IconComponent: IconComponent,
          displaySpecificMaintenanceStyle: displaySpecificMaintenanceStyle
        });
      })), !!shortcutsCategories.length && /*#__PURE__*/React.createElement("div", null, showSubTitles && /*#__PURE__*/React.createElement(SectionSubtitle, null, t('sections.shortcuts')), shortcutsCategories.map(function (cat) {
        return /*#__PURE__*/React.createElement(AppsSection, _extends({
          key: cat.value
        }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.appsSection, {
          appsList: shortcutsGroups[cat.value],
          subtitle: showSubSubTitles ? /*#__PURE__*/React.createElement(SectionSubSubtitle, null, cat.label) : null,
          IconComponent: IconComponent,
          onAppClick: onAppClick,
          displaySpecificMaintenanceStyle: displaySpecificMaintenanceStyle
        }));
      })), !!konnectorsCategories.length && /*#__PURE__*/React.createElement("div", null, showSubTitles && /*#__PURE__*/React.createElement(SectionSubtitle, null, t('sections.konnectors')), konnectorsCategories.map(function (cat) {
        return /*#__PURE__*/React.createElement(AppsSection, _extends({
          key: cat.value
        }, componentsProps === null || componentsProps === void 0 ? void 0 : componentsProps.appsSection, {
          appsList: konnectorGroups[cat.value],
          subtitle: showSubSubTitles ? /*#__PURE__*/React.createElement(SectionSubSubtitle, null, cat.label) : null,
          IconComponent: IconComponent,
          onAppClick: onAppClick,
          displaySpecificMaintenanceStyle: displaySpecificMaintenanceStyle
        }));
      }))));
    }
  }]);

  return Sections;
}(Component);

var SectionsWrapper = function SectionsWrapper(props) {
  var config = flag('store.alternative-source');
  var i18nConfig = generateI18nConfig(config === null || config === void 0 ? void 0 : config.categories);
  useExtendI18n(i18nConfig);

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var breakpoints = useBreakpoints();
  return /*#__PURE__*/React.createElement(Sections, _extends({}, props, {
    breakpoints: breakpoints,
    t: t
  }));
};

Sections.propTypes = {
  t: PropTypes.func.isRequired,

  /** List of apps that will be displayed into categories */
  apps: PropTypes.array.isRequired,
  error: PropTypes.object,
  onAppClick: PropTypes.func.isRequired,

  /** Whether to display the category selector */
  hasNav: PropTypes.bool,

  /** An initial search object. Changing it after mounting will do nothing. */
  initialSearch: PropTypes.object,
  displaySpecificMaintenanceStyle: PropTypes.bool
};
Sections.defaultProps = {
  hasNav: true,
  displaySpecificMaintenanceStyle: false,

  /** Whether to show the top dropdown that is used to switch categories on mobile */
  showFilterDropdown: true,

  /** Whether to show titles (ex: Applications) */
  showTitles: true,

  /** Whether to show sub titles (ex: Application category) */
  showSubTitles: true,

  /** Whether to show sub sub titles (ex: Konnector category) */
  showSubSubTitles: true,

  /* Props passed to components with the same name */
  componentsProps: PropTypes.shape({
    /** Props spread to AppsSection component */
    appsSection: PropTypes.shape({
      /** Props spread to onClick method of AppTile component */
      disableClick: PropTypes.func
    })
  })
};
export default withOnlyLocales(locales)(SectionsWrapper);