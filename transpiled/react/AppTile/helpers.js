export var APP_STATUS = {
  installed: 'installed',
  maintenance: 'maintenance',
  update: 'update'
};
export var getCurrentStatusLabel = function getCurrentStatusLabel(app) {
  if (hasPendingUpdate(app)) return APP_STATUS.update;
  if (isUnderMaintenance(app)) return APP_STATUS.maintenance;
  if (isInstalledAndNothingToReport(app)) return APP_STATUS.installed;
  return null;
};
export var hasPendingUpdate = function hasPendingUpdate(app) {
  return !!app.availableVersion;
};
export var isUnderMaintenance = function isUnderMaintenance(app) {
  return !hasPendingUpdate(app) && app.maintenance;
};
/* installed here means no actions needed */

export var isInstalledAndNothingToReport = function isInstalledAndNothingToReport(app) {
  return !hasPendingUpdate(app) && !isUnderMaintenance(app) && app.installed;
};