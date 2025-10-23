export default CloseButton;
declare function CloseButton({ onClick, ...props }: {
    [x: string]: any;
    onClick: any;
}): JSX.Element;
declare namespace CloseButton {
    namespace propTypes {
        const onClick: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
