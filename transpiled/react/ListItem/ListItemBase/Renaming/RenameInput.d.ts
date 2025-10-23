export default RenameInput;
declare function RenameInput({ file, onClose }: {
    file: any;
    onClose: any;
}): JSX.Element;
declare namespace RenameInput {
    namespace propTypes {
        const file: PropTypes.Validator<object>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
