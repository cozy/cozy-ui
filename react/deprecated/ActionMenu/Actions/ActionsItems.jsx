import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { useI18n } from '../../../providers/I18n'
import { getActionName, getOnlyNeededActions } from './helpers'

const ActionsItems = ({ doc, actions, isLast, setIsRenaming, onClose }) => {
  const { t } = useI18n()
  const cleanedActions = useMemo(() => getOnlyNeededActions(actions, doc), [
    actions,
    doc
  ])

  return cleanedActions.map((actionObject, idx) => {
    const actionName = getActionName(actionObject)
    const actionDefinition = Object.values(actionObject)[0]

    const { Component, action, isEnabled } = actionDefinition

    const onClick = () => {
      action && action([doc], t, isLast)
      actionName === 'rename' && setIsRenaming(true)
      onClose && onClose()
    }

    return (
      <Component
        key={actionName + idx}
        className="u-flex-items-center"
        isEnabled={isEnabled}
        docs={doc ? [doc] : []}
        onClick={onClick}
      />
    )
  })
}

ActionsItems.propTypes = {
  doc: PropTypes.object,
  actions: PropTypes.array,
  isLast: PropTypes.bool,
  setIsRenaming: PropTypes.func,
  onClose: PropTypes.func
}

export default ActionsItems
