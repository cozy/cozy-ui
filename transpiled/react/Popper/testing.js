// Fixes the error "TypeError: document.createRange is not a function" in jest,
// see https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813
export var fixPopperTesting = function fixPopperTesting() {
  var createRangeBackup;
  beforeAll(function () {
    createRangeBackup = global.document.createRange;
    global.document.createRange = jest.fn(function () {
      return {
        setStart: function setStart() {},
        setEnd: function setEnd() {},
        commonAncestorContainer: {
          nodeName: 'BODY',
          ownerDocument: document
        }
      };
    });
  });
  afterAll(function () {
    global.document.createRange = createRangeBackup;
  });
};