export default Checkbox;
declare function Checkbox({ className, label, labelPlacement, onChange, children, ...props }: {
    [x: string]: any;
    className: any;
    label: any;
    labelPlacement: any;
    onChange: any;
    children: any;
}): JSX.Element;
declare namespace Checkbox {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const value: PropTypes.Requireable<string>;
        const error: PropTypes.Requireable<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const mixed: PropTypes.Requireable<boolean>;
        const disableEffect: PropTypes.Requireable<boolean>;
        const size: PropTypes.Requireable<string>;
        const labelPlacement: PropTypes.Requireable<string>;
        const label: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const value_1: string;
        export { value_1 as value };
        const error_1: boolean;
        export { error_1 as error };
        const mixed_1: boolean;
        export { mixed_1 as mixed };
        const disableEffect_1: boolean;
        export { disableEffect_1 as disableEffect };
        const size_1: string;
        export { size_1 as size };
        const labelPlacement_1: string;
        export { labelPlacement_1 as labelPlacement };
        const label_1: string;
        export { label_1 as label };
    }
}
import PropTypes from "prop-types";
