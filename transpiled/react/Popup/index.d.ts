/**
 * Customized function to get dimensions and position for a centered
 * popup window
 * @param  {string|number} w
 * @param  {string|number} h
 * @return {{w, h, top, left}}       Popup window
 */
export function popupCenter(w: string | number, h: string | number): {
    w: any;
    h: any;
    top: any;
    left: any;
};
/**
 * Renders a popup and listen to popup events
 */
export class Popup extends PureComponent<any, any, any> {
    constructor(props: any, context: any);
    handleClose(): void;
    handleMessage(messageEvent: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    addListeners(): void;
    removeListeners(): void;
    showPopup(): void;
    /**
     * ATM we also use window.open on Native App in order to open
     * InAppBrowser. But some provider (Google for instance) will
     * block us. We need to use a SafariViewController or Chrome Custom Tab.
     * So
     */
    popup: Window | null | undefined;
    killPopup(): void;
    monitorClosing(): void;
    /**
     * Check if window is closing every 500ms
     * @param  {Window} window
     */
    startMonitoringClosing(): void;
    checkClosedInterval: NodeJS.Timeout | undefined;
    stopMonitoringClosing(): void;
    render(): null;
}
export namespace Popup {
    namespace propTypes {
        const height: PropTypes.Validator<string | number>;
        const width: PropTypes.Validator<string | number>;
        const title: PropTypes.Requireable<string>;
        const initialUrl: PropTypes.Validator<string>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const onMessage: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const title_1: string;
        export { title_1 as title };
    }
}
export default Popup;
import { PureComponent } from "react";
import PropTypes from "prop-types";
