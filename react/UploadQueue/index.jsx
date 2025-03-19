import LinearProgress from '@material-ui/core/LinearProgress'
import cx from 'classnames'
import React, { Component } from 'react'

import Item from './Item'
import localeEn from './locales/en.json'
import localeEs from './locales/es.json'
import localeFr from './locales/fr.json'
import styles from './styles.styl'
import List from '../List'
import Typography from '../Typography'
import Button from '../deprecated/Button'
import { formatLocallyDistanceToNow } from '../providers/I18n/format'
import withLocales from '../providers/I18n/withLocales'
import { withStyles } from '../styles'

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

export const formatRemainingTime = durationInSec => {
  const later = Date.now() + durationInSec * 1000
  return formatLocallyDistanceToNow(later)
}

const QueueLinearProgress = withStyles({
  root: {
    height: '2px'
  }
})(LinearProgress)

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
