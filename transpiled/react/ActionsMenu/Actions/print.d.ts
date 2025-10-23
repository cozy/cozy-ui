export function print(): {
    name: string;
    icon: typeof PrinterIcon;
    label: any;
    disabled: (docs: any) => boolean;
    displayCondition: (docs: any) => any;
    action: (docs: any, { client, webviewIntent }: {
        client: any;
        webviewIntent: any;
    }) => Promise<any>;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import PrinterIcon from "../../Icons/Printer";
import React from "react";
