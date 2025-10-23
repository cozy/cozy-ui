export function IntentHeader({ appName, appEditor, appIcon, className }: {
    appName: any;
    appEditor: any;
    appIcon: any;
    className: any;
}): JSX.Element;
export namespace IntentHeader {
    namespace propTypes {
        const appIcon: PropTypes.Requireable<string>;
        const appEditor: PropTypes.Requireable<string>;
        const appName: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        const appIcon_1: string;
        export { appIcon_1 as appIcon };
        const appEditor_1: string;
        export { appEditor_1 as appEditor };
        const appName_1: string;
        export { appName_1 as appName };
    }
}
export default IntentHeader;
import PropTypes from "prop-types";
