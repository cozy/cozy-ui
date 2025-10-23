export function copyToClipboard(): {
    name: string;
    icon: typeof CopyIcon;
    label: any;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    action: (_: any, { showAlert, copyValue }: {
        showAlert: any;
        copyValue: any;
    }) => Promise<false | undefined>;
};
import CopyIcon from "../../Icons/Copy";
import React from "react";
