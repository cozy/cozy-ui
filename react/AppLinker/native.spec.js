import { generateUniversalLink } from './native'

describe('native functions', () => {
  it('should generate the universalink', () => {
    const universalLink = generateUniversalLink({
      slug: 'drive',
      nativePath: '/files/1',
      fallbackUrl: 'https://drive.cozy.tools/files/1'
    })
    const endLink =
      'https://links.mycozy.cloud/drive/files/1?fallback=https%3A%2F%2Fdrive.cozy.tools%2Ffiles%2F1'

    expect(universalLink).toEqual(endLink)
  })

  it('should generate the universalink with several search params', () => {
    const universalLink = generateUniversalLink({
      slug: 'drive',
      nativePath: '/files/1?viewer=test',
      fallbackUrl: 'https://drive.cozy.tools/files/1?viewer=test'
    })
    const endLink =
      'https://links.mycozy.cloud/drive/files/1?viewer=test&fallback=https%3A%2F%2Fdrive.cozy.tools%2Ffiles%2F1%3Fviewer%3Dtest'
    expect(universalLink).toEqual(endLink)
  })

  it('should generate the universalink for the home of an app', () => {
    const universalLink = generateUniversalLink({
      slug: 'drive',
      nativePath: '/',
      fallbackUrl: 'https://drive.cozy.tools/'
    })
    const endLink =
      'https://links.mycozy.cloud/drive/?fallback=https%3A%2F%2Fdrive.cozy.tools%2F'
    expect(universalLink).toEqual(endLink)
  })

  it('should generate the universalink for the home of an app even if no path', () => {
    const universalLink = generateUniversalLink({
      slug: 'drive',
      nativePath: '',
      fallbackUrl: 'https://drive.cozy.tools/'
    })
    const endLink =
      'https://links.mycozy.cloud/drive/?fallback=https%3A%2F%2Fdrive.cozy.tools%2F'

    expect(universalLink).toEqual(endLink)
  })

  it('should automatically generate fallbackUrl if provided with cozyUrl', () => {
    const universalLink = generateUniversalLink({
      slug: 'drive',
      nativePath: '/files',
      cozyUrl: 'https://name.cozy.tools/'
    })
    const endLink =
      'https://links.mycozy.cloud/drive/files?fallback=https%3A%2F%2Fname-drive.cozy.tools%2F%23%2Ffiles'
    expect(universalLink).toEqual(endLink)
  })
})
