export const DEFAULT_LANG: "en";
export const I18nContext: React.Context<any>;
export function useI18n(): useI18nReturnTypes;
export class I18n extends React.Component<any, any, any> {
    constructor(props: any);
    init(props: any): void;
    translator: any;
    format: ((date: any, formatStr: any, opts?: {}) => string | undefined) | undefined;
    t: any;
    contextValue: {
        t: any;
        f: ((date: any, formatStr: any, opts?: {}) => string | undefined) | undefined;
        polyglot: any;
        lang: any;
    } | undefined;
    getContextValue(props: any): {
        t: any;
        f: ((date: any, formatStr: any, opts?: {}) => string | undefined) | undefined;
        polyglot: any;
        lang: any;
    };
    getChildContext(): {
        t: any;
        f: ((date: any, formatStr: any, opts?: {}) => string | undefined) | undefined;
        polyglot: any;
        lang: any;
    } | undefined;
    UNSAFE_componentWillReceiveProps: (nextProps: any) => void;
    render(): JSX.Element;
}
export namespace I18n {
    namespace propTypes {
        const lang: PropTypes.Validator<string>;
        const polyglot: PropTypes.Requireable<object>;
        const dictRequire: PropTypes.Requireable<(...args: any[]) => any>;
        const context: PropTypes.Requireable<string>;
        const defaultLang: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        export { DEFAULT_LANG as defaultLang };
    }
    namespace childContextTypes {
        export const t: PropTypes.Requireable<(...args: any[]) => any>;
        export const f: PropTypes.Requireable<(...args: any[]) => any>;
        const polyglot_1: PropTypes.Requireable<object>;
        export { polyglot_1 as polyglot };
        const lang_1: PropTypes.Requireable<string>;
        export { lang_1 as lang };
    }
}
export { default as translate } from "./translate";
export { default as createUseI18n } from "./createUseI18n";
export { default as useExtendI18n } from "./useExtendI18n";
export default I18n;
export type useI18nReturnTypes = {
    t: (key: string) => string;
    f: (date: string, format: string) => string;
    lang: string;
};
import React from "react";
import PropTypes from "prop-types";
export { initTranslation, extend } from "./translation";
