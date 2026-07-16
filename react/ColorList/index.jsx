import { Icon, Check, Palette } from '@linagora/twake-icons'
import propTypes from 'prop-types'
import React from 'react'

import { COLORS } from './helpers'
import Avatar from '../Avatar'
import ButtonBase from '../ButtonBase'
import Button from '../Buttons'
import ImageList from '../ImageList'
import ImageListItem from '../ImageListItem'
import { useBreakpoints } from '../providers/Breakpoints'

const sizeToPx = {
  small: 21,
  medium: 41
}

const ColorList = ({ size, selectedColor, customColorProps, onClick }) => {
  const { isMobile } = useBreakpoints()

  const _size = size || (isMobile ? 'medium' : 'small')
  const avatarSize = sizeToPx[_size]
  const iconSize = _size === 'medium' ? 16 : 10

  return (
    <ImageList
      cols={_size === 'medium' ? 5 : 7}
      rowHeight={avatarSize}
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
            <Avatar color={color} size={avatarSize}>
              {selectedColor?.toUpperCase() === color ? (
                <Icon icon={Check} size={iconSize} />
              ) : (
                ' '
              )}
            </Avatar>
          </ButtonBase>
        </ImageListItem>
      ))}
      {customColorProps?.enabled && (
        <ImageListItem
          className="u-ta-center"
          classes={{ item: 'u-ov-visible' }}
        >
          <Button
            className="u-miw-auto u-mih-auto u-p-0 u-bdrs-circle"
            variant="ghost"
            style={{
              width: avatarSize,
              height: avatarSize,
              border: '1px solid transparent',
              backgroundImage:
                'linear-gradient(#fff, #fff), conic-gradient(from 0deg, #FB2C36, #AD46FF, #2B7FFF, #FB2C36)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
            classes={{ label: 'u-flex u-w-auto' }}
            label={<Icon icon={Palette} size={iconSize} color="#000" />}
            onClick={() => customColorProps?.onClick()}
          />
        </ImageListItem>
      )}
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
