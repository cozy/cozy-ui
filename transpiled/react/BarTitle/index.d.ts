export default BarTitle;
declare function BarTitle({ noWrap, children }: {
    noWrap: any;
    children: any;
}): JSX.Element;
declare namespace BarTitle {
    namespace defaultProps {
        const noWrap: boolean;
    }
    namespace propTypes {
        const noWrap_1: PropTypes.Requireable<boolean>;
        export { noWrap_1 as noWrap };
    }
}
import PropTypes from "prop-types";
