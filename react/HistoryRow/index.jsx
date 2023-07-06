import React from 'react'
import PropTypes from 'prop-types'

import Circle from '../Circle'
import Icon from '../Icon'
import DownloadIcon from '../Icons/Download'
import FileIcon from '../Icons/File'
import { Media, Bd, Img } from '../deprecated/Media'
import Typography from '../Typography'

import styles from './styles.styl'

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
    <Media className={styles.HistoryRowMedia} style={style} {...rest}>
      <div className="u-media u-media-grow u-row-m">
        <div className={styles.HistoryRowCircleWrapper}>
          <Img className={styles.HistoryRowMediaImg}>
            <Circle
              size={tag ? 'small' : 'xsmall'}
              className={styles.HistoryRowCircle}
            >
              {tag && <Icon icon={FileIcon} color="var(--primaryTextColor)" />}
            </Circle>
          </Img>
        </div>
        <div className="u-media u-media-grow u-stack-xs u-row-m">
          <Bd>
            <Typography variant="h6">{primaryText}</Typography>
            <Typography gutterBottom variant="h6">
              {tag}
            </Typography>
            {secondaryText ? (
              <Typography gutterBottom variant="caption" color="textSecondary">
                {secondaryText}
              </Typography>
            ) : null}
          </Bd>
          <Img>
            <Icon
              className="u-c-pointer"
              color="var(--secondaryTextColor)"
              icon={DownloadIcon}
              onClick={() => downloadLink()}
            />
          </Img>
        </div>
      </div>
    </Media>
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
