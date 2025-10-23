export default Option;
declare function Option(props: any): JSX.Element;
declare namespace Option {
    namespace propTypes {
        const selectProps: PropTypes.Requireable<PropTypes.InferProps<{
            editedGroupId: PropTypes.Validator<string>;
            deleteGroup: PropTypes.Validator<(...args: any[]) => any>;
            setEditedGroupId: PropTypes.Validator<(...args: any[]) => any>;
            withCheckbox: PropTypes.Requireable<boolean>;
        }>>;
        const data: PropTypes.Requireable<PropTypes.InferProps<{
            name: PropTypes.Validator<string>;
            id: PropTypes.Requireable<string>;
            withNoAction: PropTypes.Requireable<boolean>;
        }>>;
    }
}
import PropTypes from "prop-types";
