import React, { useState } from 'react'

import Button from '../../Buttons'
import Empty from '../../Empty'
import Backdrop from '../../Backdrop'
import IntentDialogOpener from '../../IntentDialogOpener'

import IlluGenericNewPage from '../assets/IlluGenericNewPage.svg'
import { withViewerLocales } from '../hoc/withViewerLocales'

import styles from './styles.styl'

const BlankPaperViewer = ({ file, t }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={styles['viewer-noviewer']}>
      <Empty
        icon={<img src={IlluGenericNewPage} />}
        text={t('Viewer.noImage')}
        componentsProps={{
          text: { color: 'inherit' }
        }}
      >
        <IntentDialogOpener
          action="OPEN"
          doctype="io.cozy.files.paper"
          Component={Backdrop}
          invisible={!isLoading}
          isOver
          options={{
            fileId: file._id,
            qualificationLabel: file.metadata?.qualification?.label
          }}
          showCloseButton={false}
          iframeProps={{
            spinnerProps: { className: 'u-m-0', middle: true, color: 'white' },
            setIsLoading
          }}
        >
          <Button className="u-mt-1" label={t('Viewer.complete')} />
        </IntentDialogOpener>
      </Empty>
    </div>
  )
}

export default withViewerLocales(BlankPaperViewer)
