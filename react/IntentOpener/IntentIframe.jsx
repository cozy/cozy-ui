/* global cozy */
import React from 'react'
import PropTypes from 'prop-types'

class IntentIframe extends React.Component {
  componentDidMount () {
    const { action, doctype, options, onComplete } = this.props

    const create = this.props.create || cozy.client.intents.create

    create(action, doctype, {
        exposeIntentFrameRemoval: true,
        ...options
      })
      .start(this.intentViewer)
      .then(result => {
        if (this.props.onComplete) {
          this.props.onComplete(result)
        }
      })
  }

  render () {
    return (
      <div ref={intentViewer => (this.intentViewer = intentViewer)} />
    )
  }
}

IntentIframe.propTypes = {
  action: PropTypes.string.isRequired,
  doctype: PropTypes.string.isRequired,
  options: PropTypes.object,
  onComplete: PropTypes.func
}

IntentIframe.defaultProps = {
  options: {}
}

export default IntentIframe
