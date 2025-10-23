export default Label;
declare function Label(props: any): JSX.Element;
declare namespace Label {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const htmlFor: PropTypes.Requireable<string>;
        const className: PropTypes.Requireable<string>;
        const error: PropTypes.Requireable<boolean>;
        const block: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
        const error_1: boolean;
        export { error_1 as error };
        const block_1: boolean;
        export { block_1 as block };
    }
}
import PropTypes from "prop-types";
