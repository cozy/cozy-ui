export default PasswordInput;
declare function PasswordInput(props: any): JSX.Element;
declare namespace PasswordInput {
    namespace propTypes {
        const showStrength: PropTypes.Requireable<boolean>;
        const error: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const showStrength_1: boolean;
        export { showStrength_1 as showStrength };
        const error_1: boolean;
        export { error_1 as error };
    }
}
import PropTypes from "prop-types";
