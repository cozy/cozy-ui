import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSelect, { components } from 'react-select'
import classNames from 'classnames'

import { isIOSApp } from 'cozy-device-helper'

import Icon from '../Icon'
import CheckIcon from '../Icons/Check'
import withBreakpoints from '../helpers/withBreakpoints'
import TopIcon from '../Icons/Top'
import BottomIcon from '../Icons/Bottom'

import styles from './styles.styl'
import ControlDefault from './ControlDefault'

const heights = {
  tiny: '2rem',
  medium: '2.5rem',
  large: '3rem'
}

const borderStyle = (props, state) => {
  if (props.inset) {
    return '.125rem solid var(--paperBackgroundColor)'
  }
  return `.0625rem solid ${
    state.isFocused ? 'var(--primaryColor)' : 'var(--borderMainColor)'
  }`
}

const customStyles = props => ({
  control: (base, state) => ({
    ...base,
    // The gray background color is managed via the select--disabled
    // class applied below
    backgroundColor: props.disabled
      ? 'transparent'
      : 'var(--paperBackgroundColor)',
    border: borderStyle(props, state),
    ':hover': {
      borderColor: props.inset
        ? 'var(--paperBackgroundColor)'
        : 'var(--hintTextColor)',
      backgroundColor: props.inset
        ? 'var(--defaultBackgroundColor)'
        : 'var(--paperBackgroundColor)',
      cursor: 'pointer'
    },
    borderRadius: '.1875rem',
    boxShadow: 'unset',
    height: heights[props.size],
    minHeight: heights[props.size]
  }),
  placeholder: base => ({
    ...base,
    color: 'var(--secondaryTextColor)'
  }),
  dropdownIndicator: base => ({
    ...base,
    marginRight: '.75rem',
    height: '.875rem',
    width: '.875rem',
    padding: 0
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  valueContainer: base => ({
    ...base,
    color: 'var(--primaryTextColor)'
  }),
  singleValue: base => ({
    ...base,
    color: 'var(--primaryTextColor)'
  }),
  multiValue: base => ({
    ...base,
    backgroundColor: 'var(--hintTextColor)'
  }),
  menu: base => ({
    ...base,
    backgroundColor: 'var(--paperBackgroundColor)',
    zIndex: 10
  })
})

/**
 * Determines maxHeight property for menuList component. This value is computed
 * with a container element and the current SelectBox element.
 * The container element defines an element which the SelectBox should not
 * overflow.
 * @param  {object} container React reference to an element containing
 * the SelectBox
 * @param  {object} element    React reference to the ReactSelect element
 * @return {object}            A style object, with `menuList` property set.
 */
const computedMenuListHeightStyles = (container, selectElement) => {
  if (!(container && selectElement)) return {}

  const containerPaddingTop = container.style.paddingTop || '0px'
  const containerPaddingBottom = container.style.paddingBottom || '0px'

  return {
    menuList: base => {
      const basePaddings = (base.paddingTop || 0) + (base.paddingBottom || 0)
      const spaceLeft =
        container.getBoundingClientRect().bottom -
        selectElement.getBoundingClientRect().bottom -
        basePaddings
      return {
        ...base,
        // containerPaddingTop and containerPaddingBottom can be in `rem`, so
        // let's use calc()
        maxHeight: `calc(${spaceLeft}px - ${containerPaddingTop} - ${containerPaddingBottom})`
      }
    }
  }
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon
        icon={props.selectProps.menuIsOpen ? TopIcon : BottomIcon}
        color="var(--iconTextColor)"
        width="20"
        height="16"
      />
    </components.DropdownIndicator>
  )
}

const reactSelectControl = CustomControl => ({
  innerProps,
  innerRef,
  children
}) => (
  <div {...innerProps} ref={innerRef}>
    {CustomControl}
    <div className={styles['select-control__input']}>{children}</div>
  </div>
)

const Option = ({
  children,
  isSelected,
  isFocused,
  isDisabled,
  innerProps,
  innerRef,
  labelComponent,
  withCheckbox
}) => (
  <div
    {...innerProps}
    ref={innerRef}
    className={classNames(styles['select-option'], {
      [styles['select-option--selected']]: isSelected && !withCheckbox,
      [styles['select-option--focused']]: isFocused,
      [styles['select-option--disabled']]: isDisabled
    })}
  >
    {withCheckbox && (
      <input
        type="checkbox"
        readOnly
        checked={isSelected}
        className={styles['select-option__checkbox']}
      />
    )}
    <span className={styles['select-option__label']}>
      <span className="u-ellipsis">
        {labelComponent ? labelComponent : children}
      </span>
      {labelComponent ? children : false}
    </span>
    {!withCheckbox && (
      <span className={styles['select-option__checkmark']}>
        {isSelected && (
          <Icon
            icon={CheckIcon}
            color="var(--primaryColor)"
            className="u-ph-half"
          />
        )}
      </span>
    )}
  </div>
)

Option.propTypes = {
  withCheckbox: PropTypes.bool,
  labelComponent: PropTypes.node
}

Option.defaultProps = {
  withCheckbox: false
}

const CheckboxOption = ({ ...props }) => <Option {...props} withCheckbox />

CheckboxOption.propTypes = {}

const ActionsOption = ({ actions, ...props }) => (
  <Option {...props} labelComponent={props.children}>
    <span className={styles['select-option__actions']}>
      {actions.map((action, index) => (
        <Icon
          {...action.iconProps}
          key={index}
          icon={action.icon}
          color={
            props.isFocused ? 'var(--iconTextColor)' : 'var(--hintTextColor)'
          }
          className="u-ph-half"
          onClick={e => {
            e.stopPropagation()
            action.onClick(props)
          }}
        />
      ))}
    </span>
  </Option>
)

ActionsOption.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      onClick: PropTypes.func,
      iconProps: PropTypes.object
    })
  )
}

ActionsOption.defaultProps = {
  actions: []
}

// With React, the referenced element is in the current property.
// With Preact, the referenced element is the object
const getNodeFromRef = ref => {
  return (ref && ref.current) || ref
}

const customComponents = {
  Control: ControlDefault,
  DropdownIndicator,
  Option
}

class SelectBox extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.element = null
    this.handleRef = this.handleRef.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen() {
    this.refreshMenuStyle()
    this.setState({
      isOpen: true
    })
  }

  refreshMenuStyle() {
    if (this.props.container && this.controlRef) {
      this.menuStyle = computedMenuListHeightStyles(
        getNodeFromRef(this.props.container),
        this.controlRef
      )
    }
  }

  handleClose() {
    this.setState({ isOpen: false })
  }

  handleRef(ref) {
    const { inputRef } = this.props
    if (ref && ref.select) {
      if (ref.select.controlRef) {
        // Save control ref to use for menu height computation
        this.controlRef = ref.select.controlRef
      }

      if (ref.select.inputRef && typeof inputRef === 'function') {
        inputRef(ref.select.inputRef)
      }
    }
  }

  render() {
    const {
      className,
      components,
      disabled,
      fullwidth,
      styles: reactSelectStyles,
      breakpoints: { isMobile },
      classNamePrefix,
      name,
      ...props
    } = this.props
    const showOverlay = this.state.isOpen && isMobile
    return (
      <ReactSelect
        ref={this.handleRef}
        components={
          components ? { ...customComponents, ...components } : customComponents
        }
        styles={{
          ...customStyles(this.props),
          ...reactSelectStyles,
          ...(this.menuStyle || {})
        }}
        onMenuOpen={this.handleOpen}
        onMenuClose={this.handleClose}
        {...props}
        isDisabled={disabled}
        className={classNames(
          {
            [styles['select__overlay']]: showOverlay,
            [styles['select--autowidth']]: !fullwidth,
            [styles['select--disabled']]: disabled,
            [styles['select--fullwidth']]: fullwidth
          },
          className
        )}
        // react-select temporarily adds className to its innerComponents
        // but this behavior will soon be removed. For the moment, we
        // cancel it by setting it to empty string
        // needsclick is added only on iOS App since fastclik tries to handle
        // the click and catch the event.
        classNamePrefix={
          isIOSApp()
            ? `needsclick ${classNamePrefix ? classNamePrefix : ''}`
            : classNamePrefix
            ? classNamePrefix
            : ''
        }
        selectProps={{ name }}
      />
    )
  }
}

SelectBox.propTypes = {
  container: PropTypes.object,
  components: PropTypes.object,
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  inset: PropTypes.bool,
  name: PropTypes.string,
  inputRef: PropTypes.func,
  size: PropTypes.oneOf(['tiny', 'medium', 'large']),
  styles: PropTypes.object
}

SelectBox.defaultProps = {
  components: {},
  fullwidth: false,
  inset: false,
  size: 'large',
  styles: {}
}

export default withBreakpoints()(SelectBox)
export {
  Option,
  CheckboxOption,
  ActionsOption,
  computedMenuListHeightStyles,
  reactSelectControl,
  components,
  SelectBox
}
