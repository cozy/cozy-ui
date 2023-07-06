export default function (fn, duration, keyFn) {
  var memo = {};
  return function (arg) {
    var key = keyFn(arg);
    var memoInfo = memo[key];
    var uptodate = memoInfo && memoInfo.result && memoInfo.date - Date.now() < duration;

    if (!uptodate) {
      memo[key] = {
        result: fn(arg),
        date: Date.now()
      };
    }

    return memo[key].result;
  };
}