import PropTypes from 'prop-types'
import React, { useState, useEffect, useRef, useCallback } from 'react'

import { useClient } from 'cozy-client'
import { downloadFile } from 'cozy-client/dist/models/file'
import { useWebviewIntent } from 'cozy-intent'

import styles from './styles.styl'
import FileImageLoader from '../../FileImageLoader'
import Spinner from '../../Spinner'
import { FileDoctype } from '../../proptypes'
import { useAlert } from '../../providers/Alert'
import NoViewer from '../NoViewer'
import DownloadButton from '../NoViewer/DownloadButton'
import { withViewerLocales } from '../hoc/withViewerLocales'

export const PdfMobileViewer = ({ file, url, t, gestures }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)
  const { showAlert } = useAlert()

  const client = useClient()
  const webviewIntent = useWebviewIntent()

  const onImageError = () => {
    setLoading(false)
    setError(true)
  }

  const onImageLoad = () => {
    setLoading(false)
  }

  const handleOnClick = useCallback(
    async file => {
      try {
        await downloadFile({ client, file, webviewIntent })
      } catch (error) {
        showAlert({
          message: t('Viewer.error.generic'),
          severity: 'error',
          variant: 'filled',
          icon: false
        })
      }
    },
    [client, showAlert, t, webviewIntent]
  )

  useEffect(() => {
    if (gestures) {
      gestures.get('pinch').set({ enable: true })
      gestures.on('pinchend tap', evt => {
        if (
          (evt.type === 'pinchend' || evt.tapCount === 1) &&
          evt.target === imgRef.current
        ) {
          handleOnClick(file)
        }
      })

      return () => {
        gestures.off('pinchend tap')
      }
    }
  }, [client, gestures, file, handleOnClick])

  if (error) {
    return (
      <NoViewer
        file={file}
        renderFallbackExtraContent={file => <DownloadButton file={file} />}
      />
    )
  }

  return (
    <div className={styles['viewer-pdfMobile']}>
      {loading && <Spinner size="xxlarge" middle noMargin />}
      {file && (
        <FileImageLoader
          file={file}
          url={url}
          linkType="medium"
          onError={onImageError}
          key={file.id}
          render={src => (
            <img
              ref={imgRef}
              className={styles['viewer-pdfMobile--image']}
              alt={file.name}
              src={src}
              onLoad={onImageLoad}
            />
          )}
        />
      )}
    </div>
  )
}

PdfMobileViewer.prototype = {
  file: FileDoctype.isRequired,
  url: PropTypes.string,
  gestures: PropTypes.object
}

export default withViewerLocales(PdfMobileViewer)
