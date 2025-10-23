export function ActionMenuItem({ left, children, right, onClick, className, contentSpacing }: {
    left: any;
    children: any;
    right: any;
    onClick: any;
    className: any;
    contentSpacing: any;
}): JSX.Element;
export namespace ActionMenuItem {
    namespace propTypes {
        export const left: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const right: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        export const className: PropTypes.Requireable<string>;
        export { spacingProp as contentSpacing };
    }
    namespace defaultProps {
        const contentSpacing: string;
    }
}
import PropTypes from "prop-types";
import { spacingProp } from "../../Stack";
