import React from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withClient } from 'cozy-client'
import Spinner from '../Spinner'
import withFileUrl from './withFileUrl'
import styles from './styles.styl'
import NoViewer from './NoViewer'
import { FileDoctype } from '../proptypes'

const MarkdownRenderer = ({ text }) => (
  <ReactMarkdown
    className={cx(styles['viewer-textviewer-content'], 'u-p-1')}
    source={text}
  />
)

const PlainTextRenderer = ({ text }) => (
  <pre
    className={cx(styles['viewer-textviewer-content'], 'u-mh-auto', 'u-mv-2')}
  >
    {text}
  </pre>
)

const Loader = () => (
  <div className={styles['viewer-textviewer']}>
    <Spinner size="xxlarge" middle noMargin color="white" />
  </div>
)

class TextViewer extends React.Component {
  state = {
    text: '',
    isMarkdown: false,
    loading: true,
    error: null
  }
  _mounted = false

  componentDidMount() {
    this._mounted = true
    this.loadFile()
  }

  componentWillUnmount() {
    this._mounted = false
  }

  async loadFile() {
    const { url, file } = this.props
    try {
      const parsedURL = new URL(url)
      const client = this.props.client.getClient()
      const response = await client.fetch('GET', parsedURL.pathname)
      const text = await response.text()
      const isMarkdown = file.mime === 'text/markdown' || /.md$/.test(file.name)
      if (this._mounted) {
        this.setState({
          text,
          isMarkdown,
          loading: false
        })
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error)
      if (this._mounted) {
        this.setState({
          loading: false,
          error
        })
      }
    }
  }

  render() {
    const { loading, error, text, isMarkdown } = this.state
    const { file, renderFallbackExtraContent } = this.props

    if (loading) return <Loader />
    else if (error)
      return (
        <NoViewer
          file={file}
          renderFallbackExtraContent={renderFallbackExtraContent}
        />
      )
    else
      return (
        <div className={styles['viewer-textviewer']}>
          <h2 className={cx(styles['viewer-filename'], 'u-mt-3', 'u-mb-1')}>
            {file.name}
          </h2>
          {isMarkdown ? (
            <MarkdownRenderer text={text} />
          ) : (
            <PlainTextRenderer text={text} />
          )}
        </div>
      )
  }
}

TextViewer.propTypes = {
  client: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  file: FileDoctype.isRequired,
  renderFallbackExtraContent: PropTypes.func
}

export default withFileUrl(withClient(TextViewer))
