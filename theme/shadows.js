// Used to generate all the shadows used in the material theme.
// Is not used at runtime.

const parseLine = line => {
  const values = line.split(/\s+/)
  return {
    x: values[0],
    y: values[1],
    blur: values[2],
    spread: values[3],
    opacity: values[4]
  }
}

const shadow1 = `0   2   4   0   8
0   3   5   0   8
0   4   6   0   9
0   5   8   1   9
0   6   9   1   9
0   7   10  1   10
0   8   11  1   10
0   9   13  1   10
0   10  14  1   11
0   11  15  2   11
0   12  16  2   11
0   13  17  2   12
0   13  19  2   12
0   14  20  2   13
0   15  21  2   13
0   16  22  3   13
0   17  23  3   14
0   18  25  3   14
0   19  26  3   14
0   20  27  3   15
0   21  28  3   15
0   22  30  4   15
0   23  31  4   16
0   24  32  4   16
`
  .split('\n')
  .map(parseLine)

const shadow2 = `0   4   16  0   6
0   4   17  0   6
0   5   19  1   7
0   5   20  1   7
0   5   22  1   7
0   6   23  2   7
0   6   24  2   8
0   6   26  2   8
0   7   27  3   8
0   7   29  3   8
0   7   30  3   9
0   8   31  4   9
0   8   33  4   9
0   9   34  5   9
0   9   35  5   10
0   9   37  5   10
0   10  38  6   10
0   10  40  6   10
0   10  41  6   11
0   11  42  7   11
0   11  44  7   11
0   11  45  7   11
0   12  47  8   12
0   12  48  8   12
`
  .split('\n')
  .map(parseLine)

const shadow3 = 'rgba(29, 33, 42, 0.12) 0px 0px 0px 0.5px'

const alphaGrey900 = alpha => {
  return `rgba(29, 33, 42, ${alpha / 100})`
}

const fmtShadow = ({ x, y, blur, spread, opacity }) => {
  return `${alphaGrey900(opacity)} ${x}px ${y}px ${blur}px ${spread}px`
}

for (let i = 0; i < 24; i++) {
  console.log(`${fmtShadow(shadow1[i])}, ${fmtShadow(shadow2[i])}, ${shadow3}`)
}
