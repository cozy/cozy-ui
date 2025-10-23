export function isValidURL(url: any): boolean;
export function makeValidUrl(str: any): any;
export function makeValidFileName(fileName: any): any;
export function makeHumanReadableFileName(fileName: any): any;
export function checkAndSaveShortcut({ fileName, url, isEditing, onSave, onClose, showAlert, t }: {
    fileName: any;
    url: any;
    isEditing: any;
    onSave: any;
    onClose: any;
    showAlert: any;
    t: any;
}): Promise<void>;
