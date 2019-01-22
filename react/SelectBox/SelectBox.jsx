import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactSelect, { components } from 'react-select'

import styles from './styles.styl'
import Icon from '../Icon'
import { dodgerBlue, silver, coolGrey } from '../palette'
import withBreakpoints from '../helpers/withBreakpoints'
import classNames from 'classnames'

const heights = {
  tiny: '2rem',
  medium: '2.5rem',
  large: '3rem'
}

const customStyles = props => ({
  control: (base, state) => ({
    ...base,
    backgroundColor: 'white',
    border: state.isFocused
      ? `.0625rem solid ${dodgerBlue}`
      : `.0625rem solid ${silver}`,
    ':hover': {
      borderColor: coolGrey
    },
    borderRadius: '.1875rem',
    boxShadow: 'unset',
    height: heights[props.size],
    minHeight: heights[props.size]
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
    color: 'black'
  }),
  menu: base => ({
    ...base,
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
        icon={props.selectProps.menuIsOpen ? 'top' : 'bottom'}
        color={coolGrey}
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

export const withPrefix = (reactSelectCx, className) => {
  // react-select implement a classnames function https://git.io/fhT8S
  // it's not the same as classnames library (https://www.npmjs.com/package/classnames)
  // 1st parameter is bound by react-select with prefix https://git.io/fhkIj
  // 2nd parameter is cssKey. We don't need it so it's set to null
  // 3rd parameter is used to add prefix but we don't want to stick with
  //   webpack className so we add space (' ') in front of it
  const classNameWithPrefix = reactSelectCx(null, { [` ${className}`]: true })

  // When we don't use classNamePrefix cx return '' so we verify to send
  // className
  return classNameWithPrefix === '' ? className : classNameWithPrefix
}

const Option = ({
  children,
  isSelected,
  isFocused,
  isDisabled,
  innerProps,
  innerRef,
  labelComponent,
  cx,
  withCheckbox
}) => (
  <div
    {...innerProps}
    ref={innerRef}
    className={withPrefix(
      cx,
      classNames(styles['select-option'], {
        [styles['select-option--selected']]: isSelected && !withCheckbox,
        [styles['select-option--focused']]: isFocused,
        [styles['select-option--disabled']]: isDisabled
      })
    )}
  >
    {withCheckbox && (
      <input
        type="checkbox"
        readOnly
        checked={isSelected}
        className={withPrefix(cx, styles['select-option__checkbox'])}
      />
    )}
    <span className={withPrefix(cx, styles['select-option__label'])}>
      <span className={withPrefix(cx, 'u-ellipsis')}>
        {labelComponent ? labelComponent : children}
      </span>
      {labelComponent ? children : false}
    </span>
    {!withCheckbox && (
      <span className={withPrefix(cx, styles['select-option__checkmark'])}>
        {isSelected && (
          <Icon
            icon="check-circleless"
            color={dodgerBlue}
            className={withPrefix(cx, 'u-ph-half')}
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
    <span className={withPrefix(props.cx, styles['select-option__actions'])}>
      {actions.map((action, index) => (
        <Icon
          key={index}
          icon={action.icon}
          color={props.isFocused ? coolGrey : silver}
          className={withPrefix(props.cx, 'u-ph-half')}
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
      onClick: PropTypes.func
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
    if (ref && ref.select && ref.select.controlRef) {
      // Save control ref to use for menu height computation
      this.controlRef = ref.select.controlRef
    }
  }

  render() {
    const {
      className,
      components,
      fullwidth,
      styles: reactSelectStyles,
      breakpoints: { isMobile },
      classNamePrefix,
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
        className={classNames(
          {
            [styles['select__overlay']]: showOverlay,
            [styles['select--autowidth']]: !fullwidth,
            [styles['select--fullwidth']]: fullwidth
          },
          className
        )}
        // react-select temporarily adds className to its innerComponents
        // but this behavior will soon be removed. For the moment, we
        // cancel it by setting it to empty string
        classNamePrefix={classNamePrefix || ''}
      />
    )
  }
}

SelectBox.propTypes = {
  container: PropTypes.object,
  components: PropTypes.object,
  fullwidth: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'medium', 'large']),
  styles: PropTypes.object
}

SelectBox.defaultProps = {
  components: {},
  fullwidth: false,
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
  components
}
