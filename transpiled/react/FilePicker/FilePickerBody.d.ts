export default FilePickerBody;
declare function FilePickerBody({ navigateTo, folderId, onSelectItemId, itemsIdsSelected, itemTypesAccepted, multiple }: {
    navigateTo: any;
    folderId: any;
    onSelectItemId: any;
    itemsIdsSelected: any;
    itemTypesAccepted: any;
    multiple: any;
}): JSX.Element;
declare namespace FilePickerBody {
    namespace propTypes {
        const onSelectItemId: PropTypes.Validator<(...args: any[]) => any>;
        const itemsIdsSelected: PropTypes.Validator<(string | null)[]>;
        const folderId: PropTypes.Validator<string>;
        const navigateTo: PropTypes.Validator<(...args: any[]) => any>;
        const itemTypesAccepted: PropTypes.Validator<(string | null)[]>;
    }
}
import PropTypes from "prop-types";
