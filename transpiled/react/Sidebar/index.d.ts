export default Sidebar;
declare function Sidebar({ children, className, ...restProps }: {
    [x: string]: any;
    children: any;
    className: any;
}): JSX.Element;
declare namespace Sidebar {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const className: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
