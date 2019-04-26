import { generateUniversalLink, getUniversalLinkDomain } from './native'

describe('native functions', () => {
  it('should generate the universalink', () => {
    const universalLink = generateUniversalLink({
      slug: 'drive',
      nativePath: '/files/1',
      fallbackUrl: 'https://drive.cozy.tools/files/1'
    })
    const endLink =
      getUniversalLinkDomain() +
      '/drive/files/1&fallback=https://drive.cozy.tools/files/1'
    expect(universalLink).toEqual(endLink)
  })

  it('should generate the universalink for the home of an app', () => {
    const universalLink = generateUniversalLink({
      slug: 'drive',
      nativePath: '/',
      fallbackUrl: 'https://drive.cozy.tools/'
    })
    const endLink =
      'https://links.mycozy.cloud/drive/&fallback=https://drive.cozy.tools/'
    expect(universalLink).toEqual(endLink)
  })

  it('should generate the universalink for the home of an app even if no path', () => {
    const universalLink = generateUniversalLink({
      slug: 'drive',
      nativePath: '',
      fallbackUrl: 'https://drive.cozy.tools/'
    })
    const endLink =
      getUniversalLinkDomain() + '/drive/&fallback=https://drive.cozy.tools/'
    expect(universalLink).toEqual(endLink)
  })
})
