export default BottomDrawer;
declare class BottomDrawer extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        closing: boolean;
    };
    menuRef: React.RefObject<any>;
    wrapperRef: React.RefObject<any>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    initialAppear(): void;
    turnTransitionsOn(): void;
    turnTransitionsOff(): void;
    attachEvents(): void;
    gesturesHandler: any;
    /**
     * Applies a css transform to the element, based on the progress of the gesture
     * @param  {number} progress - Amount of progress between 0 and 1
     */
    applyTransformation(progress: number): void;
    animateClose: () => void;
    close: () => void;
    render(): JSX.Element;
}
declare namespace BottomDrawer {
    namespace propTypes {
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
