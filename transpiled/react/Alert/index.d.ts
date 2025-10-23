export namespace AlertPropTypes {
    const className: PropTypes.Requireable<string>;
    const icon: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
    const severity: PropTypes.Requireable<string>;
    const block: PropTypes.Requireable<boolean>;
    const color: PropTypes.Requireable<string>;
    const square: PropTypes.Requireable<boolean>;
    const variant: PropTypes.Requireable<string>;
}
export namespace AlertDefaultProps {
    const severity_1: string;
    export { severity_1 as severity };
    const block_1: boolean;
    export { block_1 as block };
    const square_1: boolean;
    export { square_1 as square };
    const variant_1: string;
    export { variant_1 as variant };
}
export default Alert;
export type AlertProps = {
    /**
     * - Classname of the alert
     */
    className: string;
    /**
     * - Icon component to display in the alert (or false to hide it)
     */
    icon: React.FC<PropTypes.InferProps<typeof Icon.propTypes>> | false;
    /**
     * - Severity of the alert (default: primary)
     */
    severity: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
    /**
     * - Block the alert to the full width of its container (default: false)
     */
    block: boolean;
    /**
     * - Background color of the alert
     */
    color: string;
    /**
     * - Square the alert corners (default: false)
     */
    square: boolean;
    /**
     * - Variant of the alert (default: standard)
     */
    variant: 'standard' | 'outlined' | 'filled';
};
import PropTypes from "prop-types";
declare const Alert: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
import React from "react";
import Icon from "../Icon";
