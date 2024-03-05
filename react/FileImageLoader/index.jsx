import { Component } from 'react'
import PropTypes from 'prop-types'
import { withClient } from 'cozy-client'
import logger from 'cozy-logger'

const PENDING = 'PENDING'
const LOADING_LINK = 'LOADING_LINK'
const LOADING_FALLBACK = 'LOADING_FALLBACK'
const LOADED = 'LOADED'
const FAILED = 'FAILED'
const GET_LINK = 'GET_LINK'

import { checkImageSource } from './checkImageSource'
import { isFileEncrypted } from '../Viewer/helpers'
import { EncryptedContext } from '../Viewer/providers/EncryptedProvider'

export class FileImageLoader extends Component {
  state = {
    src: null
  }
  static contextType = EncryptedContext
  _mounted = false

  componentDidMount() {
    const { client } = this.props

    this._mounted = true
    this.status = PENDING
    this.loadNextSrc()
    this.realtime = client.plugins.realtime
    this.type = 'io.cozy.files.thumbnails'
    this.realtime.subscribe('created', this.type, this.handleCreate)
  }

  componentWillUnmount() {
    this._mounted = false
    if (this.img) {
      this.img.onload = this.img.onerror = null
      this.img.src = ''
    }
    this.realtime &&
      this.realtime.unsubscribe('created', this.type, this.handleCreate)
  }

  /**
   * Reload the link when realtime tell us that the
   * thumbnail is created. By default linkType === small
   */
  handleCreate = doc => {
    const { file, linkType } = this.props
    if (file._id === doc._id && doc.format === linkType) {
      this.loadLink()
    }
  }

  getFileId(file) {
    return file.id || file._id
  }

  loadNextSrc(lastError = null) {
    const { file } = this.props
    if (isFileEncrypted(file)) {
      // No link available for encrypted files
      return
    }
    if (this.status === PENDING) this.getLink()
    else if (this.status === GET_LINK) this.loadLink()
    else if (this.status === LOADING_LINK) this.loadFallback()
    else if (this.status === LOADING_FALLBACK) {
      logger.warn('failed loading thumbnail', lastError)
      this.setState({ status: FAILED })
      this.props.onError(lastError)
    }
  }

  async fetchFileLinks(file) {
    const response = await this.props.client
      .collection('io.cozy.files')
      .get(this.getFileId(file))

    if (!response.data.links) throw new Error('Could not fetch file links')
    return response.data.links
  }

  async getLink() {
    this.status = GET_LINK
    const { file, linkType, client } = this.props

    try {
      const link = file.links ? file.links[linkType] : false

      if (!link) throw new Error(`${linkType} link is not available`)

      const src = client.getStackClient().uri + link
      await checkImageSource(src)
      if (this._mounted) {
        this.status = LOADED
        this.setState({
          src
        })
      }
    } catch (e) {
      this.loadNextSrc(e)
    }
  }

  async loadLink() {
    this.status = LOADING_LINK
    const { file, linkType, client } = this.props

    try {
      const links = await this.fetchFileLinks(file)
      const link = links[linkType]

      if (!link) throw new Error(`${linkType} link is not available`)

      const src = client.getStackClient().uri + link
      await checkImageSource(src)
      if (this._mounted) {
        this.status = LOADED
        this.setState({
          src
        })
      }
    } catch (e) {
      logger.error(e)
      this.loadNextSrc(e)
    }
  }

  async loadFallback() {
    this.status = LOADING_FALLBACK
    const { file, client } = this.props

    try {
      // FileImageLoader can also be used for pdf files, because on mobile a preview image is
      // generated and the pdf is therefore treated as an image.
      // But the fallback allows to display the original file as an image if there is an error
      // during the preview recovery. This principle is not possible with a pdf file.
      if (file.class === 'pdf') {
        throw new Error('No pdf files fallback')
      }
      const src = await client
        .collection('io.cozy.files')
        .getDownloadLinkById(this.getFileId(file), file.name)
      await checkImageSource(src)
      if (this._mounted) {
        this.status = LOADED
        this.setState({
          src
        })
      }
    } catch (e) {
      this.loadNextSrc(e)
    }
  }

  render() {
    const { src } = this.state

    const { render, renderFallback } = this.props
    if (this.context && this.context.url) {
      return render(this.context.url)
    }
    if (src) return render(src)
    else if (renderFallback) return renderFallback()
    else return null
  }
}

FileImageLoader.propTypes = {
  file: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
  linkType: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'icon']),
  onError: PropTypes.func,
  renderFallback: PropTypes.func
}

FileImageLoader.defaultProps = {
  linkType: 'small',
  onError: () => {}
}

export default withClient(FileImageLoader)
