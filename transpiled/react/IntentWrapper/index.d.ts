export function IntentWrapper({ children, appName, appEditor, appIcon, iconSrc, iconDest, className }: {
    children: any;
    appName: any;
    appEditor: any;
    appIcon: any;
    iconSrc: any;
    iconDest: any;
    className: any;
}): JSX.Element;
export namespace IntentWrapper {
    namespace propTypes {
        const appIcon: PropTypes.Requireable<string>;
        const appEditor: PropTypes.Requireable<string>;
        const appName: PropTypes.Requireable<string>;
        const iconSrc: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const iconDest: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
export default IntentWrapper;
import PropTypes from "prop-types";
