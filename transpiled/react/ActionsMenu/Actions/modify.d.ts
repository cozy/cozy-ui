export function modify(): {
    name: string;
    icon: typeof PenIcon;
    label: any;
    action: (docs: any, { client }: {
        client: any;
    }) => void;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import PenIcon from "../../Icons/Pen";
import React from "react";
