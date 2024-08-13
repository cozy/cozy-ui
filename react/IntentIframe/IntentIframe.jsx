import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

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
    const {
      action,
      data,
      type,
      onCancel,
      onError,
      onTerminate,
      client
    } = this.props

    console.warn(
      'Be carful to use `withBreakpoints()` and not `useBreakpoints()` in intents. See https://github.com/cozy/cozy-ui/issues/1807'
    )

    let create
    if (this.props.create) {
      create = this.props.create
    } else {
      const intents = new Intents({ client })
      create = intents.create
    }

    this.setState({ loading: true })
    create(action, type, {
      ...DEFAULT_DATA,
      ...data
    })
      .start(
        this.intentViewer,
        this.onFrameLoaded,
        this.props.onHideCross,
        this.props.onShowCross
      )
      .then(result => {
        // eslint-disable-next-line promise/always-return
        result ? onTerminate && onTerminate(result) : onCancel()
      })
      .catch(error => {
        onError?.(error)
        this.setState({ error: error, loading: false })
        this.props.iframeProps?.setIsLoading?.(false)
      })
  }

  onFrameLoaded = () => {
    this.setState({ loading: false })
    this.props.iframeProps?.setIsLoading?.(false)
  }

  render() {
    const { iframeProps } = this.props
    const { error, loading } = this.state

    return (
      <div
        ref={intentViewer => (this.intentViewer = intentViewer)}
        className={styles.intentContainer}
        aria-busy={loading}
        {...get(iframeProps, 'wrapperProps')}
      >
        {loading && (
          <Spinner size="xxlarge" {...get(iframeProps, 'spinnerProps')} />
        )}
        {error && (
          <div className={styles.intentContainer__error}>{error.message}</div>
        )}
        {/* intent iframe will be appended here */}
      </div>
    )
  }
}

export const iframeProps = PropTypes.shape({
  wrapperProps: PropTypes.object,
  spinnerProps: PropTypes.object,
  setIsLoading: PropTypes.func
})

IntentIframe.propTypes = {
  action: PropTypes.string.isRequired,
  create: PropTypes.func,
  type: PropTypes.string.isRequired,
  data: PropTypes.object,
  onCancel: PropTypes.func,
  onError: PropTypes.func,
  onTerminate: PropTypes.func.isRequired,
  iframeProps: iframeProps,
  onHideCross: PropTypes.func,
  onShowCross: PropTypes.func
}

IntentIframe.defaultProps = {
  data: {}
}

export default withClient(IntentIframe)
