export function Avatar({ text, textId, image, size, className, style, disabled, ghost, icon }: {
    text: any;
    textId: any;
    image: any;
    size: any;
    className: any;
    style: any;
    disabled: any;
    ghost: any;
    icon: any;
}): JSX.Element;
export namespace Avatar {
    namespace propTypes {
        const text: PropTypes.Requireable<string>;
        const image: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string | number>;
        const className: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
        const icon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const ghost: PropTypes.Requireable<boolean>;
        const style: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const text_1: string;
        export { text_1 as text };
        const image_1: string;
        export { image_1 as image };
        const size_1: string;
        export { size_1 as size };
        const className_1: string;
        export { className_1 as className };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        export { PeopleIcon as icon };
        const ghost_1: boolean;
        export { ghost_1 as ghost };
        const style_1: {};
        export { style_1 as style };
    }
}
export default Avatar;
import PropTypes from "prop-types";
import PeopleIcon from "../../Icons/People";
