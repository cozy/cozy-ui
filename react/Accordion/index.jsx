import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Icon from '../Icon'
import styles from './styles.styl'

class AccordionItem extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
  }

  render() {
    const { children, label, className } = this.props

    const { selected } = this.state

    const removeSpaceCharacters = str => str.replace(/\s+/g, '')

    const bodyName = removeSpaceCharacters(label)

    return (
      <div className={cx(styles['c-accordion-item'], className)}>
        <div
          className={cx(
            styles['c-accordion-title'],
            {
              [styles['is-active']]: selected
            },
            className
          )}
          aria-selected={selected}
          aria-controls={bodyName}
          role="tab"
          tabIndex="0"
          onClick={() => this.toggleSelection()}
        >
          <Icon icon="forward" />
          {label}
        </div>
        <div
          className={cx(
            styles['c-accordion-body'],
            {
              [styles['is-active']]: selected
            },
            className
          )}
          aria-hidden={!selected}
          aria-labelledby={bodyName}
          role="tabpanel"
        >
          {children}
        </div>
      </div>
    )
  }

  toggleSelection = () => {
    this.setState(previousState => ({ selected: !previousState.selected }))
  }
}

class Accordion extends Component {
  render() {
    const { children, className } = this.props
    return (
      <div className={cx(styles['c-accordion'], className)}>{children}</div>
    )
  }
}

Accordion.propTypes = {
  className: PropTypes.string
}

AccordionItem.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string
}

Object.assign(Accordion, { AccordionItem })

export default Accordion

export { AccordionItem }
