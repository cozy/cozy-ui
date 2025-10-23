export default LoadMore;
declare function LoadMore({ fetchMore, label }: {
    fetchMore: any;
    label: any;
}): JSX.Element;
declare namespace LoadMore {
    namespace propTypes {
        const fetchMore: PropTypes.Validator<(...args: any[]) => any>;
        const label: PropTypes.Validator<string>;
    }
}
import PropTypes from "prop-types";
