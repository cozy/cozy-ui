export default Radio;
/**
 * @deprecated Please use [Radios](#/Radios)
 */
declare function Radio(props: any): JSX.Element;
declare namespace Radio {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const value: PropTypes.Requireable<string>;
        const name: PropTypes.Requireable<string>;
        const error: PropTypes.Requireable<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const label: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const error_1: boolean;
        export { error_1 as error };
        export const gutter: boolean;
    }
}
import PropTypes from "prop-types";
