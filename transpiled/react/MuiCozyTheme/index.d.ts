export default MuiCozyTheme;
declare function MuiCozyTheme({ type, variant, children }: {
    type: any;
    variant: any;
    children: any;
}): JSX.Element;
declare namespace MuiCozyTheme {
    namespace propTypes {
        const type: PropTypes.Requireable<string>;
        const variant: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const type_1: string;
        export { type_1 as type };
        const variant_1: string;
        export { variant_1 as variant };
    }
}
import PropTypes from "prop-types";
