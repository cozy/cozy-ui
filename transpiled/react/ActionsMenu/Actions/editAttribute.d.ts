export function editAttribute(): {
    name: string;
    icon: typeof TextInfoIcon;
    label: any;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    action: (docs: any, { editAttributeCallback }: {
        editAttributeCallback: any;
    }) => void;
};
import TextInfoIcon from "../../Icons/TextInfo";
import React from "react";
