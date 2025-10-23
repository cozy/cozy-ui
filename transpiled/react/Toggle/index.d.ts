export default Toggle;
declare class Toggle extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    componentDidMount(): void;
    onChange(e: any): void;
    render(): JSX.Element;
}
declare namespace Toggle {
    namespace propTypes {
        const id: PropTypes.Validator<string>;
        const checked: PropTypes.Requireable<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const onToggle: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
