export default IntentDialogOpener;
/**
 * Wrapper that adds an `onClick` handler to its children that opens a dialog
 * for the specified intent.
 */
declare function IntentDialogOpener(props: any): JSX.Element;
declare namespace IntentDialogOpener {
    namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactElementLike>;
        export const onComplete: PropTypes.Requireable<(...args: any[]) => any>;
        export const onDismiss: PropTypes.Requireable<(...args: any[]) => any>;
        export const action: PropTypes.Validator<string>;
        export const doctype: PropTypes.Validator<string>;
        export const closable: PropTypes.Validator<boolean>;
        export const showCloseButton: PropTypes.Validator<boolean>;
        export const tag: PropTypes.Validator<string>;
        export const Component: PropTypes.Requireable<object>;
        export { iframeProps };
    }
    namespace defaultProps {
        const tag_1: string;
        export { tag_1 as tag };
        const closable_1: boolean;
        export { closable_1 as closable };
        export { Dialog as Component };
        const showCloseButton_1: boolean;
        export { showCloseButton_1 as showCloseButton };
    }
}
import PropTypes from "prop-types";
import { iframeProps } from "../IntentIframe";
import Dialog from "../Dialog";
