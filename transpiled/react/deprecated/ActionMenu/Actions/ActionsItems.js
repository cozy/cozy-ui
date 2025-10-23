import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { getActionName, getOnlyNeededActions } from "cozy-ui/transpiled/react/deprecated/ActionMenu/Actions/helpers";
import { useI18n } from "cozy-ui/transpiled/react/providers/I18n";

var ActionsItems = function ActionsItems(_ref) {
  var doc = _ref.doc,
      actions = _ref.actions,
      isLast = _ref.isLast,
      setIsRenaming = _ref.setIsRenaming,
      onClose = _ref.onClose;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  var cleanedActions = useMemo(function () {
    return getOnlyNeededActions(actions, doc);
  }, [actions, doc]);
  return cleanedActions.map(function (actionObject, idx) {
    var actionName = getActionName(actionObject);
    var actionDefinition = Object.values(actionObject)[0];
    var Component = actionDefinition.Component,
        action = actionDefinition.action,
        isEnabled = actionDefinition.isEnabled;

    var onClick = function onClick() {
      action && action([doc], t, isLast);
      actionName === 'rename' && setIsRenaming(true);
      onClose && onClose();
    };

    return /*#__PURE__*/React.createElement(Component, {
      key: actionName + idx,
      className: "u-flex-items-center",
      isEnabled: isEnabled,
      docs: doc ? [doc] : [],
      onClick: onClick
    });
  });
};

ActionsItems.propTypes = {
  doc: PropTypes.object,
  actions: PropTypes.array,
  isLast: PropTypes.bool,
  setIsRenaming: PropTypes.func,
  onClose: PropTypes.func
};
export default ActionsItems;