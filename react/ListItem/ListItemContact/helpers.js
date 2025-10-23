import { divider, emailTo, smsTo, call } from '../../ActionsMenu/Actions'

export const makeOptionalActions = contact => {
  const hasPhoneAction = contact.phone?.length > 0
  const hasEmailAction = contact.email?.length > 0
  const hasMessageActions = hasPhoneAction || hasEmailAction

  const actionsAndOptions = [
    { action: divider, condition: hasMessageActions },
    { action: call, condition: hasPhoneAction },
    { action: smsTo, condition: hasPhoneAction },
    { action: emailTo, condition: hasEmailAction }
  ]

  const filteredOptionalActions = actionsAndOptions.reduce((acc, curr) => {
    if (curr.condition) {
      acc.push(curr.action)
    }
    return acc
  }, [])

  return filteredOptionalActions
}
