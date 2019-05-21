import { getTranslatedManifestProperty } from './helpers'

xdescribe('getTranslatedManifestProperty helper', () => {
  const appMock = {
    slug: 'mock',
    name: 'Not Translated Name',
    description: 'not translated description'
  }
  const translatedName = 'Translated Name'

  beforeAll(() => {
    extendI18n({
      [`apps.${appMock.slug}.name`]: translatedName
    })
  })

  it('should return the translated property if translated', () => {
    // name is translated here in the beforeAll
    expect(getTranslatedManifestProperty(appMock, 'name', tMock)).toBe(
      translatedName
    )
  })

  it('should fallback to the manifest property if no translated property found', () => {
    expect(getTranslatedManifestProperty(appMock, 'description', tMock)).toBe(
      appMock.description
    )
  })

  it('should always return an default empty string value', () => {
    expect(getTranslatedManifestProperty()).toBe('')
  })
})
