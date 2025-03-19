// https://date-fns.org/v2.28.0/docs/formatDistanceToNow
export const numberOfReferencesForPluralForm = durationInSec =>
  durationInSec < 90 || (durationInSec > 2670 && durationInSec < 5370) ? 1 : 2
