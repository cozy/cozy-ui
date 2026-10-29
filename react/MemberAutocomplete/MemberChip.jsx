import PropTypes from 'prop-types'
import React from 'react'
import { useI18n, useExtendI18n } from 'twake-i18n'

import Chip from '../Chips'
import MemberOrGroupAvatar from '../MemberRow/MemberOrGroupAvatar'
import { locales } from '../MemberRow/locales'
import { memberPropType } from '../MemberRow/propTypes'

const MemberChip = ({ member, tagProps }) => {
  useExtendI18n(locales)
  const { t } = useI18n()

  return (
    <Chip
      {...tagProps}
      label={member.name || t('MemberRow.defaultName')}
      avatar={<MemberOrGroupAvatar member={member} size="xs" />}
    />
  )
}

MemberChip.propTypes = {
  member: memberPropType.isRequired,
  /** Props given by the Autocomplete for each tag */
  tagProps: PropTypes.object.isRequired
}

export default MemberChip
