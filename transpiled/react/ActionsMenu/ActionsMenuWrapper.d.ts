export default ActionsMenuWrapper;
declare function ActionsMenuWrapper({ children, autoClose, open, onClose, ...props }: {
    [x: string]: any;
    children: any;
    autoClose: any;
    open: any;
    onClose: any;
}): JSX.Element;
declare namespace ActionsMenuWrapper {
    namespace propTypes {
        const autoClose: PropTypes.Requireable<boolean>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
