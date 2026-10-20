import { getPlainTextFromMarkdown } from './helpers'

describe('getPlainTextFromMarkdown', () => {
  it('gives the words of a Markdown content on one line', () => {
    const content = [
      '# Title',
      '',
      'Some **bold** text, with _italic_',
      '',
      '- a first item',
      '1. a second item, with `inline code`',
      '',
      '| Name  | Role      |',
      '|-------|:---------:|',
      '| Alice | Developer |',
      '',
      '> A quote, a link: [cozy](https://cozy.io) and ![a logo](logo.png).',
      '',
      '```js',
      "console.log('hello')",
      '```'
    ].join('\n')

    expect(getPlainTextFromMarkdown(content)).toBe(
      "Title Some bold text, with italic a first item a second item, with inline code Name Role Alice Developer A quote, a link: cozy and a logo. console.log('hello')"
    )
  })

  it('keeps the characters that are no Markdown', () => {
    expect(getPlainTextFromMarkdown('my_file_name is 2 * 3 = 6')).toBe(
      'my_file_name is 2 * 3 = 6'
    )
    expect(getPlainTextFromMarkdown('2 ** 10 bytes in my__file')).toBe(
      '2 ** 10 bytes in my__file'
    )
  })

  it('removes bold, struck and italic by pairs', () => {
    expect(
      getPlainTextFromMarkdown('**a** and **b**, ~~c~~, *d* and _e_')
    ).toBe('a and b, c, d and e')
  })

  it('gives the text of a link with parentheses in its URL', () => {
    expect(
      getPlainTextFromMarkdown(
        '[Foo](https://en.wikipedia.org/wiki/Foo_(bar)) and ![a chart](chart_(1).png)'
      )
    ).toBe('Foo and a chart')
  })

  it('gives the alt of an image by reference', () => {
    expect(
      getPlainTextFromMarkdown('![a logo][logo]\n\n[logo]: logo.png')
    ).toBe('a logo')
  })

  it('puts the lines of a hard break apart', () => {
    expect(getPlainTextFromMarkdown('first line  \nsecond line')).toBe(
      'first line second line'
    )
  })

  it('gives nothing for a content of Markdown only', () => {
    expect(getPlainTextFromMarkdown('![](chart.png)')).toBe('')
    expect(getPlainTextFromMarkdown('---')).toBe('')
  })
})
