import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'

import styles from './styles.styl'
import TextField from '../../react/TextField'
import Typography from '../../react/Typography'

const ColorPickerCustom = ({ color, setColor, className }) => {
  return (
    <div className={cx('u-flex u-flex-column', styles.root, className)}>
      <HexColorPicker color={color} onChange={setColor} />
      <div className="u-flex u-flex-row u-flex-items-center u-mt-1">
        <Typography variant="h6" className="u-mr-half">
          Hex
        </Typography>
        <TextField
          value={color}
          onChange={e => setColor(e.target.value)}
          inputComponent={HexColorInput}
          className={styles.input}
        />
      </div>
    </div>
  )
}

ColorPickerCustom.propTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func,
  className: PropTypes.string
}

export default ColorPickerCustom
