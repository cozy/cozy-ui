export default PasswordSharingPaywall;
declare function PasswordSharingPaywall({ onClose }: {
    onClose: any;
}): JSX.Element;
declare namespace PasswordSharingPaywall {
    namespace propTypes {
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
