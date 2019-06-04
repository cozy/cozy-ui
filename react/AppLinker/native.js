import { UNIVERSAL_LINK_URL } from 'cozy-ui/transpiled/react/AppLinker/native.config.js'

export const getUniversalLinkDomain = () => {
  return UNIVERSAL_LINK_URL
}

/**
 * Returns a universal link for an app + native path
 *
 * @param  {string} options.slug        - eg: drive
 * @param  {string} options.nativePath  - /path/to/view
 * @param  {string} options.fallbackUrl - https://...mycozy.cloud, optional if cozyUrl is passed
 * @param  {string} options.cozyUrl     - https://name.mycozy.cloud, optional if fallbackUrl is passed
 * @return {string}                     - https://links.cozy.cloud/drive/?fallback...
 */
export const generateUniversalLink = options => {
  const { slug, cozyUrl } = options
  let { fallbackUrl, nativePath } = options
  nativePath = nativePath || '/'
  if (!cozyUrl && !fallbackUrl) {
    throw new Error(
      'Must have either cozyUrl or fallbackUrl to generate universal link.'
    )
  }
  if (cozyUrl && !fallbackUrl) {
    fallbackUrl = new URL(cozyUrl)
    fallbackUrl.host = fallbackUrl.host
      .split('.')
      .map((x, i) => (i === 0 ? x + '-' + slug : x))
      .join('.')
    fallbackUrl.hash = nativePath
    fallbackUrl = fallbackUrl.toString()
  }
  if (!nativePath.startsWith('/')) nativePath = '/' + nativePath
  let url = getUniversalLinkDomain() + '/' + slug + nativePath
  const urlObj = new URL(url)
  urlObj.searchParams.append('fallback', fallbackUrl)
  return urlObj.toString()
}
