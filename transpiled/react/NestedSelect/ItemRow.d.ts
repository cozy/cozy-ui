export default ItemRow;
declare function ItemRow({ item, onClick, isSelected, radioPosition, isLast, ellipsis, noDivider }: {
    item: any;
    onClick: any;
    isSelected: any;
    radioPosition: any;
    isLast: any;
    ellipsis: any;
    noDivider: any;
}): JSX.Element;
declare namespace ItemRow {
    namespace propTypes {
        const item: PropTypes.Validator<object>;
        const onClick: PropTypes.Validator<(...args: any[]) => any>;
        const isSelected: PropTypes.Validator<boolean>;
        const radioPosition: PropTypes.Requireable<string>;
        const isLast: PropTypes.Requireable<boolean>;
        const ellipsis: PropTypes.Requireable<boolean>;
        const noDivider: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
