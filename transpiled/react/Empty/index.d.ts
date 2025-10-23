export function Empty({ icon, iconSize, title, text, children, className, centered, componentsProps, ...restProps }: {
    [x: string]: any;
    icon: any;
    iconSize: any;
    title: any;
    text: any;
    children: any;
    className: any;
    centered: any;
    componentsProps: any;
}): JSX.Element;
export namespace Empty {
    namespace propTypes {
        export { iconPropType as icon };
        export const iconSize: PropTypes.Requireable<string>;
        export const title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const text: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const centered: PropTypes.Requireable<boolean>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const componentsProps: PropTypes.Requireable<PropTypes.InferProps<{
            icon: PropTypes.Requireable<object>;
            title: PropTypes.Requireable<object>;
            text: PropTypes.Requireable<object>;
            childrenContainer: PropTypes.Requireable<object>;
        }>>;
        export const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const iconSize_1: string;
        export { iconSize_1 as iconSize };
    }
}
export function EmptySubTitle({ ...restProps }: {
    [x: string]: any;
}): JSX.Element;
export default Empty;
import { iconPropType } from "../Icon";
import PropTypes from "prop-types";
