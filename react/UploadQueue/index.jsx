import React, { Component, useState } from 'react'
import cx from 'classnames'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useIntervalWhen } from 'rooks'

import { splitFilename } from 'cozy-client/dist/models/file'

import { withStyles } from '../styles'
import CrossIcon from '../Icons/Cross'
import WarningIcon from '../Icons/Warning'
import CheckIcon from '../Icons/Check'
import { translate, useI18n } from '../providers/I18n'
import withLocales from '../providers/I18n/withLocales'
import Icon from '../Icon'
import Spinner from '../Spinner'
import Typography from '../Typography'
import List from '../List'
import ListItem from '../ListItem'
import ListItemText from '../ListItemText'
import ListItemIcon from '../ListItemIcon'
import { Img } from '../deprecated/Media'
import Button from '../deprecated/Button'

import styles from './styles.styl'
import localeEn from './locales/en.json'
import localeEs from './locales/es.json'
import localeFr from './locales/fr.json'
import { formatLocallyDistanceToNow } from '../providers/I18n/format'

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
  <Typography variant="subtitle1" color="primary">
    {props.t('item.pending')}
  </Typography>
))

export const formatRemainingTime = durationInSec => {
  const later = Date.now() + durationInSec * 1000
  return formatLocallyDistanceToNow(later)
}

// https://date-fns.org/v2.28.0/docs/formatDistanceToNow
const numberOfReferencesForPluralForm = durationInSec =>
  durationInSec < 90 || (durationInSec > 2670 && durationInSec < 5370) ? 1 : 2

const RemainingTime = ({ durationInSec }) => {
  const { t } = useI18n()

  return (
    <Typography
      variant="caption"
      className={cx(styles['upload-queue__progress-caption'], 'u-ellipsis')}
    >
      {t('item.remainingTime', {
        time: formatRemainingTime(durationInSec),
        smart_count: numberOfReferencesForPluralForm(durationInSec)
      })}
    </Typography>
  )
}

const FileLinearProgress = withStyles(theme => ({
  root: {
    borderRadius: theme.shape.borderRadius
  },
  colorPrimary: {
    backgroundColor: theme.palette.background.default
  },
  barColorPrimary: {
    backgroundColor: 'var(--emerald)'
  }
}))(LinearProgress)

const QueueLinearProgress = withStyles({
  root: {
    height: '2px'
  }
})(LinearProgress)

const FileUploadProgress = ({ progress: progressProps }) => {
  const [progress, setProgress] = useState(progressProps)
  useIntervalWhen(
    () => {
      setProgress(progressProps)
    },
    1000,
    true,
    true
  )

  return (
    <div className={styles['upload-queue__upload-progress']}>
      <div className="u-flex-grow-1 u-pr-1">
        <FileLinearProgress
          variant="determinate"
          value={(progress.loaded / progress.total) * 100}
        />
      </div>
      <div className="u-flex-shrink">
        {progress.remainingTime ? (
          <RemainingTime durationInSec={progress.remainingTime} />
        ) : null}
      </div>
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
     * Status came from the Upload Queue, but sometimes we're using
     * manual upload without using the Upload Queue system but we're still
     * using the UI component. When this is the case, the file handles on
     * his own its status.
     */
    const statusToUse = file.status ? file.status : status

    if (statusToUse === LOADING) {
      statusIcon = !progress ? (
        <Spinner className="u-ml-half" color="var(--primaryColor)" />
      ) : null
    } else if (statusToUse === CANCEL) {
      statusIcon = (
        <Icon
          className="u-ml-half"
          icon={CrossIcon}
          color="var(--errorColor)"
        />
      )
    } else if (ERROR_STATUSES.includes(statusToUse)) {
      error = true
      statusIcon = (
        <Icon
          className="u-ml-half"
          icon={WarningIcon}
          color="var(--errorColor)"
        />
      )
    } else if (DONE_STATUSES.includes(statusToUse)) {
      done = true
      statusIcon = (
        <Icon
          className="u-ml-half"
          icon={CheckIcon}
          color="var(--successColor)"
        />
      )
    } else if (statusToUse === PENDING) {
      statusIcon = <Pending />
    }

    return (
      <ListItem
        divider
        data-testid="upload-queue-item"
        className={cx('u-ph-1', {
          [styles['upload-queue-item--done']]: done,
          [styles['upload-queue-item--error']]: error
        })}
      >
        {getMimeTypeIcon ? (
          <ListItemIcon className="u-ta-center">
            <Icon
              icon={getMimeTypeIcon(isDirectory, file.name, file.type)}
              size={32}
              className="u-mr-1"
            />
          </ListItemIcon>
        ) : null}
        <ListItemText disableTypography>
          <div data-testid="upload-queue-item-name" className="u-ellipsis">
            <Typography variant="body1" className="u-ellipsis">
              {filename}
              {extension && (
                <Typography
                  component="span"
                  variant="body1"
                  color="textSecondary"
                  className="u-dib"
                >
                  {extension}
                </Typography>
              )}
            </Typography>
          </div>
          {progress ? <FileUploadProgress progress={progress} /> : null}
        </ListItemText>
        <Img className={styles['item-status']}>{statusIcon}</Img>
      </ListItem>
    )
  }
)

export class UploadQueue extends Component {
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
        data-testid="upload-queue"
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
              <Typography variant="h6" className="u-hide--mob">
                {t('header', { smart_count: queue.length, app: app })}
              </Typography>
              <Typography
                color="primary"
                variant="h6"
                className="u-hide--tablet"
              >
                {t('header_mobile', {
                  done: doneCount,
                  smart_count: queue.length
                })}
              </Typography>
            </div>
          )}
          {doneCount >= queue.length && (
            <div
              data-testid="upload-queue-success"
              className={styles['upload-queue-header-inner']}
            >
              <Typography variant="h6">
                {t('header_done', {
                  done: successCount,
                  smart_count: queue.length
                })}
              </Typography>
              <Button
                subtle
                className="u-mv-0"
                label={t('close')}
                onClick={purgeQueue}
              />
            </div>
          )}
        </h4>
        <QueueLinearProgress
          variant="determinate"
          value={(doneCount / queue.length) * 100}
        />
        <div className={styles['upload-queue-content']}>
          <List className="u-pv-0">
            {queue.map((item, index) => (
              <Item key={index} {...item} getMimeTypeIcon={getMimeTypeIcon} />
            ))}
          </List>
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
