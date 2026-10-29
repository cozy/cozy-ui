import React from 'react'
import { useI18n, useExtendI18n } from 'twake-i18n'

import ListItem from '../ListItem'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import MemberOrGroupAvatar from '../MemberRow/MemberOrGroupAvatar'
import { locales } from '../MemberRow/locales'
import { memberPropType } from '../MemberRow/propTypes'

const MemberSuggestion = ({ suggestion }) => {
  useExtendI18n(locales)
  const { t } = useI18n()

  return (
    <ListItem component="div">
      <ListItemIcon>
        <MemberOrGroupAvatar member={suggestion} size="m" />
      </ListItemIcon>
      <ListItemText
        primary={suggestion.name || t('MemberRow.defaultName')}
        secondary={suggestion.subtitle}
      />
    </ListItem>
  )
}

MemberSuggestion.propTypes = {
  suggestion: memberPropType.isRequired
}

export default MemberSuggestion
