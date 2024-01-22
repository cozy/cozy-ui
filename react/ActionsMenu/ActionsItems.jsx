import React, { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { useWebviewIntent } from 'cozy-intent'

import { useI18n } from '../providers/I18n'
import { getActionName, getOnlyNeededActions } from './Actions/helpers'

const ActionsItems = forwardRef(
  (
    {
      doc,
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
    const cleanedActions = useMemo(() => getOnlyNeededActions(actions, doc), [
      actions,
      doc
    ])

    return cleanedActions.map((actionObject, idx) => {
      const actionName = getActionName(actionObject)
      const actionDefinition = Object.values(actionObject)[0]

      const { Component: ActionComponent, action, disabled } = actionDefinition

      const handleClick = clickProps => {
        action &&
          action(doc, {
            client,
            t,
            webviewIntent,
            ...actionOptions,
            ...clickProps
          })
        overridedClick && overridedClick()
      }

      const Component = component ?? ActionComponent

      return (
        <Component
          {...props}
          ref={ref}
          key={actionName + idx}
          action={actionDefinition}
          doc={doc}
          autoFocus={idx === 0}
          disabled={disabled}
          onClick={handleClick}
        />
      )
    })
  }
)

ActionsItems.propTypes = {
  doc: PropTypes.object,
  /** The returned component that manages the display */
  component: PropTypes.object,
  actions: PropTypes.array,
  /** Props spread to action method of Actions component */
  actionOptions: PropTypes.object,
  /** The overrideClick function from ActionsMenuWrapper */
  onClick: PropTypes.func
}

export default ActionsItems
