import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef, useState } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
import { useI18n, useExtendI18n } from 'twake-i18n'

import { locales } from './locales'
import styles from './styles.styl'
import Button from '../../react/Buttons'
import TextField from '../../react/TextField'
import Typography from '../../react/Typography'

// Adapts HexColorInput (color/onChange(string)) to MUI's inputComponent contract (value/onChange(event)).
// inputRef is stripped because HexColorInput doesn't handle it and would forward it to the DOM.
const ColorInput = forwardRef(
  // eslint-disable-next-line no-unused-vars
  ({ value, onChange, inputRef, ...props }, ref) => (
    <HexColorInput
      {...props}
      ref={ref}
      color={value}
      onChange={color => onChange?.({ target: { value: color } })}
    />
  )
)

ColorInput.displayName = 'ColorInput'

const ColorPickerCustom = ({ className, color, onCancel, onSave }) => {
  useExtendI18n(locales)
  const [newColor, setNewColor] = useState(color)

  const { t } = useI18n()

  return (
    <div className={cx('u-flex u-flex-column', styles.root, className)}>
      <HexColorPicker
        color={newColor}
        onChange={c => setNewColor(c.toUpperCase())}
      />
      <div className="u-flex u-flex-row u-flex-items-center u-mt-1">
        <Typography variant="h6" className="u-mr-half">
          Hex
        </Typography>
        <TextField
          className={styles.input}
          InputProps={{ inputComponent: ColorInput }}
          inputProps={{ prefixed: true }}
          value={newColor}
          onChange={e => setNewColor(e.target.value.toUpperCase())}
        />
      </div>
      <div className="u-mt-1 u-ta-right">
        <Button
          variant="text"
          label={t('ColorPickerCustom.cancel')}
          onClick={() => onCancel?.(color)}
        />
        <Button
          variant="ghost"
          label={t('ColorPickerCustom.submit')}
          onClick={() => onSave?.(newColor)}
        />
      </div>
    </div>
  )
}

ColorPickerCustom.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
}

export default ColorPickerCustom
