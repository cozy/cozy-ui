import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactSelect from 'react-select'
import styles from './styles.styl'
import Icon from '../Icon'
import palette from '../../stylus/settings/palette.json'

const reactSelectControl = CustomControl => ({ innerProps, children }) => (
  <div {...innerProps}>
    {CustomControl}
    <div className={styles['select-control__input']}>{children}</div>
  </div>
);

const Option = ({ label, isSelected, innerProps, withCheckbox }) => (
  <div {...innerProps} className={classNames(styles['select-option'], { [styles['select-option--selected']]: isSelected && !withCheckbox })}>
    { withCheckbox &&
        <input
        type="checkbox"
        checked={isSelected}
        className={styles['select-option__checkbox']}
      />
    }
    {label}
    { (isSelected && !withCheckbox) && <Icon icon="check-circleless" color={palette['dodgerBlue']} className={styles['select-option--checkmark']} /> }
  </div>
);

Option.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  innerProps: PropTypes.object.isRequired,
  withCheckbox: PropTypes.bool,
}

Option.defaultProps = {
  withCheckbox: false
}

const CheckboxOption = ({ ...props }) => (
  <Option {...props} withCheckbox />
);

CheckboxOption.propTypes = {}

const SelectBox = ({ components, ...props }) => (
  <ReactSelect
    components={{ Option, ...components }}
    {...props}
    />
)

SelectBox.propTypes = {
  components: PropTypes.object
}

SelectBox.defaultProps = {
  components: {}
}

export * from 'react-select'
export default SelectBox
export { Option, CheckboxOption, reactSelectControl }
