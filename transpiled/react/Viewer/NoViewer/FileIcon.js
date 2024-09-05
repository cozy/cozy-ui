import React from 'react';
import Icon from "cozy-ui/transpiled/react/Icon";
import FileTypeBinIcon from "cozy-ui/transpiled/react/Icons/FileTypeBin";
import FileTypeCodeIcon from "cozy-ui/transpiled/react/Icons/FileTypeCode";
import FileTypeFilesIcon from "cozy-ui/transpiled/react/Icons/FileTypeFiles";
import FileTypePdfIcon from "cozy-ui/transpiled/react/Icons/FileTypePdf";
import FileTypeSheetIcon from "cozy-ui/transpiled/react/Icons/FileTypeSheet";
import FileTypeSlideIcon from "cozy-ui/transpiled/react/Icons/FileTypeSlide";
import FileTypeTextIcon from "cozy-ui/transpiled/react/Icons/FileTypeText";
import FileTypeZipIcon from "cozy-ui/transpiled/react/Icons/FileTypeZip";

var FileIcon = function FileIcon(_ref) {
  var type = _ref.type;
  var icon;

  switch (type) {
    case 'bin':
      icon = FileTypeBinIcon;
      break;

    case 'code':
      icon = FileTypeCodeIcon;
      break;

    case 'spreadsheet':
      icon = FileTypeSheetIcon;
      break;

    case 'slide':
      icon = FileTypeSlideIcon;
      break;

    case 'text':
      icon = FileTypeTextIcon;
      break;

    case 'zip':
      icon = FileTypeZipIcon;
      break;

    case 'pdf':
      icon = FileTypePdfIcon;
      break;

    default:
      icon = FileTypeFilesIcon;
      break;
  }

  return /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    width: 160,
    height: 140
  });
};

export default FileIcon;