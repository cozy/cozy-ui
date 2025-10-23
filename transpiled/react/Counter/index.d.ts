export default Counter;
declare function Counter({ count, max }: {
    count: any;
    max: any;
}): JSX.Element;
declare namespace Counter {
    namespace propTypes {
        const count: PropTypes.Requireable<number>;
        const max: PropTypes.Requireable<number>;
    }
    namespace defaultProps {
        const count_1: number;
        export { count_1 as count };
        const max_1: number;
        export { max_1 as max };
    }
}
import PropTypes from "prop-types";
