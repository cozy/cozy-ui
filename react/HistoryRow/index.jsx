import React from 'react'
import PropTypes from 'prop-types'
import Circle from '../Circle'
import { Media, Bd, Img } from '../Media'
import { Caption, SubTitle, Bold } from '../Text'
import Icon from '../Icon'
import palette from '../palette'

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
              backgroundColor={palette.white}
              className={styles.HistoryRowCircle}
            >
              {tag && <Icon icon={'file'} color={palette.slateGrey} />}
            </Circle>
          </Img>
        </div>
        <div className="u-media-grow u-stack-xs ">
          <div className="u-media u-row-m">
            <Bd>
              <Bold>{primaryText}</Bold>
              <SubTitle>{tag}</SubTitle>
            </Bd>
            <Img>
              <Icon
                className="u-c-pointer"
                color={palette.coolGrey}
                icon="download"
                onClick={() => downloadLink()}
              />
            </Img>
          </div>
          {secondaryText ? <Caption>{secondaryText}</Caption> : null}
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
