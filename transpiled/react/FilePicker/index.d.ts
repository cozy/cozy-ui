export const ROOT_DIR_ID: "io.cozy.files.root-dir";
declare var _default: React.MemoExoticComponent<{
    ({ onClose, onChange, accept, multiple }: {
        onClose: any;
        onChange: any;
        accept: any;
        multiple: any;
    }): JSX.Element;
    propTypes: {
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        accept: PropTypes.Requireable<string>;
        multiple: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        accept: string;
        multiple: boolean;
    };
}>;
export default _default;
import PropTypes from "prop-types";
import React from "react";
