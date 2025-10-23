export function getI18n(lang: any, dictRequire: any, context: any, defaultLang?: string): {
    t: any;
    f: (date: any, formatStr: any, opts?: {}) => string | undefined;
    lang: any;
};
