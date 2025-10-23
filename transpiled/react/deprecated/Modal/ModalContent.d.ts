export default ModalContent;
declare class ModalContent extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        displayGhostHeader: boolean;
    };
    componentWillUpdate(nextProps: any, nextState: any): void;
    UNSAFE_componentWillUpdate: (nextProps: any) => void;
    refreshComputedParts(children: any): void;
    animatedHeader: any;
    childrenToRender: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleScroll: () => void;
    headerHeight: number | undefined;
    render(): JSX.Element;
    scrollingContent: HTMLDivElement | null | undefined;
    contentHeader: HTMLDivElement | null | undefined;
}
import React from "react";
