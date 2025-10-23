export default CircleButton;
declare function CircleButton({ className, label, variant, disabled, fullWidth, "aria-label": ariaLabel, children, ...props }: {
    [x: string]: any;
    className: any;
    label: any;
    variant?: string | undefined;
    disabled: any;
    fullWidth?: boolean | undefined;
    "aria-label": any;
    children: any;
}): JSX.Element;
declare namespace CircleButton {
    namespace propTypes {
        const className: PropTypes.Requireable<string>;
        const label: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const variant: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
        const fullWidth: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
