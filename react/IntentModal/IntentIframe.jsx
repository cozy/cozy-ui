/* global cozy */
import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'
import styles from './styles.styl'

const DEFAULT_OPTIONS = {
  // TODO remove `closeable` since it is only there for backward compatibility
  // https://mattermost.cozycloud.cc/test-team/pl/t1iagfhqp3n8mqf3nchp6bxsur
  closeable: false,
  exposeIntentFrameRemoval: true
}

class IntentIframe extends React.Component {
  state = { loading: false }

  componentDidMount () {
    const { action, doctype, options, onComplete } = this.props

    const create = this.props.create || cozy.client.intents.create

    this.setState({ loading: true })
    create(action, doctype, {
        ...DEFAULT_OPTIONS,
        ...options
      })
      .start(this.intentViewer, this.onFrameLoaded)
      .then(result => {
        if (onComplete) {
          onComplete(result)
        }
      })
  }

  onFrameLoaded = () => {
    this.setState({ loading: false })
  }

  render () {
    const { loading } = this.state
    return (
      <div ref={intentViewer => (this.intentViewer = intentViewer)}>
        { loading ? <div className={styles.intentModal__loading}>
          <Spinner size='xxlarge' />
        </div> : null }
      </div>
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
