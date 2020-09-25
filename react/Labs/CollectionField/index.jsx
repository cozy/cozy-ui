import React, { useRef } from 'react'
import Button from '../../Button'
import Label from '../../Label'
import styles from './styles.styl'
import Stack from '../../Stack'
import Icon from '../../Icon'
import { FieldContainer } from '../../Field'

/**
 * Handles a collection of form fields.
 * This is a controlled component. You have to give it some values and handle
 * changes via the onChange prop. See examples in readme.
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
                    icon={<Icon icon="cross-small" color="var(--slateGrey)" />}
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
                icon="plus"
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

export default CollectionField
