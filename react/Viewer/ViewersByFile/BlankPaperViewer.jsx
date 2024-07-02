import React from 'react'

import { useClient } from 'cozy-client'

import Button from '../../Buttons'
import Empty from '../../Empty'
import IntentDialogOpener from '../../IntentDialogOpener'

import IlluGenericNewPage from '../assets/IlluGenericNewPage.svg'
import { withViewerLocales } from '../hoc/withViewerLocales'

import styles from './styles.styl'
import { useBreakpoints } from '../../providers/Breakpoints'

const BlankPaperViewer = ({ file, t }) => {
  const client = useClient()
  const { isMobile } = useBreakpoints()

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
          options={{
            fileId: file._id,
            qualificationLabel: file.metadata.qualification.label
          }}
          // classes={{ paper: 'u-h-2 u-mih-5' }}
          // classes={{ paper: 'u-h-100' }}
          // create={client.intents.create}
          // fullScreen={isMobile}
          // fullScreen
          onlyBackdrop
          showCloseButton={false}
          // fullWidth
          // maxWidth="md"
          iframeProps={{
            spinnerProps: { className: 'u-m-0', middle: true, color: 'white' }
          }}
          onComplete={res =>
            console.info('intent has completed ! ' + JSON.stringify(res))
          }
          onDismiss={() => console.info('intent has been dismissed !')}
        >
          <Button className="u-mt-1" label={t('Viewer.complete')} />
        </IntentDialogOpener>
      </Empty>
    </div>
  )
}

export default withViewerLocales(BlankPaperViewer)
