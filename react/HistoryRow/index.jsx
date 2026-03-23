import PropTypes from 'prop-types'
import React from 'react'

import styles from './styles.styl'
import Avatar from '../Avatar'
import Icon from '../Icon'
import DownloadIcon from '../Icons/Download'
import FileIcon from '../Icons/File'
import Typography from '../Typography'

/**
 *
 * This component display a timeline of file's version
 */
const HistoryRow = ({
  style,
  primaryText,
  secondaryText,
  tag,
  downloadLink,
  ...rest
}) => {
  return (
    <div className={styles.HistoryRowMedia} style={style} {...rest}>
      <div className="u-media u-media-grow u-row-m">
        <div className={styles.HistoryRowCircleWrapper}>
          <div className={styles.HistoryRowMediaImg}>
            <Avatar size={tag ? 's' : 'xs'} className={styles.HistoryRowCircle}>
              {tag && <Icon icon={FileIcon} color="var(--primaryTextColor)" />}
            </Avatar>
          </div>
        </div>
        <div className="u-media u-media-grow u-stack-xs u-row-m">
          <div className={styles.HistoryRowMediaBd}>
            <Typography variant="h6">{primaryText}</Typography>
            <Typography gutterBottom variant="h6">
              {tag}
            </Typography>
            {secondaryText ? (
              <Typography gutterBottom variant="caption" color="textSecondary">
                {secondaryText}
              </Typography>
            ) : null}
          </div>
          <div>
            <Icon
              className="u-c-pointer"
              color="var(--secondaryTextColor)"
              icon={DownloadIcon}
              onClick={() => downloadLink()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

HistoryRow.propTypes = {
  /** Custom CSS */
  style: PropTypes.object,
  /** title  */
  title: PropTypes.string,
  /** First line */
  primaryText: PropTypes.string,
  /** Second line */
  secondaryText: PropTypes.string,
  /** tag of file */
  tag: PropTypes.string,
  /** Action when icon is clicked */
  downloadLink: PropTypes.func
}

export default HistoryRow
