export default Filename;
declare function Filename({ icon, filename, extension, midEllipsis, variant, path }: {
    icon: any;
    filename: any;
    extension: any;
    midEllipsis: any;
    variant: any;
    path: any;
}): JSX.Element;
declare namespace Filename {
    namespace propTypes {
        export { iconPropType as icon };
        export const filename: PropTypes.Requireable<string>;
        export const extension: PropTypes.Requireable<string>;
        export const midEllipsis: PropTypes.Requireable<boolean>;
        export const variant: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const variant_1: string;
        export { variant_1 as variant };
        const midEllipsis_1: boolean;
        export { midEllipsis_1 as midEllipsis };
    }
}
import { iconPropType } from "../Icon";
import PropTypes from "prop-types";
