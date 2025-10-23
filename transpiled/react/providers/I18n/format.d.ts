export function provideDateFnsLocale(userLang: any, defaultLang?: string): Locale | undefined;
export function initFormat(userLang: any, defaultLang?: string): (date: any, formatStr: any, opts?: {}) => string | undefined;
export function formatLocallyDistanceToNow(date: any): string;
