export function handleUpload({ event, t, fileInputRef, status, onUpload, setStatus, setTimestamp, setShowMenu, showAlert }: {
    event: any;
    t: any;
    fileInputRef: any;
    status: any;
    onUpload: any;
    setStatus: any;
    setTimestamp: any;
    setShowMenu: any;
    showAlert: any;
}): Promise<void>;
export function handleDelete({ t, status, onDelete, setShowMenu, setStatus, setTimestamp, showAlert }: {
    t: any;
    status: any;
    onDelete: any;
    setShowMenu: any;
    setStatus: any;
    setTimestamp: any;
    showAlert: any;
}): Promise<void>;
