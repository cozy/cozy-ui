import { UNIVERSAL_LINK_URL } from 'cozy-ui/transpiled/react/AppLinker/native.config.js'
export const getUniversalLinkDomain = () => {
  return UNIVERSAL_LINK_URL
}
/*
  slug string drive 
  path : /path/to/view
  fallbackUrl: string : https://...mycozy.cloud
*/
export const generateUniversalLink = ({ slug, nativePath, fallbackUrl }) => {
  if (!nativePath.startsWith('/')) nativePath = '/' + nativePath
  return (
    getUniversalLinkDomain() +
    '/' +
    slug +
    nativePath +
    '&fallback=' +
    fallbackUrl
  )
}
