import cx from 'classnames'
import uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Field } from 'react-final-form'

import FieldInputWrapper from './FieldInputWrapper'
import HasValueCondition from './HasValueCondition'
import { RelatedContactList } from './RelatedContactList'
import { locales } from './locales'
import styles from './styles.styl'
import { useI18n, useExtendI18n } from '../../../providers/I18n'
import ContactAddressDialog from '../ContactAddressDialog'
import { fieldInputAttributesTypes, labelPropTypes } from '../types'

const FieldInput = ({
  name,
  labelProps,
  className,
  attributes: { subFields, ...restAttributes },
  contacts,
  error,
  helperText,
  label,
  isInvisible,
  required
}) => {
  const [id] = useState(uniqueId('field_')) // state only use to generate id once and not at each render
  const [hasBeenFocused, setHasBeenFocused] = useState(false)
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false)
  const [isRelatedContactDialogOpen, setIsRelatedContactDialogOpen] =
    useState(false)
  useExtendI18n(locales)
  const { t } = useI18n()

  const handleClick = () => {
    if (name.includes('address')) {
      setIsAddressDialogOpen(true)
    }

    if (name.includes('relatedContact')) {
      setIsRelatedContactDialogOpen(true)
    }
  }

  const onFocus = () => {
    setHasBeenFocused(true)
  }

  return (
    <div
      className={cx(
        className,
        styles['contact-form-field__wrapper'],
        'u-flex-column-s',
        { 'u-flex': !isInvisible, 'u-dn': isInvisible }
      )}
    >
      <Field
        required={required}
        error={error}
        helperText={helperText}
        label={label}
        id={id}
        attributes={restAttributes}
        name={name}
        component={FieldInputWrapper}
        onFocus={onFocus}
        onClick={handleClick}
      />
      {isAddressDialogOpen && (
        <ContactAddressDialog
          onClose={() => setIsAddressDialogOpen(false)}
          name={name}
          subFields={subFields}
        />
      )}
      {isRelatedContactDialogOpen && (
        <RelatedContactList
          onClose={() => setIsRelatedContactDialogOpen(false)}
          name={name}
          contacts={contacts}
        />
      )}
      {labelProps && (
        <HasValueCondition name={name} otherCondition={hasBeenFocused}>
          <div className="u-mt-half-s u-ml-half u-ml-0-s u-flex-shrink-0 u-w-auto u-miw-4">
            <Field
              attributes={labelProps}
              name={`${name}Label`}
              label={t('Contacts.AddModal.ContactForm.fields.label')}
              component={FieldInputWrapper}
              onFocus={onFocus}
            />
          </div>
        </HasValueCondition>
      )}
    </div>
  )
}

FieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  labelProps: labelPropTypes,
  attributes: fieldInputAttributesTypes,
  /** Whether the field is visible by the user or not (still in the DOM anyway) */
  isInvisible: PropTypes.bool,
  contacts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object)
  }),
  // Destructuring props
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool
}

FieldInput.defaultProps = {
  labelProps: null,
  required: false
}

export default FieldInput
