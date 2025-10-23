export class FileImageLoader extends Component<any, any, any> {
    static contextType: import("react").Context<any>;
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        src: null;
    };
    _mounted: boolean;
    componentDidMount(): void;
    status: string | undefined;
    realtime: any;
    type: string | undefined;
    componentWillUnmount(): void;
    /**
     * Reload the link when realtime tell us that the
     * thumbnail is created. By default linkType === small
     */
    handleCreate: (doc: any) => void;
    getFileId(file: any): any;
    loadNextSrc(lastError?: null): void;
    fetchFileLinks(file: any): Promise<any>;
    getLink(): Promise<void>;
    loadLink(): Promise<void>;
    loadFallback(): Promise<void>;
    render(): any;
}
export namespace FileImageLoader {
    namespace propTypes {
        const file: PropTypes.Validator<object>;
        const render: PropTypes.Validator<(...args: any[]) => any>;
        const linkType: PropTypes.Requireable<string>;
        const onError: PropTypes.Requireable<(...args: any[]) => any>;
        const renderFallback: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const linkType_1: string;
        export { linkType_1 as linkType };
        export function onError_1(): void;
        export { onError_1 as onError };
    }
}
declare var _default: Function;
export default _default;
import { Component } from "react";
import PropTypes from "prop-types";
