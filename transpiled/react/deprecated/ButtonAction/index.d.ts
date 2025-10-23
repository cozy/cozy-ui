export default ButtonAction;
declare function ButtonAction(props: any): JSX.Element;
declare namespace ButtonAction {
    namespace propTypes {
        const type: PropTypes.Validator<string>;
        const label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const leftIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const rightIcon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const disabled: PropTypes.Requireable<boolean>;
        const compact: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const type_1: string;
        export { type_1 as type };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const compact_1: boolean;
        export { compact_1 as compact };
    }
}
import PropTypes from "prop-types";
