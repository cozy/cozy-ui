export default FilePickerBodyItem;
declare function FilePickerBodyItem({ item, itemTypesAccepted, multiple, handleChoiceClick, handleListItemClick, itemsIdsSelected, hasDivider }: {
    item: any;
    itemTypesAccepted: any;
    multiple: any;
    handleChoiceClick: any;
    handleListItemClick: any;
    itemsIdsSelected: any;
    hasDivider: any;
}): JSX.Element;
declare namespace FilePickerBodyItem {
    namespace propTypes {
        const item: PropTypes.Validator<object>;
        const itemTypesAccepted: PropTypes.Validator<(string | null)[]>;
        const multiple: PropTypes.Requireable<boolean>;
        const handleChoiceClick: PropTypes.Validator<(...args: any[]) => any>;
        const handleListItemClick: PropTypes.Validator<(...args: any[]) => any>;
        const itemsIdsSelected: PropTypes.Validator<(string | null)[]>;
        const hasDivider: PropTypes.Validator<boolean>;
    }
}
import PropTypes from "prop-types";
