import { useMemo } from 'react'

import { makeActions, modify, viewInContacts } from '../../ActionsMenu/Actions'

import { makeOptionalActions } from './helpers'

const useActions = contact => {
  const optionalActions = useMemo(() => makeOptionalActions(contact), [contact])
  const finalActions = useMemo(
    () => [modify, viewInContacts].concat(optionalActions),
    [optionalActions]
  )
  const actions = useMemo(() => makeActions(finalActions), [finalActions])

  return actions
}

export default useActions
