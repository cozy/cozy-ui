import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '../../deprecated/Button'
import { FieldContainer } from '../../Field'
import Icon from '../../Icon'
import Label from '../../Label'
import CrossSmallIcon from '../../Icons/CrossSmall'
import PlusIcon from '../../Icons/Plus'
import Stack from '../../Stack'

import styles from './styles.styl'

/**
 * Handles a collection of form fields.
 * This is a controlled component. You have to give it some values and handle
 * changes via the onChange prop. See examples in readme.
 *
 * When a field is added, the underlying component receives `null` as
 * its value.
 * When a field is being added, the "Add" button is not shown.
 */
const CollectionField = props => {
  const {
    values,
    component: Component,
    placeholder,
    label,
    addButtonLabel,
    removeButtonLabel,
    onChange,
    onAddField,
    ...rest
  } = props

  // This ref is used to support the onAddField props.
  // It contains the index of the field that has been
  // added and is used when handling refs to pass the
  // instance of the component that was added to the
  // onAddField prop of the parent.
  const justAddedFieldIndex = useRef()

  const handleChange = index => contact => {
    const data = [...values]
    data[index] = contact

    onChange(data)
  }

  const handleAdd = () => {
    const data = [...values, null]
    onChange(data)
    justAddedFieldIndex.current = data.length - 1
  }

  const handleRemove = index => {
    const data = [...values.slice(0, index), ...values.slice(index + 1)]
    onChange(data)
  }

  const handleFieldRef = (index, componentInstance) => {
    if (!onAddField) {
      return
    }
    if (index === justAddedFieldIndex.current && componentInstance) {
      justAddedFieldIndex.current = null
      onAddField(componentInstance)
    }
  }

  return (
    <FieldContainer {...rest}>
      <Label>{label}</Label>
      <Stack>
        {values.length > 0 ? (
          <Stack spacing="s">
            {values.map((value, index) => {
              return (
                <div key={index} className={styles.CollectionField__row}>
                  <Component
                    ref={value => handleFieldRef(index, value)}
                    value={value}
                    onChange={handleChange(index)}
                    placeholder={placeholder}
                  />
                  <Button
                    type="button"
                    theme="secondary"
                    label={removeButtonLabel}
                    iconOnly
                    round
                    icon={
                      <Icon icon={CrossSmallIcon} color="var(--slateGrey)" />
                    }
                    onClick={() => handleRemove(index)}
                  />
                </div>
              )
            })}
          </Stack>
        ) : null}
        {values[values.length - 1] !== null ? (
          <Button
            label={addButtonLabel}
            type="button"
            theme="text"
            icon={
              <Icon
                icon={PlusIcon}
                className={styles.CollectionField__addBtnIcon}
              />
            }
            onClick={handleAdd}
            className={styles.CollectionField__addBtn}
          />
        ) : null}
      </Stack>
    </FieldContainer>
  )
}

CollectionField.propTypes = {
  /** @type {Array} Individual values will be passed through `value` to the underlying Component */
  values: PropTypes.array.isRequired,
  /** @type {ElementType} Component used to render a field */
  component: PropTypes.elementType.isRequired,
  /** @type {String} Label of the field */
  label: PropTypes.node.isRequired,
  /** @type {Function} Callback called when a value is added / updated / removed */
  onChange: PropTypes.func.isRequired,
  /** @type {String} Label of the "Add" button */
  addButtonLabel: PropTypes.node.isRequired,
  /** @type {String} Label of the "Remove" button */
  removeButtonLabel: PropTypes.node.isRequired,
  /** @type {String} Placeholder passed to the Component */
  placeholder: PropTypes.string,
  /** @type {String} Callback called with the instance of the Component when a field is being added */
  onAddField: PropTypes.func
}

export default CollectionField
