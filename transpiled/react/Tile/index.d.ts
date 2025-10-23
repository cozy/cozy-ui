export function TileDescription({ children, className }: {
    children: any;
    className: any;
}): JSX.Element;
export function TileTitle({ children, className, isMultiline }: {
    children: any;
    className: any;
    isMultiline: any;
}): JSX.Element;
export namespace TileTitle {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const isMultiline: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const isMultiline_1: boolean;
        export { isMultiline_1 as isMultiline };
    }
}
export function TileSubtitle({ children }: {
    children: any;
}): JSX.Element;
export function TileFooter({ children, className, isAccent }: {
    children: any;
    className: any;
    isAccent: any;
}): JSX.Element;
export namespace TileFooter {
    export namespace propTypes_1 {
        const className_1: PropTypes.Requireable<string>;
        export { className_1 as className };
        export const isAccent: PropTypes.Requireable<boolean>;
    }
    export { propTypes_1 as propTypes };
    export namespace defaultProps_1 {
        const isAccent_1: boolean;
        export { isAccent_1 as isAccent };
    }
    export { defaultProps_1 as defaultProps };
}
export function TileIcon({ children }: {
    children: any;
}): JSX.Element;
export default Tile;
import PropTypes from "prop-types";
declare function Tile({ children, className, tag: Tag, isSecondary, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
    tag: any;
    isSecondary: any;
}): JSX.Element;
declare namespace Tile {
    export namespace propTypes_2 {
        const className_2: PropTypes.Requireable<string>;
        export { className_2 as className };
        export const isSecondary: PropTypes.Requireable<boolean>;
        export const tag: PropTypes.Requireable<string>;
    }
    export { propTypes_2 as propTypes };
    export namespace defaultProps_2 {
        const isSecondary_1: boolean;
        export { isSecondary_1 as isSecondary };
        const tag_1: string;
        export { tag_1 as tag };
    }
    export { defaultProps_2 as defaultProps };
}
