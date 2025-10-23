export default ContactPicker;
declare class ContactPicker extends React.Component<any, any, any> {
    constructor(props: any, context: any);
    state: {
        opened: any;
    };
    open(): void;
    close(): void;
    render(): JSX.Element;
}
declare namespace ContactPicker {
    namespace defaultProps {
        const initialOpen: boolean;
    }
    namespace propTypes {
        const initialOpen_1: PropTypes.Requireable<boolean>;
        export { initialOpen_1 as initialOpen };
    }
}
import React from "react";
import PropTypes from "prop-types";
