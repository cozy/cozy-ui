export default InputGroup;
declare class InputGroup extends React.Component<any, any, any> {
    constructor(props: any);
    handleFocus(): void;
    handleBlur(): void;
    state: {
        focused: boolean;
    };
    render(): JSX.Element;
}
declare namespace InputGroup {
    namespace propTypes {
        const prepend: PropTypes.Requireable<object>;
        const append: PropTypes.Requireable<object>;
        const error: PropTypes.Requireable<boolean>;
        const fullwidth: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const error_1: boolean;
        export { error_1 as error };
        const fullwidth_1: boolean;
        export { fullwidth_1 as fullwidth };
    }
    function Unit({ children }: {
        children: any;
    }): JSX.Element;
}
import React from "react";
import PropTypes from "prop-types";
