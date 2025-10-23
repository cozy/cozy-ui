/**
 * Renders a generic dropdown
 */
export class DropdownFilter extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
export namespace DropdownFilter {
    namespace propTypes {
        const options: PropTypes.Validator<any[]>;
        const defaultValue: PropTypes.Requireable<object>;
    }
}
export default DropdownFilter;
import React from "react";
import PropTypes from "prop-types";
