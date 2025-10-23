export default PermissionDialog;
/**
 * Dialog for confirmation actions linked to the Cozy system (permissions, authentication, etc.)
 */
declare function PermissionDialog({ open, icon, title, content, actions, actionsLayout, onClose }: {
    open: any;
    icon: any;
    title: any;
    content: any;
    actions: any;
    actionsLayout: any;
    onClose: any;
}): JSX.Element;
declare namespace PermissionDialog {
    namespace propTypes {
        const open: PropTypes.Validator<boolean>;
        const icon: PropTypes.Validator<(...args: any[]) => any>;
        const title: PropTypes.Validator<string>;
        const content: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const actions: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const actionsLayout: PropTypes.Requireable<string>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
