import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Document, Page } from 'react-pdf'
import cx from 'classnames'
import throttle from 'lodash/throttle'
import flow from 'lodash/flow'

import ViewerSpinner from '../components/ViewerSpinner'
import { withViewerLocales } from '../hoc/withViewerLocales'
import withFileUrl from '../hoc/withFileUrl'
import ToolbarButton from '../components/PdfToolbarButton'
import NoViewer from '../NoViewer'

import styles from './styles.styl'

export const MIN_SCALE = 0.25
export const MAX_SCALE = 3
export const MAX_PAGES = 3
const KEY_CODE_UP = 38
const KEY_CODE_DOWN = 40

export class PdfJsViewer extends Component {
  state = {
    totalPages: 1,
    scale: 1,
    currentPage: 1,
    loaded: false,
    errored: false,
    width: null,
    renderAllPages: false
  }

  componentDidMount() {
    this.setWrapperSize()
    this.resizeListener = throttle(this.setWrapperSize, 500)
    window.addEventListener('resize', this.resizeListener)
    document.addEventListener('keyup', this.onKeyUp, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener)
    document.removeEventListener('keyup', this.onKeyUp, false)
  }

  onKeyUp = e => {
    if (e.keyCode === KEY_CODE_UP) this.previousPage()
    else if (e.keyCode === KEY_CODE_DOWN) this.nextPage()
  }

  toggleGestures(enable) {
    if (!this.props.gestures) return
    this.props.gestures.get('swipe').set({ enable })
    this.props.gestures.get('pan').set({ enable })
  }

  setWrapperSize = () => {
    const width = this.wrapper
      ? this.wrapper.getBoundingClientRect().width
      : null
    this.setState({ width })
  }

  onLoadSuccess = ({ numPages }) => {
    this.setState({
      totalPages: numPages,
      renderAllPages: numPages <= MAX_PAGES,
      loaded: true
    })
  }

  onLoadError = error => {
    // eslint-disable-next-line no-console
    console.warn(error)
    this.setState({
      errored: true
    })
  }

  nextPage = () => {
    this.setState(state => ({
      currentPage: Math.min(state.currentPage + 1, state.totalPages)
    }))
  }

  previousPage = () => {
    this.setState(state => ({
      currentPage: Math.max(state.currentPage - 1, 1)
    }))
  }

  scaleUp = () => {
    this.setState(state => {
      const previousScale = state.scale
      const scale = Math.min(previousScale + 0.25, MAX_SCALE)
      if (scale > 1 && previousScale <= 1) this.toggleGestures(false)
      return {
        scale
      }
    })
  }

  scaleDown = () => {
    this.setState(state => {
      const previousScale = state.scale
      const scale = Math.max(previousScale - 0.25, MIN_SCALE)
      if (scale <= 1 && previousScale > 1) this.toggleGestures(true)
      return {
        scale
      }
    })
  }

  render() {
    const { url, file, renderFallbackExtraContent, t } = this.props
    const {
      loaded,
      errored,
      totalPages,
      currentPage,
      scale,
      width,
      renderAllPages
    } = this.state
    if (errored)
      return (
        <NoViewer
          file={file}
          renderFallbackExtraContent={renderFallbackExtraContent}
        />
      )
    const pageWidth = width ? width * scale : null // newer versions of react-pdf do that automatically

    return (
      <div
        className={styles['viewer-pdfviewer']}
        ref={ref => (this.wrapper = ref)}
      >
        <Document
          file={url}
          onLoadSuccess={this.onLoadSuccess}
          onLoadError={this.onLoadError}
          className={styles['viewer-pdfviewer-pdf']}
          loading={<ViewerSpinner />}
        >
          {renderAllPages ? (
            [...Array(totalPages)].map((_, page) => (
              <Page
                key={page}
                pageNumber={page + 1}
                width={pageWidth}
                renderAnnotations={false}
                className={cx('u-mv-1', styles['viewer-pdfviewer-page'])}
              />
            ))
          ) : (
            <Page
              pageNumber={currentPage}
              width={pageWidth}
              renderAnnotations={false}
              className={styles['viewer-pdfviewer-page']}
            />
          )}
        </Document>
        {loaded && (
          <div className={cx(styles['viewer-pdfviewer-toolbar'], 'u-p-half')}>
            {!renderAllPages && (
              <span className="u-mh-half">
                <ToolbarButton
                  icon="top"
                  onClick={this.previousPage}
                  disabled={currentPage === 1}
                  label={t('Viewer.previous')}
                />
                {currentPage}/{totalPages}
                <ToolbarButton
                  icon="bottom"
                  onClick={this.nextPage}
                  disabled={currentPage === totalPages}
                  label={t('Viewer.next')}
                />
              </span>
            )}

            <span className="u-mh-half">
              <ToolbarButton
                icon="dash"
                onClick={this.scaleDown}
                disabled={scale === MIN_SCALE}
                label={t('Viewer.scaledown')}
              />
              <ToolbarButton
                icon="plus"
                onClick={this.scaleUp}
                disabled={scale === MAX_SCALE}
                label={t('Viewer.scaleup')}
              />
            </span>
          </div>
        )}
      </div>
    )
  }
}

PdfJsViewer.propTypes = {
  url: PropTypes.string.isRequired,
  gestures: PropTypes.object,
  renderFallbackExtraContent: PropTypes.func
}

export default flow(
  withFileUrl,
  withViewerLocales
)(PdfJsViewer)
