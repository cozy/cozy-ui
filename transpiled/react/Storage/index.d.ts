export default Storage;
declare function Storage({ onlyDesktop }: {
    onlyDesktop: any;
}): JSX.Element | null;
declare namespace Storage {
    namespace propTypes {
        const onlyDesktop: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const onlyDesktop_1: boolean;
        export { onlyDesktop_1 as onlyDesktop };
    }
}
import PropTypes from "prop-types";
