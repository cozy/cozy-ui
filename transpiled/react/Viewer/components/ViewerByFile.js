import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { isMobile as isMobileDevice } from 'cozy-device-helper';
import { models } from 'cozy-client';
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import withBreakpoints from "cozy-ui/transpiled/react/helpers/withBreakpoints";
import ImageViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/ImageViewer";
import AudioViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/AudioViewer";
import VideoViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/VideoViewer";
import PdfJsViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/PdfJsViewer";
import TextViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/TextViewer";
import PdfMobileViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/PdfMobileViewer";
import NoViewer from "cozy-ui/transpiled/react/Viewer/NoViewer";
import ShortcutViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/ShortcutViewer";
import OnlyOfficeViewer from "cozy-ui/transpiled/react/Viewer/ViewersByFile/OnlyOfficeViewer";
import { useEncrypted } from "cozy-ui/transpiled/react/Viewer/providers/EncryptedProvider";
import createDepreciationLogger from "cozy-ui/transpiled/react/helpers/createDepreciationLogger";
var logDepecratedOnlyOfficeProps = createDepreciationLogger();
var isPlainText = models.file.isPlainText;
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
      return isDesktop ? PdfJsViewer : PdfMobileViewer;

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

var ViewerByFile = function ViewerByFile(_ref2) {
  var _componentsProps$Only, _componentsProps$Only2;

  var file = _ref2.file,
      onClose = _ref2.onClose,
      renderFallbackExtraContent = _ref2.renderFallbackExtraContent,
      gestures = _ref2.gestures,
      gesturesRef = _ref2.gesturesRef,
      onSwipe = _ref2.onSwipe,
      onlyOfficeProps = _ref2.onlyOfficeProps,
      isDesktop = _ref2.breakpoints.isDesktop,
      componentsProps = _ref2.componentsProps;

  if (onlyOfficeProps) {
    logDepecratedOnlyOfficeProps('onlyOfficeProps in Viewer is deprecated. Please use componentsProps.OnlyOfficeViewer instead.');
  }

  var isOnlyOfficeEnabled = (componentsProps === null || componentsProps === void 0 ? void 0 : (_componentsProps$Only = componentsProps.OnlyOfficeViewer) === null || _componentsProps$Only === void 0 ? void 0 : _componentsProps$Only.isEnabled) || (onlyOfficeProps === null || onlyOfficeProps === void 0 ? void 0 : onlyOfficeProps.isEnabled);
  var onlyOfficeOpener = (componentsProps === null || componentsProps === void 0 ? void 0 : (_componentsProps$Only2 = componentsProps.OnlyOfficeViewer) === null || _componentsProps$Only2 === void 0 ? void 0 : _componentsProps$Only2.opener) || (onlyOfficeProps === null || onlyOfficeProps === void 0 ? void 0 : onlyOfficeProps.opener);

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
};

ViewerByFile.propTypes = {
  file: FileDoctype.isRequired,
  onClose: PropTypes.func.isRequired,
  renderFallbackExtraContent: PropTypes.func,
  onlyOfficeProps: PropTypes.object,
  // gestures, gesturesRef and onSwipe are got from ViewerControls
  gestures: PropTypes.object,
  gesturesRef: PropTypes.object,
  onSwipe: PropTypes.func,
  componentsProps: PropTypes.object
};
export default withBreakpoints()(ViewerByFile);