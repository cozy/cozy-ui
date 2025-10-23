export default DialogBackButton;
declare function DialogBackButton({ onClick, ...props }: {
    [x: string]: any;
    onClick: any;
}): JSX.Element;
declare namespace DialogBackButton {
    namespace propTypes {
        const onClick: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
