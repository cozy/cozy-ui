export function createSizeStyle(size: any): {
    '--circleSize': string;
};
export default Circle;
declare function Circle({ children, backgroundColor, size, className }: {
    children: any;
    backgroundColor: any;
    size: any;
    className: any;
}): JSX.Element;
declare namespace Circle {
    namespace propTypes {
        const backgroundColor: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string | number>;
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const size_1: string;
        export { size_1 as size };
        const className_1: string;
        export { className_1 as className };
    }
}
import PropTypes from "prop-types";
