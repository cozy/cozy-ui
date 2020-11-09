import React, { Component } from 'react'
import cx from 'classnames'
import formatDistanceToNow from 'date-fns/distance_in_words_to_now'
import { splitFilename } from 'cozy-client/dist/models/file'

import { translate } from '../I18n'
import Icon from '../Icon'
import Spinner from '../Spinner'
import withLocales from '../I18n/withLocales'
import { useI18n } from '../I18n'
import ThresholdBar from '../ThresholdBar'
import { Caption } from '../Text'
import { Media, Bd, Img } from '../Media'
import palette from '../../stylus/settings/palette.json'

import styles from './styles.styl'
import localeEn from './locales/en.json'
import localeEs from './locales/es.json'
import localeFr from './locales/fr.json'

import CrossIcon from 'cozy-ui/transpiled/react/Icons/Cross'
import WarningIcon from 'cozy-ui/transpiled/react/Icons/Warning'
import CheckIcon from 'cozy-ui/transpiled/react/Icons/Check'

const locales = {
  en: localeEn,
  es: localeEs,
  fr: localeFr
}

const CANCEL = 'cancel'
const PENDING = 'pending'
const LOADING = 'loading'
const CREATED = 'created'
const UPDATED = 'updated'
const FAILED = 'failed'
const CONFLICT = 'conflict'
const QUOTA = 'quota'
const NETWORK = 'network'
const DONE_STATUSES = [CREATED, UPDATED]
const ERROR_STATUSES = [CONFLICT, NETWORK, QUOTA, FAILED]

export const uploadStatus = {
  CANCEL,
  PENDING,
  LOADING,
  CREATED,
  UPDATED,
  FAILED,
  CONFLICT,
  QUOTA,
  NETWORK,
  DONE_STATUSES,
  ERROR_STATUSES
}

const Pending = translate()(props => (
  <span className={styles['item-pending']}>{props.t('item.pending')}</span>
))

const formatRemainingTime = durationInSec => {
  const later = Date.now() + durationInSec * 1000
  return formatDistanceToNow(later)
}

const RemainingTime = ({ durationInSec }) => {
  const { t } = useI18n()
  return (
    <Caption
      className={cx(styles['upload-queue__progress-caption'], 'u-ellipsis')}
    >
      {t('item.remainingTime', {
        time: formatRemainingTime(durationInSec)
      })}
    </Caption>
  )
}

const FileUploadProgress = ({ progress }) => {
  return (
    <div className={styles['upload-queue__upload-progress']}>
      <ThresholdBar
        className={styles['upload-queue__threshold-bar']}
        threshold={progress.total}
        value={progress.loaded}
      />
      {progress.remainingTime ? (
        <RemainingTime durationInSec={progress.remainingTime} />
      ) : null}
    </div>
  )
}

const Item = translate()(
  ({ file, status, isDirectory, progress, getMimeTypeIcon }) => {
    const { CANCEL, LOADING, DONE_STATUSES, ERROR_STATUSES } = uploadStatus
    const { filename, extension } = splitFilename(file)
    let statusIcon
    let done = false
    let error = false
    /**
     * Status cames from the Upload Queue, but sometimes we're using
     * manual upload without using the Upload Queue system but we're still
     * using the UI component. When this is the case, the file handles on
     * his own its status.
     */
    const statusToUse = file.status ? file.status : status

    if (statusToUse === LOADING) {
      statusIcon = !progress ? (
        <Spinner className="u-ml-half" color={palette['dodgerBlue']} />
      ) : null
    } else if (statusToUse === CANCEL) {
      statusIcon = (
        <Icon className="u-ml-half" icon={CrossIcon} color={palette['monza']} />
      )
    } else if (ERROR_STATUSES.includes(statusToUse)) {
      error = true
      statusIcon = (
        <Icon
          className="u-ml-half"
          icon={WarningIcon}
          color={palette['monza']}
        />
      )
    } else if (DONE_STATUSES.includes(statusToUse)) {
      done = true
      statusIcon = (
        <Icon
          className="u-ml-half"
          icon={CheckIcon}
          color={palette['emerald']}
        />
      )
    } else if (statusToUse === PENDING) {
      statusIcon = <Pending />
    }

    return (
      <Media
        data-test-id="upload-queue-item"
        className={cx('u-ph-1', styles['upload-queue-item'], {
          [styles['upload-queue-item--done']]: done,
          [styles['upload-queue-item--error']]: error
        })}
      >
        {getMimeTypeIcon ? (
          <Img>
            <Icon
              icon={getMimeTypeIcon(isDirectory, file.name, file.type)}
              size={32}
              className="u-mr-1"
            />
          </Img>
        ) : null}
        <Bd className={styles['item-file']}>
          <div data-test-id="upload-queue-item-name" className="u-ellipsis">
            {filename}
            {extension && (
              <span className={styles['item-ext']}>{extension}</span>
            )}
          </div>
          {progress ? <FileUploadProgress progress={progress} /> : null}
        </Bd>
        <Img className={styles['item-status']}>{statusIcon}</Img>
      </Media>
    )
  }
)

class UploadQueue extends Component {
  state = {
    collapsed: false
  }

  toggleCollapsed = () => {
    this.setState(state => ({ collapsed: !state.collapsed }))
  }

  render() {
    const {
      t,
      queue,
      doneCount,
      successCount,
      purgeQueue,
      popover,
      getMimeTypeIcon,
      app
    } = this.props
    const { collapsed } = this.state
    return (
      <div
        data-test-id="upload-queue"
        className={cx(styles['upload-queue'], {
          [styles['upload-queue--visible']]: queue.length !== 0,
          [styles['upload-queue--collapsed']]: collapsed,
          [styles['upload-queue--popover']]: popover
        })}
      >
        <h4
          className={styles['upload-queue-header']}
          onDoubleClick={this.toggleCollapsed}
        >
          {doneCount < queue.length && (
            <div className={styles['upload-queue-header-inner']}>
              <span className="u-hide--mob">
                {t('header', { smart_count: queue.length, app: app })}
              </span>
              <span className="u-hide--tablet">
                {t('header_mobile', {
                  done: doneCount,
                  total: queue.length
                })}
              </span>
            </div>
          )}
          {doneCount >= queue.length && (
            <div
              data-test-id="upload-queue-success"
              className={styles['upload-queue-header-inner']}
            >
              <span>
                {t('header_done', {
                  done: successCount,
                  total: queue.length
                })}
              </span>
              <button className={cx(styles['btn-close'])} onClick={purgeQueue}>
                {t('close')}
              </button>
            </div>
          )}
        </h4>
        <progress
          className={styles['upload-queue-progress']}
          value={doneCount}
          max={queue.length}
        />
        <div className={styles['upload-queue-content']}>
          <div className={styles['upload-queue-list']}>
            {queue.map((item, index) => (
              <Item key={index} {...item} getMimeTypeIcon={getMimeTypeIcon} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

UploadQueue.defaultProps = {
  /**
   * @type {Boolean}
   * Displays the queue in a popover at the bottom right of the screen
   * Use false to disable
   */
  popover: true
}

export default withLocales(locales)(UploadQueue)
