export const spacingProp: PropTypes.Requireable<string>;
export default Stack;
import PropTypes from "prop-types";
declare function Stack({ spacing, tag: Tag, ...props }: {
    [x: string]: any;
    spacing: any;
    tag: any;
}): JSX.Element;
declare namespace Stack {
    namespace propTypes {
        export { spacingProp as spacing };
    }
    namespace defaultProps {
        const spacing: string;
        const tag: string;
    }
}
