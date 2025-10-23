export default virtuosoComponentsDnd;
/**
 Be aware that context is spread to every components but should not be spread to Table components
 so we desctrure it from props, but don't spread to child to avoid its presence in DOM
*/
declare const virtuosoComponentsDnd: {
    Scroller: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    TableRow: (props: any) => JSX.Element;
    Table: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    TableHead: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    TableBody: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    TableFooter: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
};
import React from "react";
