import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { Q, fetchPolicies, useClient, useQuery } from 'cozy-client'

import { DialogTitle, DialogContent } from '../Dialog'
import CozyTheme from '../providers/CozyTheme'
import {
  TopAnchoredDialog,
  DialogCloseButton,
  useCozyDialog
} from '../CozyDialogs'
import useRealtime from '../hooks/useRealtime'
import useEventListener from '../hooks/useEventListener'
import useBreakpoints from '../hooks/useBreakpoints'
import Button from '../Buttons'
import PlusIcon from '../Icons/Plus'
import Icon from '../Icon'
import MobileHeader from './MobileHeader'
import ContactsListContent from './ContactsListContent'
import AddContactDialog from './AddContact/AddContactDialog'
import TextField from '../TextField'

import styles from './styles.styl'

const thirtySeconds = 30000
const olderThan30s = fetchPolicies.olderThan(thirtySeconds)

const contactsQuery = {
  definition: Q('io.cozy.contacts').UNSAFE_noLimit(),
  options: {
    as: 'contacts',
    fetchPolicy: olderThan30s
  }
}

const ContactsListModal = ({
  onItemClick,
  placeholder,
  addContactLabel,
  emptyMessage,
  dismissAction
}) => {
  const [filter, setFilter] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const { isMobile } = useBreakpoints()
  const { dialogProps, dialogTitleProps } = useCozyDialog({
    size: 'large',
    open: true,
    onClose: dismissAction
  })
  const client = useClient()
  const contacts = useQuery(contactsQuery.definition, contactsQuery.options)
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

  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  return (
    <TopAnchoredDialog {...dialogProps}>
      <CozyTheme variant={isMobile ? 'inverted' : 'normal'}>
        <DialogCloseButton onClick={dismissAction} />
      </CozyTheme>
      <DialogTitle
        {...dialogTitleProps}
        className={cx(dialogTitleProps.className, {
          'u-p-0 u-w-100': isMobile
        })}
      >
        {isMobile ? (
          <MobileHeader
            filter={filter}
            placeholder={placeholder}
            onChange={handleFilterChange}
            onDismiss={dismissAction}
          />
        ) : (
          <TextField
            variant="outlined"
            type="text"
            label={placeholder}
            id={placeholder}
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
            <Button
              className={isMobile && 'u-mt-1'}
              variant="secondary"
              theme="secondary"
              label={addContactLabel}
              startIcon={<Icon icon={PlusIcon} />}
              onClick={setShowAddDialog}
            />
          </div>
          <ContactsListContent
            filter={filter}
            contacts={contacts}
            onItemClick={onItemClick}
            emptyMessage={emptyMessage}
            dismissAction={dismissAction}
          />
        </div>
      </DialogContent>
      {showAddDialog && (
        <AddContactDialog
          onListClose={dismissAction}
          onCreate={onItemClick}
          onClose={() => setShowAddDialog(false)}
        />
      )}
    </TopAnchoredDialog>
  )
}

ContactsListModal.propTypes = {
  onItemClick: PropTypes.func,
  placeholder: PropTypes.string,
  addContactLabel: PropTypes.string,
  emptyMessage: PropTypes.string,
  dismissAction: PropTypes.func
}

export default ContactsListModal
