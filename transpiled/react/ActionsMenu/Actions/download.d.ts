export function download({ encryptedUrl }: {
    encryptedUrl: any;
}): {
    name: string;
    icon: typeof DownloadIcon;
    label: any;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    action: (docs: any, { client, webviewIntent, driveId }: {
        client: any;
        webviewIntent: any;
        driveId: any;
    }) => any;
};
import DownloadIcon from "../../Icons/Download";
import React from "react";
