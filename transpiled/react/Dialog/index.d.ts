export default Dialog;
export { default as DialogActions } from "./DialogActions";
export { default as DialogContent } from "./DialogContent";
export { default as DialogContentText } from "./DialogContentText";
export { default as DialogTitle } from "./DialogTitle";
declare function Dialog({ className, ...props }: {
    [x: string]: any;
    className: any;
}): JSX.Element;
declare namespace Dialog {
    namespace defaultProps {
        const disableEnforceFocus: boolean;
    }
}
