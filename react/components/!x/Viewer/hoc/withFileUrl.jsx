import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ViewerSpinner from '../components/ViewerSpinner'
import NoNetworkViewer from '../ViewersByFile/NoNetworkViewer'
import { isFileEncrypted } from '../helpers'

const TTL = 6000

const LOADING = 'LOADING'
const LOADED = 'LOADED'
const FAILED = 'FAILED'

const withFileUrl = BaseComponent =>
  class withFileUrlClass extends Component {
    state = {
      status: LOADING,
      downloadUrl: null
    }
    static contextTypes = {
      client: PropTypes.object.isRequired
    }
    UNSAFE_componentWillMount() {
      this.loadDownloadUrl()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      if (
        nextProps.file.id !== this.props.file.id ||
        nextProps.url !== this.props.url
      ) {
        this.reset()
      }
    }

    componentDidUpdate() {
      if (this.state.status === LOADING && !this.timeout) {
        this.loadDownloadUrl()
      }
    }

    async loadDownloadUrl() {
      const { file, url } = this.props
      this.timeout = setTimeout(
        () => this.setState(state => ({ ...state, status: FAILED })),
        TTL
      )
      try {
        if (isFileEncrypted(file)) {
          // The download link cannot be provided by the stack if the file is encrypted
          if (url) {
            this.clearTimeout()
            this.setState({ downloadUrl: url, status: LOADED })
          }
          return
        }
        const downloadUrl = await this.getDownloadLink(file)
        this.clearTimeout()
        this.setState({ downloadUrl, status: LOADED })
      } catch (err) {
        this.clearTimeout()
        this.setState(state => ({ ...state, status: FAILED }))
      }
    }

    getDownloadLink(file) {
      return this.context.client
        .collection('io.cozy.files')
        .getDownloadLinkById(file._id, file.name)
    }

    clearTimeout() {
      clearTimeout(this.timeout)
      this.timeout = null
    }

    reset = () => {
      this.clearTimeout()
      this.setState({ status: LOADING, downloadUrl: null })
    }

    render() {
      if (this.state.status === LOADING) {
        return <ViewerSpinner />
      }
      if (this.state.status === FAILED) {
        return <NoNetworkViewer onReload={this.reset} />
      }
      return <BaseComponent {...this.props} url={this.state.downloadUrl} />
    }
  }

export default withFileUrl
