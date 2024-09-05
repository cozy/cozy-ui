import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { useClient } from 'cozy-client'

import AddContactDialog from './AddContact/AddContactDialog'
import ContactsListContent from './ContactsListContent'
import MobileHeader from './MobileHeader'
import styles from './styles.styl'
import Button from '../Buttons'
import {
  TopAnchoredDialog,
  DialogCloseButton,
  useCozyDialog
} from '../CozyDialogs'
import { DialogTitle, DialogContent } from '../Dialog'
import Icon from '../Icon'
import PlusIcon from '../Icons/Plus'
import useEventListener from '../hooks/useEventListener'
import useRealtime from '../hooks/useRealtime'
import CozyTheme from '../providers/CozyTheme'
import useBreakpoints from '../providers/Breakpoints'
import { useI18n } from '../providers/I18n'
import TextField from '../TextField'

const ContactsListModal = ({
  onItemClick,
  placeholder,
  addContactLabel,
  emptyMessage,
  dismissAction,
  contacts
}) => {
  const [filter, setFilter] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const { isMobile } = useBreakpoints()
  const { t } = useI18n()
  const { dialogProps, dialogTitleProps } = useCozyDialog({
    size: 'large',
    open: true,
    onClose: dismissAction
  })
  const client = useClient()

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

  const selfAddContactLabel = addContactLabel ?? t('addContact')
  const selfPlaceholder = placeholder ?? t('searchContact')

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
            placeholder={selfPlaceholder}
            onChange={handleFilterChange}
            onDismiss={dismissAction}
          />
        ) : (
          <TextField
            variant="outlined"
            type="text"
            label={selfPlaceholder}
            id="contactsListModal-search-id"
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
              label={selfAddContactLabel || <Icon icon={PlusIcon} />}
              {...(selfAddContactLabel && {
                startIcon: <Icon icon={PlusIcon} />
              })}
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
  /** Label to show in the search input */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Label to show on the button to add a contact */
  addContactLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Message to show when no result */
  emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  dismissAction: PropTypes.func,
  /** Query state of contacts */
  contacts: PropTypes.object
}

export default ContactsListModal
