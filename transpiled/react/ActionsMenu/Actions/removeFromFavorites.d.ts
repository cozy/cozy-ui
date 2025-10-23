export function removeFromFavorites({ showAlert }: {
    showAlert: any;
}): {
    name: string;
    icon: typeof StarIcon;
    label: any;
    displayCondition: (docs: any) => any;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    action: (docs: any, { client }: {
        client: any;
    }) => Promise<void>;
};
import StarIcon from "../../Icons/Star";
import React from "react";
