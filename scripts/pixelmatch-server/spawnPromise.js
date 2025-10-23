const { spawn } = require('child_process')

const spawnP = (command, args, options) => {
  let stdout = ''
  let stderr = ''
  let p = new Promise((resolve, reject) => {
    const process = spawn(command, args, options)
    process.stdout.on('data', function(data) {
      stdout += data.toString()
    })
    process.stderr.on('data', function(data) {
      stderr += data.toString()
    })
    process.on('close', function(code) {
      resolve({ code, stdout, stderr })
    })
    process.on('error', function(err) {
      // *** Process creation failed
      reject(err)
    })
  })
  return p
}

module.exports = spawnP
