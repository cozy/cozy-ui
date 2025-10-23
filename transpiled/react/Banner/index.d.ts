export default Banner;
/**
 * A banner displays a prominent message and related optional actions.
 */
declare function Banner({ icon, bgcolor, className, text, buttonOne, buttonTwo, inline, noDivider, disableIconStyles }: {
    icon: any;
    bgcolor: any;
    className: any;
    text: any;
    buttonOne: any;
    buttonTwo: any;
    inline: any;
    noDivider: any;
    disableIconStyles: any;
}): JSX.Element;
declare namespace Banner {
    namespace propTypes {
        const icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const bgcolor: PropTypes.Requireable<string>;
        const text: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const buttonOne: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const buttonTwo: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const inline: PropTypes.Requireable<boolean>;
        const noDivider: PropTypes.Requireable<boolean>;
        const disableIconWrapper: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
