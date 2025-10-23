export class Alert extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        hidden: boolean;
    };
    computeDuration(): number;
    componentDidMount(): void;
    closeTimer: NodeJS.Timeout | undefined;
    beginClosing(): void;
    notifyClosed: () => void;
    componentWillUnmount(): void;
    close: () => void;
    buttonAction: () => void;
    render(): JSX.Element;
    base: HTMLDivElement | null | undefined;
}
export namespace Alert {
    namespace propTypes {
        const type: string;
        const message: string;
        const onClose: Function;
        const buttonText: Function;
        const buttonAction: Function;
    }
    namespace defaultProps {
        const type_1: string;
        export { type_1 as type };
        export function onClose_1(): void;
        export { onClose_1 as onClose };
        const buttonText_1: undefined;
        export { buttonText_1 as buttonText };
        export function buttonAction_1(): void;
        export { buttonAction_1 as buttonAction };
        export const duration: string;
    }
}
export default Alert;
import React from "react";
