import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["data"];
import React from 'react';
import { useQuery, isQueryLoading, hasQueryBeenLoaded } from 'cozy-client';
import DumbCozyTheme from "cozy-ui/transpiled/react/providers/CozyTheme/DumbCozyTheme";
import { buildSettingsInstanceQuery } from "cozy-ui/transpiled/react/providers/CozyTheme/queries";

var CozyThemeWithQuery = function CozyThemeWithQuery(props) {
  var instanceQuery = buildSettingsInstanceQuery();

  var _useQuery = useQuery(instanceQuery.definition, instanceQuery.options),
      instance = _useQuery.data,
      instanceQueryLeft = _objectWithoutProperties(_useQuery, _excluded);

  if (isQueryLoading(instanceQueryLeft) && !hasQueryBeenLoaded(instanceQueryLeft)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(DumbCozyTheme, _extends({}, props, {
    settingsThemeType: instance === null || instance === void 0 ? void 0 : instance.colorScheme
  }));
};

export default CozyThemeWithQuery;