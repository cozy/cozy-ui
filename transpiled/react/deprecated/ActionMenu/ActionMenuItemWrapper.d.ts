export default ActionMenuItemWrapper;
declare function ActionMenuItemWrapper({ icon, className, isEnabled, componentsProps, children, onClick }: {
    icon: any;
    className: any;
    isEnabled: any;
    componentsProps: any;
    children: any;
    onClick: any;
}): JSX.Element;
declare namespace ActionMenuItemWrapper {
    namespace defaultProps {
        const className: string;
        const isEnabled: boolean;
        const componentsProps: {};
    }
    namespace propTypes {
        export { iconPropType as icon };
        const className_1: PropTypes.Requireable<string>;
        export { className_1 as className };
        const isEnabled_1: PropTypes.Requireable<boolean>;
        export { isEnabled_1 as isEnabled };
        const componentsProps_1: PropTypes.Requireable<PropTypes.InferProps<{
            iconProps: PropTypes.Requireable<object>;
            typographyProps: PropTypes.Requireable<object>;
        }>>;
        export { componentsProps_1 as componentsProps };
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import { iconPropType } from "../../Icon";
import PropTypes from "prop-types";
