export function addToFavorites({ showAlert }: {
    showAlert: any;
}): {
    name: string;
    icon: typeof StarOutlineIcon;
    label: any;
    displayCondition: (docs: any) => any;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    action: (docs: any, { client }: {
        client: any;
    }) => Promise<void>;
};
import StarOutlineIcon from "../../Icons/StarOutline";
import React from "react";
