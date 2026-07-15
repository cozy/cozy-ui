import { Icon, Check } from '@linagora/twake-icons'
import propTypes from 'prop-types'
import React from 'react'

import { COLORS } from './helpers'
import Avatar from '../Avatar'
import ButtonBase from '../ButtonBase'
import ImageList from '../ImageList'
import ImageListItem from '../ImageListItem'
import { useBreakpoints } from '../providers/Breakpoints'

const sizeToPx = {
  small: 21,
  medium: 41
}

const ColorList = ({ size, selectedColor, onClick }) => {
  const { isMobile } = useBreakpoints()
  const _size = size || (isMobile ? 'medium' : 'small')

  return (
    <ImageList
      cols={_size === 'medium' ? 5 : 7}
      rowHeight={sizeToPx[_size]}
      gap={_size === 'medium' ? 16 : 5}
    >
      {COLORS.map(color => (
        <ImageListItem
          key={color}
          className="u-ta-center"
          classes={{ item: 'u-ov-visible' }}
        >
          <ButtonBase
            className="u-bdrs-circle"
            component="div"
            onClick={() => onClick?.(color)}
          >
            <Avatar color={color} size={sizeToPx[_size]}>
              {selectedColor?.toUpperCase() === color ? (
                <Icon icon={Check} size={_size === 'medium' ? 19 : 10} />
              ) : (
                ' '
              )}
            </Avatar>
          </ButtonBase>
        </ImageListItem>
      ))}
    </ImageList>
  )
}

ColorList.propTypes = {
  size: propTypes.oneOf(['small', 'medium']),
  selectedColor: propTypes.string,
  onClick: propTypes.func
}

export { COLORS }

export default ColorList
