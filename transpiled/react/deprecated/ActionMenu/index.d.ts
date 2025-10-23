export default ActionMenu;
/**
 * @deprecated This component is depreacated, please use [ActionsMenu](#/ActionsMenu) instead.
 */
declare function ActionMenu({ className, anchorElRef, autoclose, popperOptions, children, onClose, placement, preventOverflow, containerElRef }: {
    className: any;
    anchorElRef: any;
    autoclose: any;
    popperOptions: any;
    children: any;
    onClose: any;
    placement: any;
    preventOverflow: any;
    containerElRef: any;
}): JSX.Element;
declare namespace ActionMenu {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const anchorElRef: PropTypes.Requireable<object>;
        const autoclose: PropTypes.Requireable<boolean>;
        const popperOptions: PropTypes.Requireable<PropTypes.InferProps<{
            placement: PropTypes.Requireable<string>;
        }>>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const placement: PropTypes.Requireable<string>;
        const preventOverflow: PropTypes.Requireable<boolean>;
        const containerElRef: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        export namespace popperOptions_1 {
            const placement_1: string;
            export { placement_1 as placement };
        }
        export { popperOptions_1 as popperOptions };
        const autoclose_1: boolean;
        export { autoclose_1 as autoclose };
    }
}
import { ActionMenuHeader } from "./ActionMenuHeader";
import { ActionMenuItem } from "./ActionMenuItem";
import { ActionMenuRadio } from "./ActionMenuRadio";
import ActionMenuItemWrapper from "./ActionMenuItemWrapper";
import ActionMenuWithClose from "./ActionMenuWithClose";
import ActionMenuWrapper from "./ActionMenuWrapper";
import ActionsItems from "./Actions/ActionsItems";
import PropTypes from "prop-types";
export { ActionMenuHeader, ActionMenuItem, ActionMenuRadio, ActionMenuItemWrapper, ActionMenuWithClose, ActionMenuWrapper, ActionsItems };
