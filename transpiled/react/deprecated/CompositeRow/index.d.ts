export default CompositeRow;
/**
 * A ready-made row layout for presenting rich information.
 *
 * @deprecated Please use [List](#/List)
 */
declare function CompositeRow({ style, className, primaryText, primaryTextClassName, secondaryTextClassName, secondaryText, image, right, actions, dense, ...rest }: {
    [x: string]: any;
    style: any;
    className: any;
    primaryText: any;
    primaryTextClassName: any;
    secondaryTextClassName: any;
    secondaryText: any;
    image: any;
    right: any;
    actions: any;
    dense: any;
}): JSX.Element;
declare namespace CompositeRow {
    namespace propTypes {
        const style: PropTypes.Requireable<object>;
        const className: PropTypes.Requireable<string>;
        const primaryText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const secondaryText: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const primaryTextClassName: PropTypes.Requireable<string>;
        const secondaryTextClassName: PropTypes.Requireable<string>;
        const image: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const actions: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const right: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const dense: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
