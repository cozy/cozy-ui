import arrayMutators from 'final-form-arrays'
import React, { useState } from 'react'
import { Form } from 'react-final-form'

import { getHasManyItems } from 'cozy-client/dist/associations/HasMany'

import FieldInputLayout from './FieldInputLayout'
import contactToFormValues from './contactToFormValues'
import { fields } from './fieldsConfig'
import formValuesToContact from './formValuesToContact'
import { validateFields } from './helpers'
import { locales } from './locales'
import Button from '../../../Buttons'
import { useI18n, useExtendI18n } from '../../../providers/I18n'
// import { fullContactPropTypes } from '../../ContactPropTypes' // !!

// this variable will be set in the form's render prop
// and used by the submit button in ContactFormModal
// to be able to trigger the submit from outside the form
// See react-final-form examples here: https://www.npmjs.com/package/react-final-form#external-submit
let _submitContactForm

function setSubmitContactForm(handleSubmit) {
  _submitContactForm = handleSubmit
}

export function getSubmitContactForm() {
  return _submitContactForm
}

/**
 *
 * @param {object} params
 * @param {import('cozy-client/types/types').IOCozyContact} params.contact
 * @param {func} params.onSubmit
 * @param {{ data: Array<object> }} params.contacts
 * @returns
 */
const ContactForm = ({ contact, onSubmit, contacts }) => {
  const [showSecondaryFields, setShowSecondaryFields] = useState(false)
  useExtendI18n(locales)
  const { t } = useI18n()

  const hasSecondaryFields = fields.some(el => el.isSecondary)

  return (
    <Form
      mutators={{ ...arrayMutators }}
      validate={values => validateFields(values, t)}
      onSubmit={formValues =>
        onSubmit(formValuesToContact({ formValues, oldContact: contact, t }))
      }
      initialValues={contactToFormValues({ contact, t })}
      render={({ handleSubmit, valid, submitFailed, errors }) => {
        setSubmitContactForm(handleSubmit)
        return (
          <form
            role="form"
            onSubmit={handleSubmit}
            className="u-flex u-flex-column"
          >
            {fields.map((attributes, index) => (
              <FieldInputLayout
                key={index}
                attributes={attributes}
                contacts={contacts}
                showSecondaryFields={showSecondaryFields}
                formProps={{
                  valid,
                  submitFailed,
                  errors
                }}
              />
            ))}
            {hasSecondaryFields && !showSecondaryFields && (
              <div>
                <Button
                  className="u-db u-ml-2 u-mt-1"
                  variant="text"
                  label={t('Contacts.AddModal.ContactForm.other-fields')}
                  onClick={() => setShowSecondaryFields(true)}
                />
              </div>
            )}
          </form>
        )
      }}
    />
  )
}

// Used to avoid unnecessary multiple rendering of ContactForm when creating a new contact in another way.
// These unnecessary renderings prevented the addition of a newly created linked contact. (Creation of a contact when selecting a linked contact)
export const isSameContactProp = (prevProps, nextProps) => {
  if (!prevProps.contact?.relationships || !nextProps.contact?.relationships) {
    return false
  }

  const prevContactIdsRelated = getHasManyItems(
    prevProps.contact,
    'related'
  ).map(r => r._id)
  const nextContactIdsRelated = getHasManyItems(
    nextProps.contact,
    'related'
  ).map(r => r._id)

  if (
    prevContactIdsRelated.length !== nextContactIdsRelated.length ||
    !prevContactIdsRelated.every(id => nextContactIdsRelated.includes(id))
  ) {
    return false
  }

  return true
}

// export default ContactForm
export default React.memo(ContactForm, isSameContactProp)
