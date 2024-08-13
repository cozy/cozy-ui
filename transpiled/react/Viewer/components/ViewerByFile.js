import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isMobile as isMobileDevice } from 'cozy-device-helper';
import { isPlainText } from 'cozy-client/dist/models/file';
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import withBreakpoints from "cozy-ui/transpiled/react/helpers/withBreakpoints";
import ImageViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/ImageViewer";
import AudioViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/AudioViewer";
import VideoViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/VideoViewer";
import PdfJsViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/PdfJsViewer";
import BlankPaperViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/BlankPaperViewer";
import TextViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/TextViewer";
import PdfMobileViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/PdfMobileViewer";
import NoViewer from "cozy-ui/transpiled/react/Viewer/NoViewer";
import ShortcutViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/ShortcutViewer";
import OnlyOfficeViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/OnlyOfficeViewer";
import { useEncrypted } from "cozy-ui/transpiled/react/Viewer/providers/EncryptedProvider";

var isBlankPaper = function isBlankPaper(doc) {
  var _doc$metadata, _doc$metadata$paperPr;

  return (_doc$metadata = doc.metadata) === null || _doc$metadata === void 0 ? void 0 : (_doc$metadata$paperPr = _doc$metadata.paperProps) === null || _doc$metadata$paperPr === void 0 ? void 0 : _doc$metadata$paperPr.isBlank;
};

export var getViewerComponentName = function getViewerComponentName(_ref) {
  var file = _ref.file,
      isDesktop = _ref.isDesktop,
      isOnlyOfficeEnabled = _ref.isOnlyOfficeEnabled;

  switch (file.class) {
    case 'shortcut':
      return ShortcutViewer;

    case 'image':
      return ImageViewer;

    case 'audio':
      return AudioViewer;

    case 'video':
      return isMobileDevice() ? NoViewer : VideoViewer;

    case 'pdf':
      return isBlankPaper(file) ? BlankPaperViewer : isDesktop ? PdfJsViewer : PdfMobileViewer;

    case 'text':
      return isPlainText(file.mime, file.name) ? TextViewer : isOnlyOfficeEnabled ? OnlyOfficeViewer : NoViewer;

    case 'slide':
      return isOnlyOfficeEnabled ? OnlyOfficeViewer : NoViewer;

    case 'spreadsheet':
      return isOnlyOfficeEnabled ? OnlyOfficeViewer : NoViewer;

    default:
      return NoViewer;
  }
};
var ViewerByFile = withBreakpoints()(function (_ref2) {
  var _componentsProps$Only, _componentsProps$Only2;

  var file = _ref2.file,
      onClose = _ref2.onClose,
      renderFallbackExtraContent = _ref2.renderFallbackExtraContent,
      gestures = _ref2.gestures,
      gesturesRef = _ref2.gesturesRef,
      onSwipe = _ref2.onSwipe,
      isDesktop = _ref2.breakpoints.isDesktop,
      componentsProps = _ref2.componentsProps;
  var isOnlyOfficeEnabled = componentsProps === null || componentsProps === void 0 ? void 0 : (_componentsProps$Only = componentsProps.OnlyOfficeViewer) === null || _componentsProps$Only === void 0 ? void 0 : _componentsProps$Only.isEnabled;
  var onlyOfficeOpener = componentsProps === null || componentsProps === void 0 ? void 0 : (_componentsProps$Only2 = componentsProps.OnlyOfficeViewer) === null || _componentsProps$Only2 === void 0 ? void 0 : _componentsProps$Only2.opener;

  var _useEncrypted = useEncrypted(),
      url = _useEncrypted.url;

  var ComponentName = useMemo(function () {
    return getViewerComponentName({
      file: file,
      isDesktop: isDesktop,
      isOnlyOfficeEnabled: isOnlyOfficeEnabled
    });
  }, [file, isDesktop, isOnlyOfficeEnabled]);
  return /*#__PURE__*/React.createElement(ComponentName, {
    file: file,
    url: url,
    onClose: onClose,
    renderFallbackExtraContent: renderFallbackExtraContent,
    gestures: gestures,
    gesturesRef: gesturesRef,
    onSwipe: onSwipe,
    onlyOfficeOpener: onlyOfficeOpener
  });
});
ViewerByFile.propTypes = {
  file: FileDoctype.isRequired,
  onClose: PropTypes.func.isRequired,
  renderFallbackExtraContent: PropTypes.func,
  // gestures, gesturesRef and onSwipe are got from ViewerControls
  gestures: PropTypes.object,
  gesturesRef: PropTypes.object,
  onSwipe: PropTypes.func,
  componentsProps: PropTypes.object
};
ViewerByFile.displayName = 'ViewerByFile';
export default ViewerByFile;