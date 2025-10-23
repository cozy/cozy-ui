export default MobileHeader;
declare function MobileHeader({ filter, placeholder, onChange, onDismiss }: {
    filter: any;
    placeholder: any;
    onChange: any;
    onDismiss: any;
}): JSX.Element;
declare namespace MobileHeader {
    namespace propTypes {
        const filter: PropTypes.Requireable<string>;
        const placeholder: PropTypes.Requireable<string>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const onDismiss: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
