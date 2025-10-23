import PropTypes from 'prop-types'
import React from 'react'
import { Field, useForm } from 'react-final-form'

import { makeFormattedAddressWithSubFields } from './helpers'
import { locales } from './locales'
import Button from '../../../Buttons'
import { FixedDialog } from '../../../CozyDialogs'
import { useI18n, useExtendI18n } from '../../../providers/I18n'
import FieldInputWrapper from '../ContactForm/FieldInputWrapper'
import { fieldInputAttributesTypes } from '../types'

const ContactAddressModal = ({ onClose, name, subFields }) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const { getFieldState, change } = useForm()

  const subFieldsState = subFields.map(subField =>
    getFieldState(`${name}${subField.name}`)
  )

  const onConfirm = () => {
    const hasBeenModified = subFieldsState.some(state => !state.pristine)
    if (!hasBeenModified) {
      return onClose()
    }

    const formattedAddress = makeFormattedAddressWithSubFields(
      subFieldsState,
      t
    )
    change(name, formattedAddress)

    onClose()
  }

  const onCancel = () => {
    subFieldsState.forEach(({ name, initial }) => change(name, initial))
    onClose()
  }

  return (
    <FixedDialog
      open
      onClose={onClose}
      size="small"
      title={t('Contacts.AddModal.ContactAddressDialog.fields.address')}
      content={subFields.map(subField => (
        <div key={subField.name} className="u-mt-1">
          <Field
            label={t(
              `Contacts.AddModal.ContactAddressDialog.fields.${subField.name}`
            )}
            attributes={{ type: subField.type }}
            name={`${name}${subField.name}`}
            component={FieldInputWrapper}
          />
        </div>
      ))}
      actions={
        <>
          <Button
            variant="secondary"
            label={t('Contacts.AddModal.ContactAddressDialog.cancel')}
            onClick={onCancel}
          />
          <Button
            className="u-ml-half"
            label={t('Contacts.AddModal.ContactAddressDialog.ok')}
            onClick={onConfirm}
          />
        </>
      }
    />
  )
}

ContactAddressModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  subFields: PropTypes.arrayOf(fieldInputAttributesTypes).isRequired
}

export default ContactAddressModal
