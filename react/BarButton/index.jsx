import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.styl'

import Icon from '../Icon'

class MaybeLink extends PureComponent {
  render() {
    const { children, href, ...restProps } = this.props
    return href ? (
      <a href={href} {...restProps}>
        {children}
      </a>
    ) : (
      <div {...restProps}>{children}</div>
    )
  }
}

MaybeLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func
}

export class BarButton extends PureComponent {
  render() {
    const { disabled, icon, href, onClick } = this.props
    return (
      <MaybeLink
        className={styles['c-bar-btn']}
        href={!disabled && href}
        onClick={!disabled && onClick}
      >
        <Icon icon={icon} className={disabled ? 'u-silver' : 'u-coolGrey'} />
      </MaybeLink>
    )
  }
}

BarButton.propTypes = {
  /**
   * Renders the component using a lighter grey color.
   */
  disabled: PropTypes.bool,
  /**
   * Renders the component using a anchor tag
   */
  href: PropTypes.string,
  /**
   * Used to render the internal `<Icon />` component.
   */
  icon: Icon.propTypes.icon,
  /**
   * Click event handler on the component.
   */
  onClick: PropTypes.func
}

export default BarButton
