import _defineProperty from "@babel/runtime/helpers/defineProperty";

/**
 * Make array of actions for ActionsItems component
 *
 * @param {Function[]} actions - Array of actions to create ActionsMenuItem components with associated actions and conditions
 * @param {object} actionOptions - Options that need to be passed on actions
 * @returns {object[]} Array of actions
 */
export var makeActions = function makeActions() {
  var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return actions.map(function (action) {
    var actionMenu = action(options);
    var name = actionMenu.name || action.name;
    return _defineProperty({}, name, actionMenu);
  });
};
export var getActionName = function getActionName(actionObject) {
  return Object.keys(actionObject)[0];
}; // We need to clean Actions since action has a displayable
// conditions and we can't know from the begining what the
// behavior will be. For instance, we can't know that
// hr will be the latest action in the sharing views for a
// folder.
// Or we can't know that we'll have two following hr if the
// display condition for the actions between are true or false

export var getOnlyNeededActions = function getOnlyNeededActions(actions, file) {
  var previousAction = '';
  var displayableActions = actions.filter(function (actionObject) {
    var actionDefinition = Object.values(actionObject)[0];
    return !actionDefinition.displayCondition || actionDefinition.displayCondition([file]);
  });
  return displayableActions // We do not want to display the same 2 actions in a row
  .map(function (actionObject) {
    var actionName = getActionName(actionObject);

    if (previousAction === actionName) {
      previousAction = actionName;
      return null;
    } else {
      previousAction = actionName;
    }

    return actionObject;
  }).filter(Boolean) // We don't want to have an hr as the latest actions available
  .filter(function (cleanedAction, idx, cleanedActions) {
    return !(getActionName(cleanedAction) === 'hr' && idx === cleanedActions.length - 1);
  });
};