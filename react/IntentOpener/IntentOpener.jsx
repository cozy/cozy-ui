import React from 'react'
import IntentModal from '../IntentModal'
import PropTypes from 'prop-types'

/**
 * Wrapper that adds an `onClick` handler to its children that opens a modal
 * for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 */
class IntentOpener extends React.Component {
  state = {
    modalOpened: false
  }

  openModal = () => {
    this.setState({
      modalOpened: true
    })
  }

  closeModal = () => {
    this.setState({
      modalOpened: false
    })
  }

  handleComplete = result => {
    this.closeModal()
    if (this.props.onComplete) {
      this.props.onComplete(result)
    }
  }

  handleDismiss = () => {
    this.closeModal()
    if (this.props.onDismiss) {
      this.props.onDismiss()
    }
  }

  render () {
    const { options, action, doctype, children, closable, create, tag } = this.props
    const { modalOpened } = this.state

    const Tag = tag // React needs uppercase element names

    const elements = [
      React.cloneElement(children, { key: 'opener', onClick: this.openModal })
    ]

    if (modalOpened) {
      elements.push(
        <IntentModal
          key='intent-modal'
          closable={closable}
          overflowHidden
          dismissAction={this.handleDismiss}
          action={action}
          doctype={doctype}
          options={options}
          onComplete={this.handleComplete}
          create={create}
        />
      )
    }


    return <Tag>{ elements }</Tag>
  }
}

IntentOpener.propTypes = {
  /** Element on which the onClick handler will be added */
  children: PropTypes.element.isRequired,
  /** What should happen when the intent has completed */
  onComplete: PropTypes.func.isRequired,
  /** What should happen when the modal is dimissed */
  onDismiss: PropTypes.func.isRequired,
  /** Action you want to execute */
  action: PropTypes.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: PropTypes.string.isRequired
}

IntentOpener.defaultProps = {
  tag: 'span',
  closable: true,
}

export default IntentOpener
