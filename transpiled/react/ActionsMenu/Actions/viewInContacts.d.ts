export function viewInContacts(): {
    name: string;
    icon: typeof OpenappIcon;
    label: any;
    action: (docs: any, { client }: {
        client: any;
    }) => void;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import OpenappIcon from "../../Icons/Openapp";
import React from "react";
