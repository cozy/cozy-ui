import React, { useState } from 'react'

import { useClient } from 'cozy-client'

import AddContactActions from './AddContactActions'
import AddContactContent from './AddContactContent'
import AddContactTitle from './AddContactTitle'
import { handleSubmit } from './helpers'
import { FixedDialog } from '../../CozyDialogs'

const AddContactDialog = ({ onListClose, onCreate, onClose }) => {
  const [contactValues, setContactValues] = useState({})
  const client = useClient()

  return (
    <FixedDialog
      open={true}
      onClose={onClose}
      title={<AddContactTitle />}
      content={<AddContactContent setContactValues={setContactValues} />}
      actions={
        <AddContactActions
          onCancel={onClose}
          onSave={() =>
            handleSubmit({
              client,
              contactValues,
              onCreate,
              onListClose
            })
          }
        />
      }
    />
  )
}

export default AddContactDialog
