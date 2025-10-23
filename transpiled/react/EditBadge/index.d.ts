export default EditBadge;
declare function EditBadge({ src, onUpload, onDelete, anchorOrigin, children, ...props }: {
    [x: string]: any;
    src: any;
    onUpload: any;
    onDelete: any;
    anchorOrigin: any;
    children: any;
}): JSX.Element;
declare namespace EditBadge {
    namespace defaultProps {
        namespace anchorOrigin {
            const vertical: string;
            const horizontal: string;
        }
    }
    namespace propTypes {
        const src: PropTypes.Validator<(...args: any[]) => any>;
        const onUpload: PropTypes.Validator<(...args: any[]) => any>;
        const onDelete: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
