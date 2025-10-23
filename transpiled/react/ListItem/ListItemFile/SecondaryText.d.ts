export default SecondaryText;
declare function SecondaryText({ secondary, file }: {
    secondary: any;
    file: any;
}): any;
declare namespace SecondaryText {
    namespace propTypes {
        const secondary: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const file: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
