import React from 'react'
import PropTypes from 'prop-types'
import ContactsListModal from '../ContactsListModal'
import styles from './styles.styl'
import cx from 'classnames'
import { Contact } from 'cozy-doctypes'

const SelectControl = props => {
  const { className, children, ...rest } = props

  return (
    <button
      type="button"
      className={cx(styles.SelectControl, className)}
      {...rest}
    >
      {children}
    </button>
  )
}

class ContactPicker extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      opened: this.props.initialOpen
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this.setState({ opened: true })
  }

  close() {
    this.setState({ opened: false })
  }

  render() {
    const {
      placeholder,
      onChange,
      value,
      listPlaceholder,
      listEmptyMessage,
      addContactLabel,
      ...rest
    } = this.props
    const { opened } = this.state

    const handleChange = contact => {
      onChange(contact)
    }

    return (
      <>
        <SelectControl {...rest} onClick={this.open}>
          {value ? Contact.getDisplayName(value) : placeholder}
        </SelectControl>
        {opened && (
          <ContactsListModal
            dismissAction={this.close}
            onItemClick={handleChange}
            placeholder={listPlaceholder}
            emptyMessage={listEmptyMessage}
            addContactLabel={addContactLabel}
          />
        )}
      </>
    )
  }
}

ContactPicker.defaultProps = {
  initialOpen: false
}

ContactPicker.propTypes = {
  initialOpen: PropTypes.bool
}

export default ContactPicker
