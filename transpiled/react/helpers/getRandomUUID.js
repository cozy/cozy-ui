/**
 *  Returns a random UUID
 * @returns {string} a random UUID
 */
export var getRandomUUID = function getRandomUUID() {
  var _window, _window$crypto, _window$crypto$random;

  if (process.env.NODE_ENV === 'test') {
    return 'random-uuid-for-jest';
  }

  return (_window = window) === null || _window === void 0 ? void 0 : (_window$crypto = _window.crypto) === null || _window$crypto === void 0 ? void 0 : (_window$crypto$random = _window$crypto.randomUUID) === null || _window$crypto$random === void 0 ? void 0 : _window$crypto$random.call(_window$crypto);
};