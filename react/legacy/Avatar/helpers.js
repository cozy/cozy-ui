import { colorMapping } from '../../Avatar/helpers'
import { isTwakeTheme } from '../../helpers/isTwakeTheme'
import palette from '../../palette'

const makeKey = (colors, name) =>
  Array.from(name.toUpperCase())
    .map(letter => letter.charCodeAt(0))
    .reduce((sum, number) => sum + number, 0) % colors.length

const colors = [
  palette['azure'],
  palette['melon'],
  palette['blazeOrange'],
  palette['pomegranate'],
  palette['mango'],
  palette['pumpkinOrange'],
  palette['darkPeriwinkle'],
  palette['purpley'],
  palette['lightishPurple'],
  palette['weirdGreen'],
  palette['puertoRico'],
  palette['emerald'],
  palette['seafoamGreen'],
  palette['lavender'],
  palette['brightSun'],
  palette['fuchsia']
]

const twakeColors = Object.values(colorMapping).filter(Boolean)

export const nameToColor = (name = '') => {
  const _colors = isTwakeTheme() ? twakeColors : colors
  const key = makeKey(_colors, name)
  return _colors[key]
}
