export namespace actionsItemsComponentPropTypes {
    const docs: PropTypes.Requireable<any[]>;
    const action: PropTypes.Requireable<object>;
    const autoFocus: PropTypes.Requireable<boolean>;
    const disabled: PropTypes.Requireable<boolean>;
    const onClick: PropTypes.Requireable<(...args: any[]) => any>;
}
export default ActionsItems;
import PropTypes from "prop-types";
declare const ActionsItems: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
import React from "react";
