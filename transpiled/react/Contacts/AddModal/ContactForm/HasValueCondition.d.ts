export default HasValueCondition;
declare function HasValueCondition({ children, otherCondition, name }: {
    children: any;
    otherCondition: any;
    name: any;
}): JSX.Element;
declare namespace HasValueCondition {
    namespace defaultProps {
        const otherCondition: undefined;
    }
    namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactElementLike>;
        export const name: PropTypes.Validator<string>;
        const otherCondition_1: PropTypes.Requireable<boolean>;
        export { otherCondition_1 as otherCondition };
    }
}
import PropTypes from "prop-types";
