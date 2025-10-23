export namespace APP_STATUS {
    const installed: string;
    const maintenance: string;
    const update: string;
}
export function getCurrentStatusLabel(app: any): string | null;
export function hasPendingUpdate(app: any): boolean;
export function isUnderMaintenance(app: any): any;
export function isInstalledAndNothingToReport(app: any): any;
