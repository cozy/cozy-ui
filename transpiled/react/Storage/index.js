import PropTypes from 'prop-types';
import React from 'react';
import { useInstanceInfo } from 'cozy-client';
import { shouldDisplayOffers } from 'cozy-client/dist/models/instance';
import { isFlagshipApp } from 'cozy-device-helper';
import StorageButton from "cozy-ui/transpiled/react/Storage/StorageButton";
import StorageProgress from "cozy-ui/transpiled/react/Storage/StorageProgress";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";

var Storage = function Storage(_ref) {
  var onlyDesktop = _ref.onlyDesktop;

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop,
      isMobile = _useBreakpoints.isMobile;

  var instanceInfo = useInstanceInfo();
  if (onlyDesktop && !isDesktop) return null;
  var showStorageButton = instanceInfo.isLoaded && !isFlagshipApp() && !isMobile && shouldDisplayOffers(instanceInfo);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StorageProgress, null), showStorageButton && /*#__PURE__*/React.createElement(StorageButton, {
    className: "u-mt-1"
  }));
};

Storage.propTypes = {
  /** Component enabled only for desktop. Using `false` will enable it for mobile and tablet also. */
  onlyDesktop: PropTypes.bool
};
Storage.defaultProps = {
  onlyDesktop: true
};
export default Storage;