import React, { useState, useEffect, useRef } from 'react'

import { useClient } from 'cozy-client'
import { openFileWith } from 'cozy-client/dist/models/fsnative'
import { isMobileApp } from 'cozy-device-helper'

import Alerter from '../../deprecated/Alerter'
import Spinner from '../../Spinner'
import Button from '../../deprecated/Button'
import FileImageLoader from '../../FileImageLoader'

import { withViewerLocales } from '../hoc/withViewerLocales'
import DownloadButton from '../NoViewer/DownloadButton'
import NoViewer from '../NoViewer'

import styles from './styles.styl'

export const PdfMobileViewer = ({ file, url, t, gestures }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)

  const client = useClient()

  const onImageError = () => {
    setLoading(false)
    setError(true)
  }

  const onImageLoad = () => {
    setLoading(false)
  }

  const onFileOpen = async file => {
    try {
      await openFileWith(client, file)
    } catch (error) {
      Alerter.info(`Viewer.error.${error}`, { fileMime: file.mime })
    }
  }

  const handleOnClick = file => {
    !isMobileApp() && client.collection('io.cozy.files').download(file)
  }

  useEffect(() => {
    if (gestures && isMobileApp()) {
      gestures.get('pinch').set({ enable: true })
      gestures.on('tap doubletap pinchend', e => {
        if (e.target === imgRef.current) {
          onFileOpen(file)
        }
      })

      return () => {
        gestures.off('tap doubletap pinchend')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gestures])

  if (error) {
    return (
      <NoViewer
        file={file}
        renderFallbackExtraContent={
          isMobileApp()
            ? file => (
                <Button
                  onClick={() => onFileOpen(file)}
                  label={t('Viewer.openWith')}
                />
              )
            : file => <DownloadButton file={file} />
        }
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
              onClick={() => handleOnClick(file)}
            />
          )}
        />
      )}
    </div>
  )
}

export default withViewerLocales(PdfMobileViewer)
