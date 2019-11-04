import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Media, Bd, Img } from '../Media'
import { Text, Caption } from '../Text'

const denseStyle = { height: '48px' }

/**
 * A ready-made row layout for presenting rich information.
 */
const CompositeRow = ({
  style,
  className,
  primaryText,
  secondaryText,
  image,
  right,
  actions,
  dense
}) => {
  return (
    <Media
      className={cx(className, dense ? 'u-ph-1' : 'u-p-1')}
      style={dense ? Object.assign({}, denseStyle, style) : style}
    >
      <div className="u-media u-media-grow u-row-m">
        {image ? <Img className="u-flex-self-start">{image}</Img> : null}
        <div className="u-media-grow u-stack-xs">
          <div className="u-media u-row-m">
            <Bd>
              <Text>{primaryText}</Text>
              {secondaryText ? <Caption>{secondaryText}</Caption> : null}
            </Bd>
            {right}
          </div>
          {actions}
        </div>
      </div>
    </Media>
  )
}

CompositeRow.propTypes = {
  /** Custom CSS */
  style: PropTypes.object,
  /** Custom class */
  className: PropTypes.string,
  /** First line */
  primaryText: PropTypes.element,
  /** Second line */
  secondaryText: PropTypes.element,
  /** Image to the left of the row */
  image: PropTypes.element,
  /**
   * Actions are shown below primary and secondary texts. Pass fragment for multiple elements.
   * Good to use with Chips.
   */
  actions: PropTypes.element,
  /* Element(s) to the show to the right of the CompositeRow */
  right: PropTypes.element,
  /** Row height will be fixed to 48px */
  dense: PropTypes.bool
}

export default CompositeRow
