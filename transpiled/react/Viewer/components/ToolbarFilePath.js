import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useMemo } from 'react';
import { useClient, useQuery, models } from 'cozy-client';
import AppLinker from "cozy-ui/transpiled/react/AppLinker";
import FilePath from "cozy-ui/transpiled/react/FilePath";
import Link from "cozy-ui/transpiled/react/Link";
import useBreakpoints from "cozy-ui/transpiled/react/providers/Breakpoints";
import { makeWebLink, normalizeAndSpreadAttributes, removeFilenameFromPath } from "cozy-ui/transpiled/react/Viewer/helpers";
import { buildFileByIdQuery } from "cozy-ui/transpiled/react/Viewer/queries";
var ensureFilePath = models.file.ensureFilePath;

var ToolbarFilePath = function ToolbarFilePath(_ref) {
  var file = _ref.file;
  var client = useClient();

  var _useBreakpoints = useBreakpoints(),
      isDesktop = _useBreakpoints.isDesktop;

  var normalizeFile = normalizeAndSpreadAttributes(file);
  var parentQuery = buildFileByIdQuery(normalizeFile.dir_id);
  var parentResult = useQuery(parentQuery.definition, _objectSpread(_objectSpread({}, parentQuery.options), {}, {
    enabled: !!normalizeFile.dir_id
  }));
  var fileWithPath = useMemo(function () {
    return parentResult.data ? ensureFilePath(normalizeFile, parentResult.data) : undefined;
  }, [normalizeFile, parentResult.data]);

  if (fileWithPath) {
    var appSlug = 'drive';
    var nativePath = "/folder/".concat(fileWithPath.dir_id);
    var path = removeFilenameFromPath(fileWithPath.path);
    var link = makeWebLink({
      client: client,
      path: nativePath,
      slug: appSlug
    });

    if (isDesktop && link) {
      return /*#__PURE__*/React.createElement(AppLinker, {
        app: {
          slug: appSlug
        },
        nativePath: nativePath,
        href: link
      }, function (_ref2) {
        var href = _ref2.href,
            onClick = _ref2.onClick;
        return /*#__PURE__*/React.createElement(Link, {
          href: href,
          onClick: onClick,
          color: "inherit"
        }, /*#__PURE__*/React.createElement(FilePath, {
          className: "u-white"
        }, path));
      });
    }

    return /*#__PURE__*/React.createElement(FilePath, {
      className: isDesktop ? 'u-white' : null
    }, path);
  }

  return null;
};

export { ToolbarFilePath };