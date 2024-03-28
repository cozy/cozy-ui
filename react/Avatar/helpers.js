import palette from '../palette'

export const nameToColor = (name = '') => {
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
  const key =
    Array.from(name.toUpperCase())
      .map(letter => letter.charCodeAt(0))
      .reduce((sum, number) => sum + number, 0) % colors.length
  return colors[key]
}
