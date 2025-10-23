export default OnlyOfficePaywall;
declare function OnlyOfficePaywall({ onClose, isPublic }: {
    onClose: any;
    isPublic: any;
}): JSX.Element;
declare namespace OnlyOfficePaywall {
    namespace propTypes {
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const isPublic: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const isPublic_1: boolean;
        export { isPublic_1 as isPublic };
    }
}
import PropTypes from "prop-types";
