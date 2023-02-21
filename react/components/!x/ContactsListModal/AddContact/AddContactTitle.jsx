import React from 'react'

import { withContactsListLocales } from '../withContactsListLocales'

const AddContactTitle = ({ t }) => {
  return <>{t('newContact')}</>
}

export default withContactsListLocales(AddContactTitle)
