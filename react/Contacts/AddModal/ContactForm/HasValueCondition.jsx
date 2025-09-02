/*
  Wrapper for react-final-form field that renders it children only if the field
  with the given name has a truthy value or if the other condition is fulfilled
*/
import PropTypes from 'prop-types'
import React from 'react'
import { Field } from 'react-final-form'

const HasValueCondition = ({ children, otherCondition, name }) => {
  return (
    <Field name={name} subscription={{ value: true }}>
      {({ input: { value } }) =>
        (otherCondition !== undefined && otherCondition) || value
          ? children
          : null
      }
    </Field>
  )
}

HasValueCondition.defaultProps = {
  otherCondition: undefined
}

HasValueCondition.propTypes = {
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  otherCondition: PropTypes.bool
}

export default HasValueCondition
