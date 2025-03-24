import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
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
import Typography from '../Typography'
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
    text: WorkplaceTextIcon
  }
}

const AppTitle = ({ slug, tag, className, children, ...otherProps }) => {
  const { isLight } = useCozyTheme()

  const titleData = SLUG_TO_ICONS[slug]

  if (!titleData)
    return (
      <Typography
        component={tag}
        variant="h4"
        className={cx(styles['c-apptitle'], className)}
        {...otherProps}
      >
        {children}
      </Typography>
    )

  return (
    <div className="u-flex u-flex-items-center">
      <Icon
        icon={titleData.icon}
        size="32"
        className={styles['c-apptitle-app-icon']}
      />
      <Icon
        icon={TwakeTextIcon}
        width="auto"
        height="22"
        className={cx(
          'u-mr-half',
          'u-w-auto',
          isLight ? styles['c-app-title-light'] : styles['c-app-title-dark']
        )}
      />
      <Icon
        icon={titleData.text}
        width="auto"
        height="22"
        className={cx('u-w-auto', slug === 'home' ? 'u-mt-half' : undefined)}
      />
    </div>
  )
}

AppTitle.propTypes = {
  slug: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string
}

AppTitle.defaultProps = {
  tag: 'h1'
}

export default AppTitle
