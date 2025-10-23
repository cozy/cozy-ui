export default Thumbnail;
/**
 * Wrap an element with an outline or a stacked outline
 * @param {object} params
 * @param {string} params.className
 * @param {boolean} params.isStacked - Either we want the stacking effect
 * @param {node} params.children
 * @returns Wrapped element
 */
declare function Thumbnail({ className, isStacked, children, ...props }: {
    className: string;
    isStacked: boolean;
    children: node;
}): JSX.Element;
declare namespace Thumbnail {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const isStacked: PropTypes.Requireable<boolean>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
