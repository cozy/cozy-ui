import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useClient } from 'cozy-client';
import { ShareModal, ShareButton } from 'cozy-sharing';
import { SharingProvider } from 'cozy-sharing/dist/SharingProvider';

var Sharing = function Sharing(_ref) {
  var file = _ref.file;
  var client = useClient();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showShareModal = _useState2[0],
      setShowShareModal = _useState2[1];

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
  }), /*#__PURE__*/React.createElement(ShareButton, {
    extension: "full",
    useShortLabel: true,
    docId: file.id,
    onClick: function onClick() {
      return setShowShareModal(true);
    }
  })));
};

Sharing.propTypes = {
  file: PropTypes.object
};
export default Sharing;