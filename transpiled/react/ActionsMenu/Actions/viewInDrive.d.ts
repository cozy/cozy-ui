export function viewInDrive(): {
    name: string;
    icon: typeof FolderOpenIcon;
    label: any;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    action: (docs: any, { client }: {
        client: any;
    }) => void;
};
import FolderOpenIcon from "../../Icons/FolderOpen";
import React from "react";
