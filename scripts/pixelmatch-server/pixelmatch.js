const fs = require('fs')
const path = require('path')
const spawnP = require('./spawnPromise')

const parsePixelmatchOutput = output => {
  try {
    const difPixelsRx = /different pixels: (\d+)/
    const difPixelsMatch = difPixelsRx.exec(output)
    return {
      ok: output.length > 0,
      differentPixels: difPixelsMatch && difPixelsMatch[1]
    }
  } catch {
    return { ok: false }
  }
}

const fileOutputRegex = /(\d+) x (\d+)/
const parseFileOutput = output => {
  const match = fileOutputRegex.exec(output)
  if (!match) {
    return {
      width: NaN,
      height: NaN
    }
  } else {
    return {
      width: parseInt(match[1], 0),
      height: parseInt(match[2], 0)
    }
  }
}

const getDimensions = async filename => {
  const { stdout: fileOutput } = await spawnP(`file`, [filename])
  const dimensions = parseFileOutput(fileOutput)
  return dimensions
}

const resizeImage = (filename, options) => {
  return spawnP(`mogrify`, [
    '-background',
    `${options.background}`,
    '-extent',
    `${options.width}x${options.height}`,
    filename
  ])
}

const performDiff = async (app, filename) => {
  const pristineDir = app.get('pristineDir')
  const currentDir = app.get('currentDir')
  const diffsDir = app.get('diffsDir')

  const pristineFilename = path.join(pristineDir, filename)
  const currentFilename = path.join(currentDir, filename)
  const diffFilename = path.join(diffsDir, filename)

  const { width: pristineW, height: pristineH } = await getDimensions(
    pristineFilename
  )

  const { width: currentW, height: currentH } = await getDimensions(
    currentFilename
  )

  // Make sure image have the same height for pixelmatch to work
  // correctly
  if (currentH < pristineH) {
    await resizeImage(currentFilename, {
      width: currentW,
      height: pristineH,
      background: 'pink'
    })
  } else if (currentH > pristineH) {
    await resizeImage(pristineFilename, {
      width: pristineW,
      height: currentH,
      background: 'pink'
    })
  }

  const { stdout: pmOutput } = await spawnP(`pixelmatch`, [
    pristineFilename,
    currentFilename,
    diffFilename
  ])

  fs.writeFileSync(`diffs/${filename}.pixelmatch.txt`, pmOutput)
}

module.exports = {
  performDiff,
  parsePixelmatchOutput
}
