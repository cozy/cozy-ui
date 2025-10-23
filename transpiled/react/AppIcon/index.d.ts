export class AppIcon extends React.Component<any, any, any> {
    constructor(props: any, context: any);
    isUnmounting: boolean;
    handleError(): void;
    fetchIcon(): any;
    state: {
        error: null;
        icon: null;
        status: string;
    };
    componentWillUnmount(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    load(): Promise<void>;
    render(): JSX.Element;
}
export namespace AppIcon {
    namespace propTypes {
        export const alt: PropTypes.Requireable<string>;
        export const app: PropTypes.Requireable<string | PropTypes.InferProps<{
            name: PropTypes.Requireable<string>;
            slug: PropTypes.Requireable<string>;
            developer: PropTypes.Requireable<object>;
            links: PropTypes.Requireable<PropTypes.InferProps<{
                icon: PropTypes.Requireable<string>;
            }>>;
            latest_version: PropTypes.Requireable<PropTypes.InferProps<{
                version: PropTypes.Requireable<string>;
            }>>;
        }>>;
        export { iconPropType as fallbackIcon };
        export const fetchIcon: PropTypes.Requireable<(...args: any[]) => any>;
        export const client: PropTypes.Validator<object>;
        export const className: PropTypes.Requireable<string>;
        export const onReady: PropTypes.Requireable<(...args: any[]) => any>;
        export const type: PropTypes.Requireable<string>;
        export const priority: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const type_1: string;
        export { type_1 as type };
        const priority_1: string;
        export { priority_1 as priority };
    }
}
declare var _default: Function;
export default _default;
import React from "react";
import PropTypes from "prop-types";
import { iconPropType } from "../Icon";
