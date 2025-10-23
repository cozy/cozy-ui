export const iconPropType: PropTypes.Requireable<string | object>;
export default Icon;
import PropTypes from "prop-types";
declare function Icon(props: any): any;
declare namespace Icon {
    function isProperIcon(icon: any): any;
    namespace propTypes {
        export { iconPropType as icon };
        export const width: PropTypes.Requireable<string | number>;
        export const height: PropTypes.Requireable<string | number>;
        export const color: PropTypes.Requireable<string | object>;
        export const style: PropTypes.Requireable<object>;
        export const className: PropTypes.Requireable<string>;
        export const preserveColor: PropTypes.Requireable<boolean>;
        export const size: PropTypes.Requireable<string | number>;
        export const rotate: PropTypes.Requireable<number>;
        export const spin: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const spin_1: boolean;
        export { spin_1 as spin };
    }
}
