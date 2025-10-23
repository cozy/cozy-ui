/**
 * Make array of actions for ActionsItems component
 *
 * @param {Function[]} actionCreators - Array of function to create ActionMenuItem components with associated actions and conditions
 * @param {object} actionOptions - Options that need to be passed on Actions
 * @returns {object[]} Array of actions
 */
export const makeActions = (actionCreators = [], actionOptions = {}) => {
  return actionCreators.map(createAction => {
    const actionMenu = createAction(actionOptions)
    const name = actionMenu.name || createAction.name

    return { [name]: actionMenu }
  })
}

export const getActionName = actionObject => {
  return Object.keys(actionObject)[0]
}

// We need to clean Actions since action has a displayable
// conditions and we can't know from the begining what the
// behavior will be. For instance, we can't know that
// hr will be the latest action in the sharing views for a
// folder.
// Or we can't know that we'll have two following hr if the
// display condition for the actions between are true or false
export const getOnlyNeededActions = (actions, file) => {
  let previousAction = ''
  const displayableActions = actions.filter(actionObject => {
    const actionDefinition = Object.values(actionObject)[0]

    return (
      !actionDefinition.displayCondition ||
      actionDefinition.displayCondition([file])
    )
  })

  return (
    displayableActions
      // We do not want to display the same 2 actions in a row
      .map(actionObject => {
        const actionName = getActionName(actionObject)

        if (previousAction === actionName) {
          previousAction = actionName
          return null
        } else {
          previousAction = actionName
        }

        return actionObject
      })
      .filter(Boolean)
      // We don't want to have an hr as the latest actions available
      .filter((cleanedAction, idx, cleanedActions) => {
        return !(
          getActionName(cleanedAction) === 'hr' &&
          idx === cleanedActions.length - 1
        )
      })
  )
}
