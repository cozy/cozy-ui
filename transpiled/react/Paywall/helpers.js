import { arePremiumLinksEnabled } from 'cozy-client/dist/models/instance';
export var makeType = function makeType(instance, isPublic, link) {
  var hasPremiumEnabled = arePremiumLinksEnabled(instance);

  if (hasPremiumEnabled && isPublic) {
    return 'public';
  }

  if (hasPremiumEnabled && link) {
    return 'premium';
  }

  return 'default';
};