import { useMemo } from 'react'

import { makeActions } from '../../../ActionMenu/Actions/helpers'
import { hr } from '../../../ActionMenu/Actions/hr'
import { emailTo } from '../../../ActionMenu/Actions/emailTo'
import { smsTo } from '../../../ActionMenu/Actions/smsTo'
import { call } from '../../../ActionMenu/Actions/call'
import { modify } from '../../../ActionMenu/Actions/modify'
import { viewInContacts } from '../../../ActionMenu/Actions/viewInContacts'

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
