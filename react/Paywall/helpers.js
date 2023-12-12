import { arePremiumLinksEnabled } from 'cozy-client/dist/models/instance'

/**
 * Determine the type of paywall to display
 * @param {import("cozy-client/types").InstanceInfo} instanceInfo - Instance info (instance, context)
 * @param {boolean} isPublic - Is the document public
 * @param {string} link - Link to check
 * @returns {string} - Type of paywall to display
 */
export const makeType = (instanceInfo, isPublic, link) => {
  const hasPremiumEnabled = arePremiumLinksEnabled(instanceInfo)

  if (hasPremiumEnabled && isPublic) {
    return 'public'
  }

  if (hasPremiumEnabled && link) {
    return 'premium'
  }

  return 'default'
}
