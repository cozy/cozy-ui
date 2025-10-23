export default FileInput;
declare function FileInput({ children, className, disabled, hidden, multiple, onChange, ...inputProps }: {
    [x: string]: any;
    children: any;
    className: any;
    disabled: any;
    hidden: any;
    multiple: any;
    onChange: any;
}): JSX.Element;
declare namespace FileInput {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const className: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
        const hidden: PropTypes.Requireable<boolean>;
        const multiple: PropTypes.Requireable<boolean>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const hidden_1: boolean;
        export { hidden_1 as hidden };
        const multiple_1: boolean;
        export { multiple_1 as multiple };
    }
}
import PropTypes from "prop-types";
