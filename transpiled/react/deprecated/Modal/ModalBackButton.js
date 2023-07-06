import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className"];
import React from 'react';
import cx from 'classnames';
import Button from "cozy-ui/transpiled/react/deprecated/Button";
var styles = {
  "c-modal": "styles__c-modal___dljYk",
  "c-modal-content": "styles__c-modal-content___22N4k",
  "c-modal-header": "styles__c-modal-header___38uqi",
  "c-modal-header--branded": "styles__c-modal-header--branded___17z1P",
  "c-modal-footer": "styles__c-modal-footer___3JCxm",
  "c-modal-container": "styles__c-modal-container___1AAl5",
  "c-modal-wrapper": "styles__c-modal-wrapper___y79-C",
  "c-modal--xsmall": "styles__c-modal--xsmall___VxVzh",
  "c-modal--small": "styles__c-modal--small___3xSfG",
  "c-modal--medium": "styles__c-modal--medium___2Pu0O",
  "c-modal--large": "styles__c-modal--large___2k5qx",
  "c-modal--xlarge": "styles__c-modal--xlarge___ZLRMN",
  "c-modal--xxlarge": "styles__c-modal--xxlarge___18Had",
  "c-modal-wrapper--fullscreen": "styles__c-modal-wrapper--fullscreen___3oSPW",
  "c-modal--fullscreen": "styles__c-modal--fullscreen___4RcnS",
  "c-modal-illu-header": "styles__c-modal-illu-header___2UbH8",
  "c-modal-illu-header--ghost": "styles__c-modal-illu-header--ghost___1gH1t",
  "is-active": "styles__is-active___JlHre",
  "c-modal--small-spacing": "styles__c-modal--small-spacing___1Qal6",
  "c-modal--large-spacing": "styles__c-modal--large-spacing___2ktm1",
  "c-modal-app": "styles__c-modal-app___2FX9h",
  "c-app-editor": "styles__c-app-editor___3FI4Z",
  "c-modal-app-icon": "styles__c-modal-app-icon___3iNz6",
  "c-modal-content-fixed": "styles__c-modal-content-fixed___1F97i",
  "c-modal-footer--button": "styles__c-modal-footer--button___3AdGX",
  "c-modal-section": "styles__c-modal-section___2LJKl",
  "c-modal-close": "styles__c-modal-close___1M8Jn",
  "c-modal--closable": "styles__c-modal--closable___3Wo68",
  "c-modal-close--notitle": "styles__c-modal-close--notitle___3dCIQ",
  "c-modal--overflowHidden": "styles__c-modal--overflowHidden___1QDY9",
  "c-modal-back-button": "styles__c-modal-back-button___AjaZO",
  "spin": "styles__spin___1fJIg",
  "shake": "styles__shake___gVu0K"
};
import PreviousIcon from "cozy-ui/transpiled/react/Icons/Previous";
import useBreakpoints from "cozy-ui/transpiled/react/hooks/useBreakpoints";

var DumbModalBackButton = function DumbModalBackButton(props) {
  var _useBreakpoints = useBreakpoints(),
      isMobile = _useBreakpoints.isMobile;

  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(Button, _extends({
    icon: PreviousIcon,
    iconOnly: true,
    extension: "narrow",
    theme: "text",
    label: "back",
    className: cx(styles['c-modal-back-button'], 'u-m-0 u-pos-absolute', {
      'u-p-1': isMobile,
      'u-p-half': !isMobile,
      'u-h-3': isMobile
    }, className)
  }, rest));
};

var ModalBackButton = DumbModalBackButton;
export default ModalBackButton;