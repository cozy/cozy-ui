import PropTypes from 'prop-types'

import { iconPropType } from '../../Icon'

/**
 * @typedef {'text'|'tel'|'email'|'button'|'url'|'date'} FieldType
 */

/**
 * @typedef {Object} CustomLabelOptions
 * @property {string} defaultType - The default type of the option
 * @property {string} defaultLabel - The default label of the option
 * @property {boolean} [hide] - Whether the radio choices is hidden
 */

/**
 * @typedef {Object} LabelField
 * @property {string} name - The name of the label field
 * @property {boolean} select - Whether the field is a select
 * @property {CustomLabelOptions} customLabelOptions - The custom label field options
 * @property {Option[]} options - The options of the label field
 */

/**
 * @typedef {Object} InputLabelProps
 * @property {boolean} shrink - passed to InputLabelProps props
 */

/**
 * @typedef {Object} Field
 * @property {string} name - The name of the field
 * @property {string|null} icon - The icon of the field
 * @property {FieldType} type - The type of the field
 * @property {boolean} [isSecondary] -  Whether the field is hidden from the main form
 * @property {LabelField} [label] - Add a "label" field next to the main field
 * @property {'accordion'|'array'} [layout] - Whether the field is an array (To add fields dynamically (e.g. email, address, etc.))
 * @property {Field[]} [subFields] - The subfields of the field
 * @property {InputLabelProps} [InputLabelProps] - The object passed to InputLabelProps props
 * @property {boolean} [multiline] - Whether the field is multiline
 */

/**
 * @typedef {Object} RelatedContact
 * @property {string} relatedContactId - The id of the related contact
 * @property {string} relatedContact - The displayName of the related contact
 * @property {string} relatedContactLabel - Object with the type of the related contact stringified (e.g. '{\"type\":\"spouse\"}')
 */

export const labelPropTypes = PropTypes.shape({
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  customLabelOptions: PropTypes.shape({
    hide: PropTypes.bool,
    defaultType: PropTypes.string,
    defaultLabel: PropTypes.string
  })
})

export const fieldInputAttributesTypes = PropTypes.shape({
  name: PropTypes.string,
  icon: iconPropType,
  type: PropTypes.string,
  label: labelPropTypes,
  layout: PropTypes.string,
  subFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string,
      type: PropTypes.string.isRequired
    })
  ),
  labelProps: PropTypes.shape({
    shrink: PropTypes.bool
  })
})

export const FieldInputWrapperPropTypes = {
  // See official documentation for more information: https://final-form.org/docs/react-final-form/types/FieldRenderProps
  input: PropTypes.object,
  //
  attributes: fieldInputAttributesTypes,
  // Destructuring props
  // See official documentation for more information: https://final-form.org/docs/react-final-form/types/FieldRenderProps
  meta: PropTypes.object,
  //
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.string,
  customLabelOptions: PropTypes.shape({
    hide: PropTypes.bool,
    defaultType: PropTypes.string.isRequired,
    defaultLabel: PropTypes.string.isRequired
  }),
  fullWidth: PropTypes.bool
}
