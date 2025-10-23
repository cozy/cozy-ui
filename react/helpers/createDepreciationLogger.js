const createDepreciationLogger = () => {
  let warned = false

  return message => {
    if (!warned) console.warn(message)
    warned = true
  }
}

export default createDepreciationLogger
