import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactSelect from 'react-select'
import styles from './styles.styl'
import Icon from '../Icon'
import palette from '../../stylus/settings/palette.json'
import Overlay from '../Overlay'
import withBreakpoints from '../helpers/withBreakpoints'

const customStyles = {
  container: (base, state) => ({
    ...base,
    maxWidth: '30rem',
    zIndex: state.isFocused ? styles.focusedZIndex : 10
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: 'white',
    border: state.isFocused
      ? `.0625rem solid ${palette['dodgerBlue']}`
      : `.0625rem solid ${palette['silver']}`,
    ':hover': {
      borderColor: palette['coolGrey']
    },
    borderRadius: '.1875rem',
    boxShadow: 'unset',
    padding: '.503rem .5rem'
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    backgroundImage: state.menuIsOpen
      ? 'url("../../assets/icons/ui/icon-top-select.svg")'
      : 'url("../../assets/icons/ui/icon-bottom-select.svg")',
    backgroundSize: '.875rem',
    height: '.875rem',
    marginRight: '.75rem',
    padding: 0,
    width: '.875rem'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  valueContainer: base => ({
    ...base,
    color: 'black'
  }),
  menu: (base, state) => ({
    ...base,
    zIndex: state.isFocused ? styles.focusedZIndex : 10
  })
}

const reactSelectControl = CustomControl => ({ innerProps, children }) => (
  <div {...innerProps}>
    {CustomControl}
    <div className={styles['select-control__input']}>{children}</div>
  </div>
)

const Option = ({
  children,
  isSelected,
  isFocused,
  innerProps,
  withCheckbox
}) => (
  <div
    {...innerProps}
    className={classNames(styles['select-option'], {
      [styles['select-option--selected']]: isSelected && !withCheckbox,
      [styles['select-option--focused']]: isFocused
    })}
  >
    {withCheckbox && (
      <input
        type="checkbox"
        checked={isSelected}
        className={styles['select-option__checkbox']}
      />
    )}
    {children}
    {isSelected &&
      !withCheckbox && (
        <Icon
          icon="check-circleless"
          color={palette['dodgerBlue']}
          className={styles['select-option--checkmark']}
        />
      )}
  </div>
)

Option.propTypes = {
  withCheckbox: PropTypes.bool
}

Option.defaultProps = {
  withCheckbox: false
}

const CheckboxOption = ({ ...props }) => <Option {...props} withCheckbox />

CheckboxOption.propTypes = {}

class SelectBox extends Component {
  state = {
    isOverlayVisible: false
  }

  hideOverlay() {
    this.setState({ isOverlayVisible: false })
  }

  onBlur = event => {
    this.hideOverlay()

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event)
    }
  }

  onChange = event => {
    this.hideOverlay()

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event)
    }
  }

  onFocus = event => {
    this.setState({ isOverlayVisible: true })

    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event)
    }
  }

  render() {
    const {
      className,
      components,
      styles: reactSelectStyles,
      breakpoints: { isMobile },
      ...props
    } = this.props
    const showOverlay = this.state.isOverlayVisible && isMobile

    return (
      <div className={className}>
        {showOverlay && <Overlay className={styles.select__overlay} />}
        <ReactSelect
          components={{ Option, ...components }}
          styles={{ ...customStyles, ...reactSelectStyles }}
          {...props}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

SelectBox.propTypes = {
  components: PropTypes.object,
  styles: PropTypes.object
}

SelectBox.defaultProps = {
  components: {},
  styles: {}
}

export default withBreakpoints()(SelectBox)
export { Option, CheckboxOption, reactSelectControl }
