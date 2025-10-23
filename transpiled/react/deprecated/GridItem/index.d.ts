export default GridItem;
declare function GridItem({ onClick, children }: {
    onClick: any;
    children: any;
}): JSX.Element;
declare namespace GridItem {
    namespace propTypes {
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
}
import PropTypes from "prop-types";
