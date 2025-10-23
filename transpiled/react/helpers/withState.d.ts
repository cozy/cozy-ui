export default withState;
/**
 * Higher Order Component that wraps functional components into stateful components.
 * Defining a stateful component becomes a matter of setting its initial state
 * and writing a handful of reducers on that state. The state and the reducers will
 * be passed as props to the wrapped functional component.
 * Example:
 * const ToggleButton = withState(initialState = {
 *   on: false
 * }, eventHandlers = setState => ({
 *   toggle: () => {
 *     setState(state => ({ on: !state.on })
 *   }
 * }))(
 *   ({ on, toggle }) => (
 *     <button class={on ? 'on' : 'off'} onClick={toggle}>Go!</button>
 *   )
 * )
 */
declare function withState(initialState: any, eventHandlers: any): (WrappedComponent: any) => {
    new (props: any): {
        state: any;
        handlers: any;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
import React from "react";
