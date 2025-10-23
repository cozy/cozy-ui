// Fixes the error "TypeError: document.createRange is not a function" in jest,
// see https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813
export const fixPopperTesting = () => {
  let createRangeBackup

  beforeAll(() => {
    createRangeBackup = global.document.createRange
    global.document.createRange = jest.fn(() => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document
      }
    }))
  })

  afterAll(() => {
    global.document.createRange = createRangeBackup
  })
}
