import _extends from "@babel/runtime/helpers/extends";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Typography from "cozy-ui/transpiled/react/Typography";
import { translate } from "cozy-ui/transpiled/react/providers/I18n";
import withBreakpoints from "cozy-ui/transpiled/react/helpers/withBreakpoints";
import AppsSection from "cozy-ui/transpiled/react/AppSections/components/AppsSection";
import DropdownFilter from "cozy-ui/transpiled/react/AppSections/components/DropdownFilter";
import { APP_TYPE } from "cozy-ui/transpiled/react/AppSections/constants";
import * as searchUtils from "cozy-ui/transpiled/react/AppSections/search";
import * as catUtils from "cozy-ui/transpiled/react/AppSections/categories";
var styles = {
  "Sections__section": "Sections__Sections__section___2onYy"
};
import withLocales from "cozy-ui/transpiled/react/providers/I18n/withLocales";
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
    pro: "Work"
  },
  sections: {
    applications: "Applications",
    konnectors: "Services"
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
    pro: "Travail"
  },
  sections: {
    applications: "Applications",
    konnectors: "Services"
  }
};
var locales = {
  en: en,
  fr: fr
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
export var Untranslated = withBreakpoints()(Sections);
export default withLocales(locales)(translate()(Untranslated));