export default PrimaryText;
declare function PrimaryText({ primary, file }: {
    primary: any;
    file: any;
}): any;
declare namespace PrimaryText {
    namespace propTypes {
        const primary: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const file: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
