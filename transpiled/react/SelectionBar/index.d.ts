export default SelectionBar;
/**
 * @deprecated This component is depreacated, please use [ActionsBar](#/ActionsBar) instead.
 */
declare function SelectionBar({ actions, selected, hideSelectionBar, maxAction }: {
    actions: any;
    selected: any;
    hideSelectionBar: any;
    maxAction?: {
        isHuge: number;
        isLarge: number;
        isMedium: number;
        isSmall: number;
        isTiny: number;
    } | undefined;
}): JSX.Element;
declare namespace SelectionBar {
    namespace propTypes {
        const actions: PropTypes.Validator<object>;
        const selected: PropTypes.Validator<any[]>;
        const hideSelectionBar: PropTypes.Validator<(...args: any[]) => any>;
        const maxAction: PropTypes.Requireable<number | object>;
    }
}
import PropTypes from "prop-types";
