import React from 'react'
import Button from '../../Button'
import cx from 'classnames'
import fieldStyles from '../../Field/styles.styl'
import Label from '../../Label'
import styles from './styles.styl'
import Stack from '../../Stack'
import Icon from '../../Icon'

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
    className,
    ...rest
  } = props

  const handleChange = index => contact => {
    const data = [...values]
    data[index] = contact

    onChange(data)
  }

  const handleAdd = () => {
    const data = [...values, null]
    onChange(data)
  }

  const handleRemove = index => {
    const data = [...values.slice(0, index), ...values.slice(index + 1)]
    onChange(data)
  }

  return (
    <div className={cx(fieldStyles['o-field'], className)} {...rest}>
      <Label>{label}</Label>
      <Stack>
        <Stack spacing="s">
          {values.map((value, index) => {
            return (
              <div key={index} className={styles.CollectionField__row}>
                <Component
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
        <Button
          label={addButtonLabel}
          type="button"
          theme="text"
          icon={
            <Icon icon="plus" className={styles.CollectionField__addBtnIcon} />
          }
          onClick={handleAdd}
          className={styles.CollectionField__addBtn}
        />
      </Stack>
    </div>
  )
}

export default CollectionField
