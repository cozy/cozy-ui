export function makeAction({ name, label, icon, disabled, displayCondition, action }: {
    name: any;
    label: any;
    icon: any;
    disabled: any;
    displayCondition: any;
    action: any;
}): {
    name: any;
    icon: any;
    label: any;
    disabled: any;
    displayCondition: any;
    action: any;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import React from "react";
