export default FieldInputWrapper;
declare function FieldInputWrapper({ input, attributes: { component, ...restAttributes }, variant, fullWidth, ...props }: {
    [x: string]: any;
    input: any;
    attributes: {
        [x: string]: any;
        component: any;
    };
    variant: any;
    fullWidth: any;
}): JSX.Element;
declare namespace FieldInputWrapper {
    export { FieldInputWrapperPropTypes as propTypes };
    export namespace defaultProps {
        const variant: string;
        const fullWidth: boolean;
    }
}
import { FieldInputWrapperPropTypes } from "../types";
