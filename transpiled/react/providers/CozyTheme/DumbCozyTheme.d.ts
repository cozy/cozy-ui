export default DumbCozyTheme;
declare function DumbCozyTheme({ variant, className, ignoreItself, settingsThemeType, children }: {
    variant: any;
    className: any;
    ignoreItself: any;
    settingsThemeType: any;
    children: any;
}): JSX.Element;
declare namespace DumbCozyTheme {
    namespace propTypes {
        const variant: PropTypes.Requireable<string>;
        const ignoreItself: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
        const settingsThemeType: PropTypes.Requireable<string>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
}
import PropTypes from "prop-types";
