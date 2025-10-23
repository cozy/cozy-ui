export class BarButton extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
export namespace BarButton {
    namespace propTypes {
        const disabled: PropTypes.Requireable<boolean>;
        const href: PropTypes.Requireable<string>;
        const icon: PropTypes.Requireable<string | object>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const className: PropTypes.Requireable<string>;
    }
}
export default BarButton;
import React from "react";
import PropTypes from "prop-types";
