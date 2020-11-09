import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash/uniqueId'
import cx from 'classnames'
import Icon from '../Icon'
import styles from './styles.styl'

import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'

class AccordionItem extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: false }
    this.headingID = uniqueId('accordion_header_')
    this.contentID = uniqueId('accordion_content_')
  }

  render() {
    const { children, label, className } = this.props

    const { headingID, contentID } = this

    const { selected } = this.state

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
          role="heading"
          aria-level="3"
          onClick={() => this.toggleSelection()}
        >
          <div
            id={headingID}
            role="button"
            aria-expanded={selected}
            aria-controls={contentID}
          >
            <Icon icon={RightIcon} />
            {label}
          </div>
        </div>
        <div
          className={cx(
            styles['c-accordion-body'],
            {
              [styles['is-active']]: selected
            },
            className
          )}
          id={contentID}
          role="region"
          aria-labelledby={headingID}
          aria-hidden={!selected}
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
