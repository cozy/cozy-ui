export default Alerter;
declare class Alerter extends React.Component<any, any, any> {
    static reset(): void;
    /**
     * @param {string} message
     * @param {object} options
     * @public
     * @static
     */
    public static info(msg: any, options: object): any;
    /**
     * @param {string} msg
     * @param {object} options
     * @public
     * @static
     */
    public static success(msg: string, options: object): any;
    /**
     * @param {string} msg
     * @param {object} options
     * @public
     * @static
     */
    public static error(msg: string, options: object): any;
    /**
     * Remove notification by id
     */
    static removeNotification(notification: any): any;
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        notifications: never[];
    };
    componentDidMount(): void;
    onStoreEvent: (newNotifications: any) => void;
    handleClose: (id: any) => void;
    render(): JSX.Element;
}
declare namespace Alerter {
    namespace propTypes {
        const t: PropTypes.Requireable<(...args: any[]) => any>;
        const into: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const into_1: string;
        export { into_1 as into };
    }
}
import React from "react";
import PropTypes from "prop-types";
