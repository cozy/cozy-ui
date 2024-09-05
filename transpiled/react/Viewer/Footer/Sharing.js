import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useClient } from 'cozy-client';
import { ShareModal, ShareButton } from 'cozy-sharing';
import { SharingProvider } from 'cozy-sharing/dist/SharingProvider';
import Icon from "cozy-ui/transpiled/react/Icon";
import IconButton from "cozy-ui/transpiled/react/IconButton";
import ShareIcon from "cozy-ui/transpiled/react/Icons/Share";

var Sharing = function Sharing(_ref) {
  var file = _ref.file,
      variant = _ref.variant;
  var client = useClient();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showShareModal = _useState2[0],
      setShowShareModal = _useState2[1];

  var SharingButton = variant === 'iconButton' ? /*#__PURE__*/React.createElement(IconButton, {
    className: "u-white",
    onClick: function onClick() {
      return setShowShareModal(true);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: ShareIcon
  })) : /*#__PURE__*/React.createElement(ShareButton, {
    fullWidth: true,
    useShortLabel: true,
    docId: file.id,
    onClick: function onClick() {
      return setShowShareModal(true);
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SharingProvider, {
    client: client,
    doctype: "io.cozy.files",
    documentType: "Files"
  }, showShareModal && /*#__PURE__*/React.createElement(ShareModal, {
    document: file,
    documentType: "Files",
    sharingDesc: file.name,
    onClose: function onClose() {
      return setShowShareModal(false);
    }
  }), SharingButton));
};

Sharing.propTypes = {
  file: PropTypes.object,
  variant: PropTypes.oneOf(['default', 'iconButton'])
};
Sharing.defaultProptypes = {
  variant: 'default'
};
export default Sharing;