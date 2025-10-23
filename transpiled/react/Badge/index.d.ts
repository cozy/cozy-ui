export default Badge;
declare function Badge({ classes, size, withBorder, overlap: overlapProp, color, ...props }: {
    [x: string]: any;
    classes?: {} | undefined;
    size: any;
    withBorder: any;
    overlap: any;
    color: any;
}): JSX.Element;
declare namespace Badge {
    namespace propTypes {
        const anchorOrigin: PropTypes.Requireable<PropTypes.InferProps<{
            horizontal: PropTypes.Requireable<string>;
            vertical: PropTypes.Requireable<string>;
        }>>;
        const className: PropTypes.Requireable<string>;
        const color: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string>;
        const showZero: PropTypes.Requireable<boolean>;
        const variant: PropTypes.Requireable<string>;
        const withBorder: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        export namespace anchorOrigin_1 {
            const horizontal: string;
            const vertical: string;
        }
        export { anchorOrigin_1 as anchorOrigin };
        const size_1: string;
        export { size_1 as size };
        const showZero_1: boolean;
        export { showZero_1 as showZero };
        const withBorder_1: boolean;
        export { withBorder_1 as withBorder };
        export const overlap: string;
    }
}
import PropTypes from "prop-types";
