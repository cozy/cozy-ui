export default InfosCarrousel;
declare function InfosCarrousel({ children, theme, className, swipeableProps, previousButtonProps, nextButtonProps }: {
    children: any;
    theme: any;
    className: any;
    swipeableProps: any;
    previousButtonProps: any;
    nextButtonProps: any;
}): JSX.Element;
declare namespace InfosCarrousel {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const theme: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const swipeableProps: PropTypes.Requireable<object>;
        const previousButtonProps: PropTypes.Requireable<object>;
        const nextButtonProps: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const theme_1: string;
        export { theme_1 as theme };
    }
}
import PropTypes from "prop-types";
