export default IntentOpener;
/**
 * Wrapper that adds an `onClick` handler to its children that opens a modal
 * for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 *
 * @deprecated Please use IntentDialogOpener instead
 */
declare function IntentOpener(props: any): JSX.Element;
declare namespace IntentOpener {
    namespace propTypes {
        const children: PropTypes.Validator<PropTypes.ReactElementLike>;
        const onComplete: PropTypes.Requireable<(...args: any[]) => any>;
        const onDismiss: PropTypes.Requireable<(...args: any[]) => any>;
        const action: PropTypes.Validator<string>;
        const doctype: PropTypes.Validator<string>;
        const into: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const tag: string;
        const closable: boolean;
    }
}
import PropTypes from "prop-types";
