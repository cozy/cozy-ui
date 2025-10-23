export function Spinner({ t, loadingType, middle, noMargin, color, size, className }: {
    t: any;
    loadingType: any;
    middle: any;
    noMargin: any;
    color: any;
    size: any;
    className: any;
}): JSX.Element;
export namespace Spinner {
    namespace propTypes {
        const loadingType: PropTypes.Requireable<string>;
        const middle: PropTypes.Requireable<boolean>;
        const noMargin: PropTypes.Requireable<boolean>;
        const color: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const loadingType_1: string;
        export { loadingType_1 as loadingType };
        const middle_1: boolean;
        export { middle_1 as middle };
        const noMargin_1: boolean;
        export { noMargin_1 as noMargin };
        const color_1: string;
        export { color_1 as color };
        const size_1: string;
        export { size_1 as size };
        const className_1: string;
        export { className_1 as className };
    }
}
declare var _default: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
export default _default;
import PropTypes from "prop-types";
import React from "react";
