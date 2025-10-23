export function NavItem({ className, children, secondary, ...restProps }: {
    [x: string]: any;
    className: any;
    children: any;
    secondary: any;
}): JSX.Element;
export function NavText({ className, children }: {
    className: any;
    children: any;
}): JSX.Element;
export namespace NavLink {
    const className: string;
    const activeClassName: string;
}
export function genNavLink(RRNavLink: any): ({ to, children, ...rest }: {
    [x: string]: any;
    to: any;
    children: any;
}) => JSX.Element;
export function genNavLinkForV6(RRNavLink: any): React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export function NavIcon({ className, icon }: {
    className: any;
    icon: any;
}): JSX.Element;
export const NavDesktopLimiter: any;
export function NavDesktopDropdown({ label, children, defaultOpen, limit }: {
    label: any;
    children: any;
    defaultOpen?: boolean | undefined;
    limit?: number | undefined;
}): JSX.Element | null;
export default Nav;
import React from "react";
declare function Nav({ className, children }: {
    className: any;
    children: any;
}): JSX.Element;
declare namespace Nav {
    export { NavItem };
}
