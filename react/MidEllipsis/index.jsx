import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

/** The left-to-right mark (LRM) is a control character (an invisible formatting character)
 * used in computerized typesetting (including word processing in a program like Microsoft Word)
 * of text that contains a mixture of left-to-right text (such as English or Russian)
 * and right-to-left text (such as Arabic, Persian or Hebrew).
 * It is used to set the way adjacent characters are grouped with respect to text direction.
 * https://en.wikipedia.org/wiki/Left-to-right_mark
 *
 * In this case it allows us to hack the RTL direction of the {lastPart} in order to keep it LTR-looking
 * while still benefitting from the desired RTL overflow direction.
 * */
const LRM = <>&#8206;</>

const MidEllipsis = forwardRef(
  ({ text, className, children, ...props }, ref) => {
    if (text && typeof text !== 'string')
      throw new Error('The "text" prop of MidEllipsis can only be a string')

    if (children && typeof children !== 'string')
      throw new Error('The children of MidEllipsis can only be a string')

    const str = text || children

    const partLength = Math.round(str.length / 2)
    const firstPart = str.substring(0, partLength)
    const lastPart = str.substring(partLength, str.length)

    return (
      <div className={cx('u-midellipsis', className)} ref={ref} {...props}>
        <span>{firstPart}</span>
        <span>
          {LRM}
          {lastPart}
          {LRM}
        </span>
      </div>
    )
  }
)

MidEllipsis.displayName = 'MidEllipsis'

MidEllipsis.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}

export default MidEllipsis
