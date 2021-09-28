import React, { useState } from 'react'
import PropTypes from 'prop-types'
import compose from 'lodash/flowRight'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'

import { Contact } from 'cozy-doctypes'
import { Q, withClient, fetchPolicies, queryConnect } from 'cozy-client'
import { DialogTitle, DialogContent } from '../Dialog'
import Paper from '../Paper'
import CozyTheme from '../CozyTheme'
import {
  TopAnchoredDialog,
  DialogCloseButton,
  useCozyDialog
} from '../CozyDialogs'
import useRealtime from '../hooks/useRealtime'
import useEventListener from '../hooks/useEventListener.js'
import PreviousIcon from '../Icons/Previous'
import useBreakpoints from '../hooks/useBreakpoints'

import ContactsList from '../ContactsList'
import Spinner from '../Spinner'
import styles from './styles.styl'
import Icon from '../Icon'
import AddContactButton from './AddContactButton'
import EmptyMessage from './EmptyMessage'

import cx from 'classnames'

const thirtySeconds = 30000
const olderThan30s = fetchPolicies.olderThan(thirtySeconds)

const mkFilter = filterStr => contacts => {
  if (!filterStr) {
    return contacts
  }

  const f = filterStr.toLowerCase()

  // TODO better filtering methods can be extracted from drive. See https://github.com/cozy/cozy-ui/pull/1273#discussion_r351845385
  return contacts.filter(contact => {
    const displayName = Contact.getDisplayName(contact)

    if (!displayName) {
      return false
    }

    return displayName.toLowerCase().includes(f)
  })
}

const barStyle = {
  height: 48
}

const ContactsListModal = props => {
  const { isMobile } = useBreakpoints()
  const {
    onItemClick,
    placeholder,
    addContactLabel,
    emptyMessage,
    contacts,
    client,
    ...rest
  } = props

  const [filter, setFilter] = useState('')

  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  const filterContacts = mkFilter(filter)

  const handleItemClick = contact => {
    if (!onItemClick) {
      return
    }

    onItemClick(contact)
    rest.dismissAction()
  }

  const loading =
    (contacts.fetchStatus === 'loading' ||
      contacts.fetchStatus === 'pending') &&
    !contacts.lastFetch

  const filteredContacts = filterContacts(contacts.data)

  useRealtime(
    client,
    {
      'io.cozy.contacts': {
        created: contacts.fetch,
        updated: contacts.fetch
      }
    },
    []
  )

  useEventListener(document, 'resume', contacts.fetch)

  const { dialogProps, dialogTitleProps } = useCozyDialog({
    size: 'large',
    open: true,
    onClose: props.dismissAction
  })

  return (
    <TopAnchoredDialog {...dialogProps}>
      <CozyTheme variant={isMobile ? 'inverted' : 'normal'}>
        <DialogCloseButton onClick={props.dismissAction} />
      </CozyTheme>
      <DialogTitle
        {...dialogTitleProps}
        className={cx(dialogTitleProps.className, {
          'u-p-0 u-w-100': isMobile
        })}
      >
        {isMobile ? (
          <>
            <CozyTheme variant="inverted">
              <Paper
                square
                elevation={0}
                className="u-flex u-flex-items-center u-pr-3 u-pl-half"
                style={barStyle}
              >
                <IconButton className="u-mr-half" onClick={rest.dismissAction}>
                  <Icon icon={PreviousIcon} />
                </IconButton>
                <Input
                  type="text"
                  placeholder={placeholder}
                  value={filter}
                  onChange={handleFilterChange}
                  autoFocus
                  fullWidth
                  disableUnderline
                />
              </Paper>
            </CozyTheme>
          </>
        ) : (
          <TextField
            variant="outlined"
            type="text"
            placeholder={placeholder}
            fullWidth
            value={filter}
            onChange={handleFilterChange}
            autoFocus
          />
        )}
      </DialogTitle>
      <DialogContent className="u-p-0">
        <div className="dialogContentInner">
          <div className={styles.ContactsListModal__addContactContainer}>
            <AddContactButton
              className={isMobile && 'u-mt-1'}
              label={addContactLabel}
            />
          </div>
          {loading && (
            <div className="u-mv-2">
              <Spinner size="xxlarge" />
            </div>
          )}
          {!loading && filteredContacts.length === 0 && (
            <EmptyMessage>{emptyMessage}</EmptyMessage>
          )}
          {!loading && filteredContacts.length > 0 && (
            <ContactsList
              contacts={filteredContacts}
              onItemClick={handleItemClick}
            />
          )}
        </div>
      </DialogContent>
    </TopAnchoredDialog>
  )
}

ContactsListModal.propTypes = {
  onItemClick: PropTypes.func
}

export default compose(
  withClient,
  queryConnect({
    contacts: {
      query: () => Q('io.cozy.contacts').UNSAFE_noLimit(),
      as: 'contacts',
      fetchPolicy: olderThan30s
    }
  })
)(ContactsListModal)
