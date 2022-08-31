import { UNIVERSAL_LINK_URL } from 'cozy-ui/transpiled/react/AppLinker/native.config.js'

export const getUniversalLinkDomain = () => {
  return UNIVERSAL_LINK_URL
}

const ensureFirstSlash = path => {
  if (!path) {
    return '/'
  } else {
    return path.startsWith('/') ? path : '/' + path
  }
}

/**
 * generateWebLink - Construct a link to a web app
 *
 * @param {object} Options               Object of options
 * @param {string}   options.cozyUrl       Base URL of the cozy, eg. http://cozy.localhost:8080 or https://test.mycozy.cloud:8080
 * @param {string}   options.nativePath    Path inside the app, eg. /files/test.jpg
 * @param {string}   options.slug          Slug of the app
 * @param {string}   options.subDomainType Whether the cozy is using flat or nested subdomains. Defaults to flat.
 *
 * @return {string} Generated URL
 */
export const generateWebLink = ({
  cozyUrl,
  nativePath,
  slug,
  subDomainType
}) => {
  const url = new URL(cozyUrl)
  url.host =
    subDomainType === 'nested'
      ? `${slug}.${url.host}`
      : url.host
          .split('.')
          .map((x, i) => (i === 0 ? x + '-' + slug : x))
          .join('.')
  url.hash = ensureFirstSlash(nativePath)
  return url.toString()
}

/**
 * Returns a universal link for an app + native path
 *
 * @param  {string} options.slug          - eg: drive
 * @param  {string} options.nativePath    - /path/to/view
 * @param  {string} options.fallbackUrl   - https://...mycozy.cloud, optional if cozyUrl is passed
 * @param  {string} options.cozyUrl       - https://name.mycozy.cloud, optional if fallbackUrl is passed
 * @param  {string} options.subDomainType - flat/nested, optionally the type of subdomains that is used.
 * @return {string}                       - https://links.cozy.cloud/drive/?fallback...
 */
export const generateUniversalLink = options => {
  const { slug, cozyUrl, subDomainType } = options
  let { fallbackUrl, nativePath } = options
  nativePath = ensureFirstSlash(nativePath)
  if (!cozyUrl && !fallbackUrl) {
    throw new Error(
      'Must have either cozyUrl or fallbackUrl to generate universal link.'
    )
  }
  if (cozyUrl && !fallbackUrl) {
    fallbackUrl = generateWebLink({ cozyUrl, nativePath, slug, subDomainType })
  }
  const url = getUniversalLinkDomain(cozyUrl) + '/' + slug + nativePath
  const urlObj = new URL(url)
  urlObj.searchParams.append('fallback', fallbackUrl)
  return urlObj.toString()
}
