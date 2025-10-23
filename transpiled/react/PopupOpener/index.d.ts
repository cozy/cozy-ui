export function openCenteredPopup(url: any, title: any, w: any, h: any): Window | null;
export default PopupOpener;
declare function PopupOpener(props: any): JSX.Element;
declare namespace PopupOpener {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const url: PropTypes.Validator<string>;
        const className: PropTypes.Requireable<string>;
        const frameTitle: PropTypes.Requireable<string>;
        const height: PropTypes.Validator<number>;
        const width: PropTypes.Validator<number>;
    }
    namespace defaultProps {
        const height_1: number;
        export { height_1 as height };
        const width_1: number;
        export { width_1 as width };
    }
}
import PropTypes from "prop-types";
