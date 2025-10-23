export namespace uploadStatus {
    export { CANCEL };
    export { PENDING };
    export { LOADING };
    export { CREATED };
    export { UPDATED };
    export { FAILED };
    export { CONFLICT };
    export { QUOTA };
    export { NETWORK };
    export { DONE_STATUSES };
    export { ERROR_STATUSES };
}
export function formatRemainingTime(durationInSec: any): string;
export class UploadQueue extends React.Component<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    state: {
        collapsed: boolean;
    };
    toggleCollapsed: () => void;
    render(): JSX.Element;
}
export namespace UploadQueue {
    namespace defaultProps {
        const popover: boolean;
    }
}
declare var _default: any;
export default _default;
declare const CANCEL: "cancel";
declare const PENDING: "pending";
declare const LOADING: "loading";
declare const CREATED: "created";
declare const UPDATED: "updated";
declare const FAILED: "failed";
declare const CONFLICT: "conflict";
declare const QUOTA: "quota";
declare const NETWORK: "network";
declare const DONE_STATUSES: string[];
declare const ERROR_STATUSES: string[];
import React from "react";
