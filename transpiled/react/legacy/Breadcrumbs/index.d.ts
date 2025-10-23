export default Breadcrumbs;
declare function Breadcrumbs({ items, className, style }: {
    items: any;
    className: any;
    style: any;
}): JSX.Element;
declare namespace Breadcrumbs {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const items: PropTypes.Requireable<(PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            onClick: PropTypes.Requireable<(...args: any[]) => any>;
            tag: PropTypes.Requireable<PropTypes.ReactElementLike>;
        }> | null)[]>;
    }
}
import PropTypes from "prop-types";
