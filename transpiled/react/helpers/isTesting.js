module.exports = function () {
  return navigator && navigator.userAgent && navigator.userAgent.includes('Argos');
};