export default Field;
declare function Field(props: any): JSX.Element;
declare namespace Field {
    namespace propTypes {
        const disabled: PropTypes.Requireable<boolean>;
        const labelProps: PropTypes.Requireable<object>;
        const fieldProps: PropTypes.Requireable<object>;
        const fullwidth: PropTypes.Requireable<boolean>;
        const label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const id: PropTypes.Requireable<string>;
        const name: PropTypes.Requireable<string>;
        const type: PropTypes.Requireable<string>;
        function value(props: any, propName: any, componentName: any): Error | undefined;
        const placeholder: PropTypes.Requireable<string>;
        const error: PropTypes.Requireable<boolean>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const onKeyUp: PropTypes.Requireable<(...args: any[]) => any>;
        const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
        const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        const side: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const size: PropTypes.Requireable<string>;
        const secondaryLabels: PropTypes.Requireable<object>;
        const secondaryComponent: PropTypes.Requireable<(...args: any[]) => any>;
        const autoCapitalize: PropTypes.Requireable<string>;
        const autoComplete: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const fieldProps_1: {};
        export { fieldProps_1 as fieldProps };
        const labelProps_1: {};
        export { labelProps_1 as labelProps };
        const fullwidth_1: boolean;
        export { fullwidth_1 as fullwidth };
        const label_1: string;
        export { label_1 as label };
        const id_1: string;
        export { id_1 as id };
        const type_1: string;
        export { type_1 as type };
        const value_1: undefined;
        export { value_1 as value };
        const placeholder_1: string;
        export { placeholder_1 as placeholder };
        const error_1: boolean;
        export { error_1 as error };
        const size_1: string;
        export { size_1 as size };
        const secondaryLabels_1: {};
        export { secondaryLabels_1 as secondaryLabels };
    }
}
export function FieldContainer(props: any): JSX.Element;
import PropTypes from "prop-types";
