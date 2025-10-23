export function I18nContext(options: any): {
    t: any;
    f: ((date: any, formatStr: any, opts?: {}) => string | undefined) | undefined;
    polyglot: any;
    lang: any;
};
