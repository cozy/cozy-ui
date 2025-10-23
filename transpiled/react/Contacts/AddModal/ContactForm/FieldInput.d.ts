export default FieldInput;
declare function FieldInput({ name, labelProps, className, attributes: { subFields, ...restAttributes }, contacts, error, helperText, label, isInvisible, required }: {
    name: any;
    labelProps: any;
    className: any;
    attributes: {
        [x: string]: any;
        subFields: any;
    };
    contacts: any;
    error: any;
    helperText: any;
    label: any;
    isInvisible: any;
    required: any;
}): JSX.Element;
declare namespace FieldInput {
    namespace propTypes {
        export const name: PropTypes.Validator<string>;
        export const className: PropTypes.Requireable<string>;
        export { labelPropTypes as labelProps };
        export { fieldInputAttributesTypes as attributes };
        export const isInvisible: PropTypes.Requireable<boolean>;
        export const contacts: PropTypes.Requireable<PropTypes.InferProps<{
            data: PropTypes.Requireable<(object | null)[]>;
        }>>;
        export const id: PropTypes.Requireable<string>;
        export const label: PropTypes.Requireable<string>;
        export const required: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        export const labelProps: null;
        const required_1: boolean;
        export { required_1 as required };
    }
}
import PropTypes from "prop-types";
import { labelPropTypes } from "../types";
import { fieldInputAttributesTypes } from "../types";
