export class AppLinker extends React.Component<any, any, any> {
    static contextType: React.Context<import("cozy-intent").WebviewService | undefined>;
    static getSlug(props: any): any;
    static getOnClickHref(props: any, context: any, imgRef: any): {
        onClick: (event: any) => void;
        href: string;
    } | {
        href: any;
        onClick: null;
    };
    constructor(props: any);
    state: {
        imgRef: null;
    };
    setImgRef: (img: any) => void;
    imgRef: any;
    render(): any;
}
export namespace AppLinker {
    namespace propTypes {
        const href: PropTypes.Requireable<string>;
        const onAppSwitch: PropTypes.Requireable<(...args: any[]) => any>;
        const app: PropTypes.Validator<PropTypes.InferProps<{
            slug: PropTypes.Validator<string>;
        }>>;
    }
}
declare var _default: Function;
export default _default;
import React from "react";
import PropTypes from "prop-types";
import { getUniversalLinkDomain } from "./native";
import { generateWebLink } from "./native";
import { generateUniversalLink } from "./native";
export { getUniversalLinkDomain, generateWebLink, generateUniversalLink };
