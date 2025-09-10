import cx from 'classnames'
import React from 'react'
import { FieldArray } from 'react-final-form-arrays'

import FieldInput from './FieldInput'
import { fieldsRequired, addField, removeField } from './helpers'
import { locales } from './locales'
import Button from '../../../Buttons'
import Icon from '../../../Icon'
import IconButton from '../../../IconButton'
import CrossCircleIcon from '../../../Icons/CrossCircle'
import PlusIcon from '../../../Icons/Plus'
import ListItemIcon from '../../../ListItemIcon'
import { useI18n, useExtendI18n } from '../../../providers/I18n'

const FieldInputArray = ({
  attributes: { name, label, ...restAttributes },
  contacts,
  formProps: { valid, submitFailed, errors }
}) => {
  useExtendI18n(locales)
  const { t } = useI18n()

  return (
    <FieldArray name={name}>
      {({ fields }) => {
        return (
          <>
            {fields.map((nameWithIndex, index) => {
              const key = fields.value[index]?.fieldId || nameWithIndex
              const showRemove = fields.value[index]?.[name]
              const inputName = `${nameWithIndex}.${name}`
              const isError =
                fieldsRequired.includes(inputName) && !valid && submitFailed

              return (
                <div
                  key={key}
                  className={cx('u-flex u-flex-items-baseline', {
                    'u-mt-1': index !== 0
                  })}
                >
                  <FieldInput
                    attributes={restAttributes}
                    contacts={contacts}
                    error={isError}
                    helperText={isError ? errors[inputName] : null}
                    name={inputName}
                    label={t(`Contacts.AddModal.ContactForm.fields.${name}`)}
                    labelProps={label}
                  />
                  {showRemove && (
                    <ListItemIcon className="u-ml-half">
                      <IconButton
                        aria-label="delete"
                        color="error"
                        size="medium"
                        onClick={() => removeField(fields, index)}
                      >
                        <Icon icon={CrossCircleIcon} />
                      </IconButton>
                    </ListItemIcon>
                  )}
                </div>
              )
            })}
            <Button
              variant="text"
              startIcon={<Icon icon={PlusIcon} />}
              onClick={() => addField(fields)}
              label={t(`Contacts.AddModal.ContactForm.addLabel.${name}`)}
            />
          </>
        )
      }}
    </FieldArray>
  )
}

export default FieldInputArray
