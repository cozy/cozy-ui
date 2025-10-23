// https://date-fns.org/v2.28.0/docs/formatDistanceToNow
export var numberOfReferencesForPluralForm = function numberOfReferencesForPluralForm(durationInSec) {
  return durationInSec < 90 || durationInSec > 2670 && durationInSec < 5370 ? 1 : 2;
};