import PropTypes from 'prop-types';
import React from 'react';
import { useClient } from 'cozy-client';
import { isNote } from 'cozy-client/dist/models/file';
import FileImageLoader from "cozy-ui/transpiled/react/FileImageLoader";
import Icon from "cozy-ui/transpiled/react/Icon";
import FiletypeNoteIcon from "cozy-ui/transpiled/react/Icons/FileTypeNote";
import FiletypeTextIcon from "cozy-ui/transpiled/react/Icons/FileTypeText";
import Skeleton from "cozy-ui/transpiled/react/Skeleton";
import Thumbnail from "cozy-ui/transpiled/react/Thumbnail";

var ItemIcon = function ItemIcon(_ref) {
  var icon = _ref.icon,
      file = _ref.file;
  var client = useClient();
  if (icon) return icon;
  return /*#__PURE__*/React.createElement(FileImageLoader, {
    client: client,
    file: file,
    linkType: "tiny",
    render: function render(src) {
      return /*#__PURE__*/React.createElement(Thumbnail, null, src ? /*#__PURE__*/React.createElement("img", {
        src: src,
        alt: ""
      }) : /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        animation: "wave"
      }));
    },
    renderFallback: function renderFallback() {
      return /*#__PURE__*/React.createElement(Thumbnail, null, /*#__PURE__*/React.createElement(Icon, {
        icon: isNote(file) ? FiletypeNoteIcon : FiletypeTextIcon
      }));
    }
  });
};

ItemIcon.propTypes = {
  icon: PropTypes.node,
  file: PropTypes.object
};
export default ItemIcon;