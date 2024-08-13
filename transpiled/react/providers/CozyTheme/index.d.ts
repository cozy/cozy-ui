export const CozyThemeContext: React.Context<any>;
export function useCozyTheme(): {
    type: 'light' | 'dark';
    variant: 'normal' | 'inverted';
    isLight: boolean;
};
export default CozyTheme;
import React from "react";
declare function CozyTheme({ ignoreCozySettings, ...props }: {
    [x: string]: any;
    ignoreCozySettings: any;
}): JSX.Element;
declare namespace CozyTheme {
    namespace propTypes {
        const variant: PropTypes.Requireable<string>;
        const ignoreItself: PropTypes.Requireable<boolean>;
        const ignoreCozySettings: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        const variant_1: string;
        export { variant_1 as variant };
        const ignoreCozySettings_1: boolean;
        export { ignoreCozySettings_1 as ignoreCozySettings };
        const ignoreItself_1: boolean;
        export { ignoreItself_1 as ignoreItself };
    }
}
import PropTypes from "prop-types";
