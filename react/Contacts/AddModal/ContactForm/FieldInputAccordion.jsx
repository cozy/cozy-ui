import React, { useState } from 'react'

import FieldInput from './FieldInput'
import { locales } from './locales'
import Icon from '../../../Icon'
import IconButton from '../../../IconButton'
import DropdownIcon from '../../../Icons/Dropdown'
import DropupIcon from '../../../Icons/Dropup'
import { useI18n, useExtendI18n } from '../../../providers/I18n'

const FieldInputAccordion = ({
  attributes: { name, label, subFields, ...restAttributes },
  contacts,
  error,
  helperText
}) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const [showExtended, setShowExtended] = useState(false)

  return (
    <>
      <div className="u-flex u-flex-items-baseline">
        <FieldInput
          attributes={restAttributes}
          contacts={contacts}
          error={error}
          helperText={helperText}
          name={name}
          label={t(`Contacts.AddModal.ContactForm.fields.${name}`)}
          labelProps={label}
        />
        <IconButton
          className="u-ml-half"
          size="medium"
          onClick={() => setShowExtended(v => !v)}
        >
          <Icon icon={showExtended ? DropupIcon : DropdownIcon} />
        </IconButton>
      </div>
      {subFields.map(({ name, ...attributes }, index) => {
        return (
          <FieldInput
            key={index}
            className="u-mt-1"
            attributes={attributes}
            name={name}
            isInvisible={!showExtended}
            label={t(`Contacts.AddModal.ContactForm.fields.${name}`)}
          />
        )
      })}
    </>
  )
}

export default FieldInputAccordion
