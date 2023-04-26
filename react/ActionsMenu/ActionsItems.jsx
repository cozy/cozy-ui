import React, { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'

import { useClient } from 'cozy-client'
import { useI18n } from '../I18n'
import { getActionName, getOnlyNeededActions } from './Actions/helpers'

const ActionsItems = forwardRef(
  ({ doc, actions, isLast, setIsRenaming, onClick, ...props }, ref) => {
    const client = useClient()
    const { t } = useI18n()
    const cleanedActions = useMemo(() => getOnlyNeededActions(actions, doc), [
      actions,
      doc
    ])

    return cleanedActions.map((actionObject, idx) => {
      const actionName = getActionName(actionObject)
      const actionDefinition = Object.values(actionObject)[0]

      const { Component: ActionComponent, action, disabled } = actionDefinition

      const handleClick = () => {
        action && action(doc, { client, t, isLast })
        actionName === 'rename' && setIsRenaming(true)
        onClick && onClick()
      }

      return (
        <ActionComponent
          {...props}
          ref={ref}
          key={actionName + idx}
          doc={doc}
          disabled={disabled}
          onClick={handleClick}
        />
      )
    })
  }
)

ActionsItems.propTypes = {
  doc: PropTypes.object,
  actions: PropTypes.array,
  isLast: PropTypes.bool,
  setIsRenaming: PropTypes.func,
  onClick: PropTypes.func
}

export default ActionsItems
