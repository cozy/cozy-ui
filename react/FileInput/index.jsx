import cx from 'classnames'
import uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'

const FileInput = ({
  children,
  className,
  disabled,
  hidden,
  multiple,
  onChange,
  ...inputProps
}) => {
  const fileinputId = uniqueId('file-input')
  const fileinputRef = React.createRef()
  return (
    <label
      disabled={disabled}
      className={cx(styles['c-file-input'], className)}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          'aria-controls': fileinputId,
          role: 'button',
          tabIndex: 0,
          onKeyPress: event => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              fileinputRef.current.click()
            }
          }
        })
      )}
      <input
        ref={fileinputRef}
        id={fileinputId}
        hidden={hidden}
        type="file"
        multiple={multiple}
        onChange={e => {
          if (multiple) {
            onChange(Array.from(e.target.files))
          } else {
            onChange(Array.from(e.target.files)[0])
          }
        }}
        data-testid="file-input"
        {...inputProps}
      />
    </label>
  )
}

FileInput.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

FileInput.defaultProps = {
  disabled: false,
  hidden: true,
  multiple: false
}

export default FileInput
