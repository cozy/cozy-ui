export function smsTo(): {
    name: string;
    icon: typeof CommentIcon;
    label: any;
    action: (docs: any) => void;
    Component: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import CommentIcon from "../../Icons/Comment";
import React from "react";
