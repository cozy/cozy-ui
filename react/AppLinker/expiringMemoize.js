export default function(fn, duration, keyFn) {
  const memo = {}
  return arg => {
    const key = keyFn(arg)
    const memoInfo = memo[key]
    const uptodate =
      memoInfo && memoInfo.result && memoInfo.date - Date.now() < duration
    if (!uptodate) {
      memo[key] = { result: fn(arg), date: Date.now() }
    }
    return memo[key].result
  }
}
