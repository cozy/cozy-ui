export function Infos({ description, action, dismissAction, dismissButtonProps, theme, className }: {
    description: any;
    action: any;
    dismissAction: any;
    dismissButtonProps: any;
    theme: any;
    className: any;
}): JSX.Element;
export namespace Infos {
    namespace propTypes {
        const description: PropTypes.Validator<PropTypes.ReactElementLike>;
        const action: PropTypes.Requireable<PropTypes.ReactElementLike>;
        const dismissAction: PropTypes.Requireable<(...args: any[]) => any>;
        const className: PropTypes.Requireable<string>;
        const theme: PropTypes.Requireable<string>;
        const dismissButtonProps: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const theme_1: string;
        export { theme_1 as theme };
    }
}
export default InfosMigration;
import PropTypes from "prop-types";
declare const InfosMigration: React.NamedExoticComponent<object>;
import React from "react";
