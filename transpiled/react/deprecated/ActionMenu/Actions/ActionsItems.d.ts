export default ActionsItems;
declare function ActionsItems({ doc, actions, isLast, setIsRenaming, onClose }: {
    doc: any;
    actions: any;
    isLast: any;
    setIsRenaming: any;
    onClose: any;
}): any;
declare namespace ActionsItems {
    namespace propTypes {
        const doc: PropTypes.Requireable<object>;
        const actions: PropTypes.Requireable<any[]>;
        const isLast: PropTypes.Requireable<boolean>;
        const setIsRenaming: PropTypes.Requireable<(...args: any[]) => any>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
