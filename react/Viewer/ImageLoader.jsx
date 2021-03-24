import React from 'react'
import PropTypes from 'prop-types'
import { withClient } from 'cozy-client'
import logger from 'cozy-logger'

const TTL = 10000

const PENDING = 'PENDING'
const LOADING_LINK = 'LOADING_LINK'
const LOADING_FALLBACK = 'LOADING_FALLBACK'
const LOADED = 'LOADED'
const FAILED = 'FAILED'

export class ImageLoader extends React.Component {
  state = {
    status: PENDING,
    src: null
  }

  _mounted = false

  componentDidMount() {
    this._mounted = true
    this.loadNextSrc()
  }

  componentWillUnmount() {
    this._mounted = false
    clearTimeout(this.timeout)
    if (this.img) {
      this.img.onload = this.img.onerror = null
      this.img.src = ''
    }
  }

  getFileId(file) {
    return file.id || file._id
  }

  loadNextSrc(lastError = null) {
    const { status } = this.state

    if (status === PENDING) this.loadLink()
    else if (status === LOADING_LINK) this.loadFallback()
    else if (status === LOADING_FALLBACK) {
      logger.warn('failed loading thumbnail', lastError)
      this.setState({ status: FAILED })
      this.props.onError(lastError)
    }
  }

  checkImageSource(src) {
    const cleanImageLoader = () => {
      clearTimeout(this.timeout)
      this.img.onload = this.img.onerror = null
      this.img.src = ''
      this.img = null
    }

    return new Promise((resolve, reject) => {
      this.img = new Image()
      this.img.onload = resolve
      this.img.onerror = reject
      this.img.src = src
      this.timeout = setTimeout(
        () => reject(new Error('Loading image took too long')),
        TTL
      )
    }).then(cleanImageLoader, cleanImageLoader)
  }

  async getFileLinks(file) {
    if (file.links) return file.links
    else {
      const response = await this.props.client
        .collection('io.cozy.files')
        .get(this.getFileId(file))
      if (!response.data.links) throw new Error('Could not fetch file links')
      return response.data.links
    }
  }

  async loadLink() {
    this.setState({ status: LOADING_LINK })
    const { file, linkType, client } = this.props

    try {
      const links = await this.getFileLinks(file, linkType)
      const link = links[linkType]

      if (!link) throw new Error(`${linkType} link is not available`)

      const src = client.getStackClient().uri + link
      await this.checkImageSource(src)
      if (this._mounted) {
        this.setState({
          status: LOADED,
          src
        })
      }
    } catch (e) {
      logger.error(e)
      this.loadNextSrc(e)
    }
  }

  async loadFallback() {
    this.setState({ status: LOADING_FALLBACK })
    const { file, client } = this.props

    try {
      // ImageLoader can also be used for pdf files, because on mobile a preview image is
      // generated and the pdf is therefore treated as an image.
      // But the fallback allows to display the original file as an image if there is an error
      // during the preview recovery. This principle is not possible with a pdf file.
      if (file.class === 'pdf') {
        throw new Error('No pdf files fallback')
      }

      const src = await client
        .collection('io.cozy.files')
        .getDownloadLinkById(this.getFileId(file), file.name)

      await this.checkImageSource(src)
      if (this._mounted) {
        this.setState({
          status: LOADED,
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

    if (src) return render(src)
    else if (renderFallback) return renderFallback()
    else return null
  }
}

ImageLoader.propTypes = {
  file: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired,
  linkType: PropTypes.oneOf(['small', 'medium', 'large', 'preview']),
  onError: PropTypes.func,
  renderFallback: PropTypes.func
}

ImageLoader.defaultProps = {
  linkType: 'small',
  onError: () => {}
}

export default withClient(ImageLoader)
