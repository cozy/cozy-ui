import React from 'react'
import PropTypes from 'prop-types'
import { Intents } from 'cozy-interapp'
import { withClient } from 'cozy-client'

import Spinner from '../Spinner'
import styles from './styles.styl'

const DEFAULT_DATA = {
  // TODO remove `closeable` since it is only there for backward compatibility
  // https://mattermost.cozycloud.cc/test-team/pl/t1iagfhqp3n8mqf3nchp6bxsur
  closeable: false,
  exposeIntentFrameRemoval: true
}

class IntentIframe extends React.Component {
  state = { loading: false }

  componentDidMount() {
    const { action, data, type, onCancel, onError, onTerminate } = this.props

    let create
    if (this.props.create) {
      create = this.props.create
    } else {
      const intents = new Intents({ client: this.props.client })
      create = intents.create
    }

    this.setState({ loading: true })
    create(action, type, {
      ...DEFAULT_DATA,
      ...data
    })
      .start(this.intentViewer, this.onFrameLoaded)
      .then(result => {
        result ? onTerminate && onTerminate(result) : onCancel()
      })
      .catch(error => {
        ;(onError && onError(error)) ||
          this.setState({ error: error, loading: false })
      })
  }

  onFrameLoaded = () => {
    this.setState({ loading: false })
  }

  render() {
    const { error, loading } = this.state
    return (
      <div
        ref={intentViewer => (this.intentViewer = intentViewer)}
        className={styles.intentContainer}
        aria-busy={loading}
      >
        {loading && <Spinner size="xxlarge" />}
        {error && (
          <div className={styles.intentContainer__error}>{error.message}</div>
        )}
        {/* intent iframe will be appended here */}
      </div>
    )
  }
}

IntentIframe.propTypes = {
  action: PropTypes.string.isRequired,
  create: PropTypes.func,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  onCancel: PropTypes.func,
  onError: PropTypes.func,
  onTerminate: PropTypes.func.isRequired
}

IntentIframe.defaultProps = {
  data: {}
}

export default withClient(IntentIframe)
