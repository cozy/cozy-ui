import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import FieldInput from './FieldInput'
import FieldInputAccordion from './FieldInputAccordion'
import FieldInputArray from './FieldInputArray'
import { fieldsRequired } from './helpers'
import { locales } from './locales'
import Icon from '../../../Icon'
import { useI18n, useExtendI18n } from '../../../providers/I18n'

const FieldInputLayout = ({
  attributes: { layout, icon, ...attributes }, // ⚠️ layout and icon here are removed from attributes to avoid DOM propagration
  contacts,
  formProps
}) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const { valid, submitFailed, errors } = formProps
  const { name, label, ...restAttributes } = attributes

  const isError = fieldsRequired.includes(name) && !valid && submitFailed

  return (
    <div
      className={cx('u-flex u-mt-1', {
        'u-flex-items-center': !layout,
        'u-flex-items-baseline': !!layout
      })}
    >
      <div className="u-w-2-half">
        {icon && <Icon icon={icon} color="var(--iconTextColor)" />}
      </div>
      <div className="u-w-100">
        {layout === 'array' ? (
          <FieldInputArray
            attributes={attributes}
            contacts={contacts}
            formProps={formProps}
          />
        ) : layout === 'accordion' ? (
          <FieldInputAccordion
            attributes={attributes}
            contacts={contacts}
            error={isError}
            helperText={isError ? errors[name] : null}
          />
        ) : (
          <FieldInput
            attributes={restAttributes}
            contacts={contacts}
            error={isError}
            helperText={isError ? errors[name] : null}
            name={name}
            label={t(`Contacts.AddModal.ContactForm.fields.${name}`)}
            labelProps={label}
          />
        )}
      </div>
    </div>
  )
}

FieldInputLayout.propTypes = {
  attributes: PropTypes.object,
  contacts: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object)
  }),
  formProps: PropTypes.object
}

export default FieldInputLayout
