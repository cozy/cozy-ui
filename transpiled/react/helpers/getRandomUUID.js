/**
 * Returns a random UUID without using window.crypto API
 * @returns {string} a random UUID
 */
var createUUID = function createUUID() {
  var func = function func(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  };

  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, func);
  return uuid;
};
/**
 * Returns a random UUID
 * @returns {string} a random UUID
 */


export var getRandomUUID = function getRandomUUID() {
  var _window, _window$crypto, _window$crypto$random;

  if (process.env.NODE_ENV === 'test') {
    return 'random-uuid-for-jest';
  }

  return ((_window = window) === null || _window === void 0 ? void 0 : (_window$crypto = _window.crypto) === null || _window$crypto === void 0 ? void 0 : (_window$crypto$random = _window$crypto.randomUUID) === null || _window$crypto$random === void 0 ? void 0 : _window$crypto$random.call(_window$crypto)) || createUUID();
};