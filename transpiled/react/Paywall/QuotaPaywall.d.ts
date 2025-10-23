export default QuotaPaywall;
/**
 * Paywall displayed when user disk space is full
 */
declare function QuotaPaywall({ onClose }: {
    onClose: any;
}): JSX.Element;
declare namespace QuotaPaywall {
    namespace propTypes {
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
