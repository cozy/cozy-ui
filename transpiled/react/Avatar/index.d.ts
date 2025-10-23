export default Avatar;
declare function Avatar({ className, color, size, border, innerBorder, disabled, display, ...props }: {
    [x: string]: any;
    className: any;
    color: any;
    size: any;
    border: any;
    innerBorder: any;
    disabled: any;
    display: any;
}): JSX.Element;
declare namespace Avatar {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string | number>;
        const color: PropTypes.Requireable<string>;
        const display: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const display_1: string;
        export { display_1 as display };
        const size_1: string;
        export { size_1 as size };
    }
}
import PropTypes from "prop-types";
