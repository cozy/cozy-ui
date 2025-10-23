export function SquareAppIcon({ display, name, variant, IconContent, description, hideShortcutBadge, ...appIconProps }: {
    [x: string]: any;
    display: any;
    name: any;
    variant: any;
    IconContent: any;
    description: any;
    hideShortcutBadge?: boolean | undefined;
}): JSX.Element;
export namespace SquareAppIcon {
    namespace propTypes {
        const display: PropTypes.Requireable<string>;
        const description: PropTypes.Requireable<string>;
        const name: PropTypes.Requireable<string>;
        const variant: PropTypes.Requireable<string>;
        const IconContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        const display_1: string;
        export { display_1 as display };
        const variant_1: string;
        export { variant_1 as variant };
    }
}
export default SquareAppIcon;
import PropTypes from "prop-types";
