import {
  generateWebLink as generateWebLinkClient,
  ensureFirstSlash
} from 'cozy-client'

import { UNIVERSAL_LINK_URL } from './native.config'

export const getUniversalLinkDomain = () => {
  return UNIVERSAL_LINK_URL
}

export const generateWebLink = ({ nativePath, ...props }) => {
  console.warn(
    'Deprecated: you should use generateWebLink from cozy-client instead'
  )
  return generateWebLinkClient({ pathname: '/', hash: nativePath, ...props })
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
    fallbackUrl = generateWebLinkClient({
      cozyUrl,
      pathname: '/',
      hash: nativePath,
      slug,
      subDomainType
    })
  }

  const url = getUniversalLinkDomain(cozyUrl) + '/' + slug + nativePath
  const urlObj = new URL(url)
  urlObj.searchParams.append('fallback', fallbackUrl)

  return urlObj.toString()
}
