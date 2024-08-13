var createDepreciationLogger = function createDepreciationLogger() {
  var warned = false;
  return function (message) {
    if (!warned) console.warn(message);
    warned = true;
  };
};

export default createDepreciationLogger;