export default TextDivider;
/**
 * @description This component is composing `<Typography />` and has access to the same props
 */
declare function TextDivider({ color, variant, textAlign, children, className, ...props }: {
    [x: string]: any;
    color?: string | undefined;
    variant?: string | undefined;
    textAlign: any;
    children: any;
    className: any;
}): JSX.Element;
declare namespace TextDivider {
    namespace propTypes {
        const textAlign: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
