export default createUseI18n;
declare function createUseI18n(locales: any): () => {
    t: any;
    f: (date: any, formatStr: any, opts?: {}) => string | undefined;
    lang: string;
};
