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

const shadow1 = `0   1   4   0   4
0   2   4   0   8
0   4   5   0   9
0   3   5  -1   9
0   3   6  -1   10
0   4   6  -1   11
0   4   7  -2   12
0   5   7  -2   12
0   5   8  -3   13
0   6   8  -3   14
0   6   9  -3   15
0   7   9  -4   15
0   7  10  -4   16
0   7  11  -4   17
0   8  11  -5   17
0   8  12  -5   18
0   9  12  -5   19
0   9  13  -6   20
0  10  13  -6   20
0  10  14  -7   21
0  11  14  -7   22
0  11  15  -7   23
0  12  15  -8   23
0  12  16  -8   24
`
  .split('\n')
  .map(parseLine)

const shadow2 = `0   0   0   0   0
0   4   16  0   6
0   4   17  0   7
0   5   19  1   8
0   5   20  1   8
0   5   22  1   9
0   6   23  2   10
0   6   25  2   11
0   7   26  3   12
0   7   28  3   13
0   7   29  3   13
0   8   31  4   14
0   8   32  4   15
0   8   33  4   16
0   8   35  5   17
0   9   36  5   17
0   9   38  5   18
0   10  39  6   19
0   10  41  6   20
0   11  42  7   21
0   11  44  7   22
0   11  45  7   22
0   12  47  8   23
0   12  48  8   24
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
