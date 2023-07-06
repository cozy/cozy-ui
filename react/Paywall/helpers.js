import { arePremiumLinksEnabled } from 'cozy-client/dist/models/instance'

export const makeType = (instance, isPublic, link) => {
  const hasPremiumEnabled = arePremiumLinksEnabled(instance)

  if (hasPremiumEnabled && isPublic) {
    return 'public'
  }

  if (hasPremiumEnabled && link) {
    return 'premium'
  }

  return 'default'
}
