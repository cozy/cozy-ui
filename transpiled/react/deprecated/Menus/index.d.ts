declare var _default: React.ComponentType<Pick<Pick<PropTypes.InferProps<{
    /** Disables the menu */
    disabled: PropTypes.Requireable<boolean>;
    /** Specifies a custom component for the opener */
    component: PropTypes.Requireable<PropTypes.ReactElementLike>;
    /** placement for the popover */
    placement: PropTypes.Requireable<string>;
}>, never> & Partial<Pick<PropTypes.InferProps<{
    /** Disables the menu */
    disabled: PropTypes.Requireable<boolean>;
    /** Specifies a custom component for the opener */
    component: PropTypes.Requireable<PropTypes.ReactElementLike>;
    /** placement for the popover */
    placement: PropTypes.Requireable<string>;
}>, "disabled" | "component" | "placement">> & Partial<Pick<{
    disabled: boolean;
    component: null;
    placement: string;
}, never>>, "disabled" | "component" | "placement"> & import("@material-ui/styles/withStyles/withStyles").StyledComponentProps<"root" | "paper">>;
export default _default;
export { MenuButton };
import PropTypes from "prop-types";
import React from "react";
import MenuButton from "../Button";
