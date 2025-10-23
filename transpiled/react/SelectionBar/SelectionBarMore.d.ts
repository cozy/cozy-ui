export default SelectionBarMore;
declare function SelectionBarMore({ actions, selectedCount, selected }: {
    actions: any;
    selectedCount: any;
    selected: any;
}): JSX.Element;
declare namespace SelectionBarMore {
    namespace propTypes {
        const actions: PropTypes.Validator<any[]>;
        const selectedCount: PropTypes.Validator<number>;
        const selected: PropTypes.Validator<any[]>;
    }
}
import PropTypes from "prop-types";
