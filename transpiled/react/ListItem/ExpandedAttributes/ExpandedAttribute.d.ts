export default ExpandedAttribute;
declare function ExpandedAttribute({ label, value, setAlertProps }: {
    label: any;
    value: any;
    setAlertProps: any;
}): JSX.Element;
declare namespace ExpandedAttribute {
    namespace propTypes {
        const label: PropTypes.Requireable<string>;
        const value: PropTypes.Requireable<string | number>;
        const setAlertProps: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
