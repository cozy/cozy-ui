export default AppTitle;
declare function AppTitle({ slug, tag, className, children, ...otherProps }: {
    [x: string]: any;
    slug: any;
    tag: any;
    className: any;
    children: any;
}): JSX.Element;
declare namespace AppTitle {
    namespace propTypes {
        const slug: PropTypes.Requireable<string>;
        const tag: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const tag_1: string;
        export { tag_1 as tag };
    }
}
import PropTypes from "prop-types";
