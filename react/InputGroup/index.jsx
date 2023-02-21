import React, { Component } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './styles.styl'

class InputGroup extends Component {
  constructor(props) {
    super(props)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.state = {
      focused: false
    }
  }

  handleFocus() {
    this.setState({ focused: true })
  }

  handleBlur() {
    this.setState({ focused: false })
  }

  render() {
    const {
      children,
      prepend,
      append,
      error,
      fullwidth,
      className
    } = this.props
    const { focused } = this.state
    return (
      <div
        className={cx(
          styles['c-inputgroup'],
          {
            [styles['c-inputgroup--error']]: error,
            [styles['c-inputgroup--fullwidth']]: fullwidth,
            [styles['c-inputgroup--focus']]: focused
          },
          className
        )}
      >
        {prepend && (
          <div className={styles['c-inputgroup-side']}>{prepend}</div>
        )}
        <div className={styles['c-inputgroup-main']}>{children}</div>
        {append && <div className={styles['c-inputgroup-side']}>{append}</div>}
      </div>
    )
  }
}

InputGroup.propTypes = {
  prepend: PropTypes.object,
  append: PropTypes.object,
  error: PropTypes.bool,
  fullwidth: PropTypes.bool,
  className: PropTypes.string
}

InputGroup.defaultProps = {
  error: false,
  fullwidth: false
}

InputGroup.Unit = ({ children }) => (
  <span className={styles['c-inputgroup-unit']}>{children}</span>
)

export default InputGroup
