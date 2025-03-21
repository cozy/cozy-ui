import PropTypes from 'prop-types'
import React from 'react'

import AppTitle from '../AppTitle'
import Icon from '../Icon'
import ChatIcon from '../Icons/Chat'
import ChatTextIcon from '../Icons/ChatText'
import DriveIcon from '../Icons/Drive'
import DriveTextIcon from '../Icons/DriveText'
import MailIcon from '../Icons/Mail'
import MailTextIcon from '../Icons/MailText'
import NotesIcon from '../Icons/Notes'
import NotesTextIcon from '../Icons/NotesText'
import PassIcon from '../Icons/Pass'
import PassTextIcon from '../Icons/PassText'
import StoreIcon from '../Icons/Store'
import StoreTextIcon from '../Icons/StoreText'
import TwakeTextIcon from '../Icons/TwakeText'
import TwakeWorkplaceIcon from '../Icons/TwakeWorkplace'
import WorkplaceTextIcon from '../Icons/WorkplaceText'
import { useCozyTheme } from '../providers/CozyTheme'

const SLUG_TO_ICONS = {
  chat: {
    icon: ChatIcon,
    text: ChatTextIcon
  },
  drive: {
    icon: DriveIcon,
    text: DriveTextIcon
  },
  mail: {
    icon: MailIcon,
    text: MailTextIcon
  },
  notes: {
    icon: NotesIcon,
    text: NotesTextIcon
  },
  pass: {
    icon: PassIcon,
    text: PassTextIcon
  },
  store: {
    icon: StoreIcon,
    text: StoreTextIcon
  },
  home: {
    icon: TwakeWorkplaceIcon,
    text: WorkplaceTextIcon,
    marginTop: 8 // We need to move the "Workplace" text icon because its center is different because of the 'p' letter
  }
}

const AppFullTitle = ({ slug, ...otherProps }) => {
  const { isLight } = useCozyTheme()

  const titleData = SLUG_TO_ICONS[slug]

  if (!titleData) return <AppTitle {...otherProps} />

  return (
    <div className="u-flex u-flex-items-center">
      <Icon icon={titleData.icon} size="32" style={{ marginRight: 4 }} />
      <Icon
        icon={TwakeTextIcon}
        width="auto"
        height="22"
        style={{ marginRight: 8, fill: isLight ? 'black' : 'white' }}
      />
      <Icon
        icon={titleData.text}
        width="auto"
        height="22"
        style={{
          marginTop: titleData.marginTop
        }}
      />
    </div>
  )
}

AppFullTitle.propTypes = {
  slug: PropTypes.string
}

export default AppFullTitle
