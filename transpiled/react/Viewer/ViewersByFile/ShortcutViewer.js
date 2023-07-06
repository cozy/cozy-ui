import React from 'react';
import { useClient, useFetchShortcut } from 'cozy-client';
import get from 'lodash/get';
import { withViewerLocales } from "cozy-ui/transpiled/react/Viewer/hoc/withViewerLocales";
import { ButtonLink } from "cozy-ui/transpiled/react/deprecated/Button";
import { FileDoctype } from "cozy-ui/transpiled/react/proptypes";
import OpenwithIcon from "cozy-ui/transpiled/react/Icons/Openwith";
import NoViewer from "cozy-ui/transpiled/react/Viewer/NoViewer";

var ShortcutViewer = function ShortcutViewer(_ref) {
  var t = _ref.t,
      file = _ref.file;
  var client = useClient();

  var _useFetchShortcut = useFetchShortcut(client, file.id),
      shortcutInfos = _useFetchShortcut.shortcutInfos;

  var url = '';

  if (shortcutInfos) {
    url = new URL(get(shortcutInfos, 'data.attributes.url'));
  }

  return /*#__PURE__*/React.createElement(NoViewer, {
    file: file,
    renderFallbackExtraContent: function renderFallbackExtraContent() {
      return /*#__PURE__*/React.createElement(ButtonLink, {
        label: "".concat(t('Viewer.goto', {
          url: get(url, 'origin', '')
        })),
        icon: OpenwithIcon,
        href: "".concat(get(url, 'origin', '')),
        target: "_blank"
      });
    }
  });
};

ShortcutViewer.propTypes = {
  file: FileDoctype.isRequired
};
export default withViewerLocales(ShortcutViewer);