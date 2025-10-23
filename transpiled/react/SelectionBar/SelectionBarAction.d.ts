export default SelectionBarAction;
declare function SelectionBarAction({ selectedCount, selected, action }: {
    selectedCount: any;
    selected: any;
    action: any;
}): JSX.Element;
declare namespace SelectionBarAction {
    namespace propTypes {
        const selectedCount: PropTypes.Validator<number>;
        const selected: PropTypes.Validator<any[]>;
        const action: PropTypes.Validator<object>;
    }
}
import PropTypes from "prop-types";
