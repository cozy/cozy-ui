import { colorMapping } from '../../Avatar/helpers'

const makeKey = (colors, name) =>
  Array.from(name.toUpperCase())
    .map(letter => letter.charCodeAt(0))
    .reduce((sum, number) => sum + number, 0) % colors.length

const colors = Object.values(colorMapping).filter(Boolean)

/**
 * @param {string} name
 * @returns {string}
 */
export const nameToColor = (name = '') => {
  const key = makeKey(colors, name)
  return colors[key]
}
