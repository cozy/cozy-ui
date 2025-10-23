export default ListSkeleton;
declare function ListSkeleton({ count, hasSecondary, withSubheader, divider }: {
    count: any;
    hasSecondary: any;
    withSubheader: any;
    divider: any;
}): JSX.Element;
declare namespace ListSkeleton {
    namespace propTypes {
        const hasSecondary: PropTypes.Requireable<boolean>;
        const count: PropTypes.Requireable<number>;
        const divider: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const count_1: number;
        export { count_1 as count };
    }
}
import PropTypes from "prop-types";
