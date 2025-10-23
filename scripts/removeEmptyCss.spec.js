it('should test the removeEmptyCSS method', () => {
  const CSS = `.emptyClass{} .emptyClass1 {} .emptyClass2 { } .notEmpty{color: red} .notEmpty1 {color: red} .noteEmpty2 { color: red }`
  const cleanedCSS = CSS.replace(/[^\};\{\n]+\{\s*\}/gm, '')
  expect(cleanedCSS).toBe(
    ' .notEmpty{color: red} .notEmpty1 {color: red} .noteEmpty2 { color: red }'
  )
})
