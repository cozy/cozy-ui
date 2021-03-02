import React, { useState, useEffect, useRef } from 'react'
import has from 'lodash/get'

import { useClient } from 'cozy-client'
import { openFileWith } from 'cozy-client/dist/models/fsnative'
import { isMobileApp } from 'cozy-device-helper'

import Alerter from '../Alerter'
import Spinner from '../Spinner'
import Button from '../Button'

import { withViewerLocales } from './withViewerLocales'
import DownloadButton from './NoViewer/DownloadButton'
import ImageLoader from './ImageLoader'
import NoViewer from './NoViewer'
import NoNetworkViewer from './NoNetworkViewer'

import styles from './styles.styl'

export const PdfMobileViewer = ({ file, t, gestures }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)

  const client = useClient()

  const reload = () => {
    setLoading(true)
    setError(false)
  }

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
  }, [gestures])

  if (error) {
    return <NoNetworkViewer onReload={reload} />
  }

  if (!has(file, 'links.preview')) {
    return (
      <NoViewer
        file={file}
        renderFallbackExtraContent={
          isMobileApp()
            ? file => (
                <Button
                  className={styles['viewer-noviewer-download']}
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
        <ImageLoader
          file={file}
          size="preview"
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
