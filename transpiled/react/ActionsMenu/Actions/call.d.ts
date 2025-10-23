export function call(): {
    name: string;
    icon: typeof TelephoneIcon;
    label: any;
    action: (docs: any) => void;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import TelephoneIcon from "../../Icons/Telephone";
import React from "react";
