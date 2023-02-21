import React from 'react'

import Button from '../../Buttons'
import { withContactsListLocales } from '../withContactsListLocales'

const AddContactActions = ({ t, onCancel, onSave }) => {
  return (
    <>
      <Button variant="secondary" label={t('cancel')} onClick={onCancel} />
      <Button label={t('save')} onClick={onSave} />
    </>
  )
}

export default withContactsListLocales(AddContactActions)
