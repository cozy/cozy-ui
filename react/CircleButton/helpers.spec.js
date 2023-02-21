import { makeTypoColor, makeButtonShadow } from './helpers'

const theme = {
  palette: {
    primary: { main: 'white' },
    text: { disabled: 'lightGrey', primary: 'grey' },
    border: { main: 'paleGrey' }
  }
}

describe('makeTypoColor', () => {
  it('should be correct color by default', () => {
    const res = makeTypoColor({ theme, active: false, disabled: false })

    expect(res).toBe('grey')
  })

  it('should be correct color when disabled', () => {
    const res = makeTypoColor({ theme, active: false, disabled: true })

    expect(res).toBe('lightGrey')
  })

  it('should be correct color when active', () => {
    const res = makeTypoColor({ theme, active: true, disabled: false })

    expect(res).toBe('white')
  })

  it('should be correct color when active disabled', () => {
    const res = makeTypoColor({ theme, active: true, disabled: true })

    expect(res).toBe('lightGrey')
  })
})

describe('makeButtonShadow', () => {
  it('should be correct color by default', () => {
    const res = makeButtonShadow({ theme, active: false, disabled: false })

    expect(res).toBe('inset 0 0 0 1px paleGrey')
  })

  it('should be correct color when disabled', () => {
    const res = makeButtonShadow({ theme, active: false, disabled: true })

    expect(res).toBe('inset 0 0 0 1px paleGrey')
  })

  it('should be none when active', () => {
    const res = makeButtonShadow({ theme, active: true, disabled: false })

    expect(res).toBe('none')
  })

  it('should be correct color when active disabled', () => {
    const res = makeButtonShadow({ theme, active: true, disabled: true })

    expect(res).toBe('inset 0 0 0 1px paleGrey')
  })
})
