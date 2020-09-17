export const getCurrentStatusLabel = app => {
  if (hasPendingUpdate(app)) return 'update'
  if (isUnderMaintenance(app)) return 'maintenance'
  if (isInstalledAndNothingToReport(app)) return 'installed'
  return null
}

export const hasPendingUpdate = app => {
  return !!app.availableVersion
}

export const isUnderMaintenance = app => {
  return !hasPendingUpdate(app) && app.maintenance
}

/* installed here means no actions needed */
export const isInstalledAndNothingToReport = app => {
  return !hasPendingUpdate(app) && !isUnderMaintenance(app) && app.installed
}
