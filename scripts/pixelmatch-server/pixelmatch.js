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

const performDiff = async (app, filename) => {
  const pristineDir = app.get('pristineDir')
  const currentDir = app.get('currentDir')
  const diffsDir = app.get('diffsDir')

  const { stdout } = await spawnP(`pixelmatch`, [
    path.join(pristineDir, filename),
    path.join(currentDir, filename),
    path.join(diffsDir, filename)
  ])
  fs.writeFileSync(`diffs/${filename}.pixelmatch.txt`, stdout)
}

module.exports = {
  performDiff,
  parsePixelmatchOutput
}
