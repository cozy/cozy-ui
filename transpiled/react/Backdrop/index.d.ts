export default Backdrop;
declare function Backdrop({ isOver, ...props }: {
    [x: string]: any;
    isOver: any;
}): JSX.Element;
declare namespace Backdrop {
    namespace propTypes {
        const isOver: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
