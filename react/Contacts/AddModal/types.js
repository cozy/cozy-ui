import PropTypes from 'prop-types'

import { iconPropType } from '../../Icon'

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
  isArray: PropTypes.bool,
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
