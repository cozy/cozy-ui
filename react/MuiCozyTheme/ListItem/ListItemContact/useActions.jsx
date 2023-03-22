import { useMemo } from 'react'

import { makeActions } from '../ListItemBase/ActionsMenu/helpers'
import { hr } from '../ListItemBase/ActionsMenu/Actions/hr'
import { emailTo } from '../ListItemBase/ActionsMenu/Actions/emailTo'
import { smsTo } from '../ListItemBase/ActionsMenu/Actions/smsTo'
import { call } from '../ListItemBase/ActionsMenu/Actions/call'
import { modify } from '../ListItemBase/ActionsMenu/Actions/modify'
import { viewInContacts } from '../ListItemBase/ActionsMenu/Actions/viewInContacts'

const makeOptionalActions = contact => {
  const optionalActions = [hr, call, smsTo, emailTo]

  const hasPhoneAction = contact.phone?.length > 0
  const hasEmailAction = contact.email?.length > 0
  const hasMessageActions = hasPhoneAction || hasEmailAction

  const conditions = {
    hr: hasMessageActions,
    call: hasPhoneAction,
    smsTo: hasPhoneAction,
    emailTo: hasEmailAction
  }

  return optionalActions.filter(action => conditions[action.name])
}

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
