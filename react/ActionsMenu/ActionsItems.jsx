import React, { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { useWebviewIntent } from 'cozy-intent'

import { useI18n } from '../providers/I18n'
import { getActionName, getOnlyNeededActions } from './Actions/helpers'

const ActionsItems = forwardRef(
  (
    {
      docs,
      actions,
      actionOptions,
      component,
      onClick: overridedClick,
      ...props
    },
    ref
  ) => {
    const client = useClient()
    const webviewIntent = useWebviewIntent()
    const { t } = useI18n()

    const cleanedActions = useMemo(() => getOnlyNeededActions(actions, docs), [
      actions,
      docs
    ])

    return cleanedActions.map((actionObject, idx) => {
      const actionName = getActionName(actionObject)
      const actionDefinition = Object.values(actionObject)[0]

      const { Component: ActionComponent, action, disabled } = actionDefinition

      const handleClick = clickProps => {
        action?.(docs, {
          client,
          t,
          webviewIntent,
          ...actionOptions,
          ...clickProps
        })
        overridedClick?.()
      }

      const Component = component ?? ActionComponent

      return (
        <Component
          {...props}
          ref={ref}
          key={actionName + idx}
          action={actionDefinition}
          docs={docs}
          autoFocus={idx === 0}
          disabled={disabled?.(docs)}
          onClick={handleClick}
        />
      )
    })
  }
)

ActionsItems.propTypes = {
  docs: PropTypes.array,
  /** The returned component that manages the display */
  component: PropTypes.object,
  actions: PropTypes.array,
  /** Props spread to action method of Actions component */
  actionOptions: PropTypes.object,
  /** The overrideClick function from ActionsMenuWrapper */
  onClick: PropTypes.func
}

export const actionsItemsComponentPropTypes = {
  docs: PropTypes.array,
  action: PropTypes.object,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default ActionsItems
