export default IntentModal;
/**
 * Render a modal for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 *
 * @deprecated Please use IntentIframe with Dialog instead
 */
declare class IntentModal extends React.Component<any, any, any> {
    constructor(props: any, context: any);
    state: {
        closable: boolean;
    };
    hideCross: () => void;
    showCross: () => void;
    dismiss: (evt: any) => void;
    render(): JSX.Element;
}
declare namespace IntentModal {
    const propTypes: any;
    const defaultProps: any;
}
import React from "react";
