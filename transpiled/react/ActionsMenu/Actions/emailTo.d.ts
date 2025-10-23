export function emailTo(): {
    name: string;
    icon: typeof EmailIcon;
    label: any;
    action: (docs: any) => void;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import EmailIcon from "../../Icons/Email";
import React from "react";
