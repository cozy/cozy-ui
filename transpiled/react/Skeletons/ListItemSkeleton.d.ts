export default ListItemSkeleton;
declare function ListItemSkeleton({ hasSecondary, divider, gutters }: {
    hasSecondary: any;
    divider: any;
    gutters: any;
}): JSX.Element;
declare namespace ListItemSkeleton {
    namespace propTypes {
        const hasSecondary: PropTypes.Requireable<boolean>;
        const divider: PropTypes.Requireable<boolean>;
        const gutters: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
