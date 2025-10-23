export const APP_STATUS = {
  installed: 'installed',
  maintenance: 'maintenance',
  update: 'update'
}

export const getCurrentStatusLabel = app => {
  if (hasPendingUpdate(app)) return APP_STATUS.update
  if (isUnderMaintenance(app)) return APP_STATUS.maintenance
  if (isInstalledAndNothingToReport(app)) return APP_STATUS.installed
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
