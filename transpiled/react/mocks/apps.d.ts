export const apps: ({
    slug: string;
    name: string;
    editor: string;
    label: number;
    name_prefix: string;
    categories: string[];
    developer: {
        name: string;
    };
    type: string;
    icon: string;
    permissions: {
        mock: {
            type: string;
        };
        mock2: {
            type: string;
        };
    };
    tags: string[];
    version: string;
    versions: {
        stable: string[];
        beta: string[];
        dev: string[];
    };
    uninstallable: boolean;
    installed: boolean;
    isInRegistry: boolean;
    related: string;
    locales?: undefined;
    availableVersion?: undefined;
} | {
    slug: string;
    name: string;
    editor: string;
    categories: string[];
    developer: {
        name: string;
    };
    type: string;
    locales: {
        name: string;
        en?: undefined;
    };
    icon: string;
    versions: {
        stable: never[];
        beta: never[];
        dev: string[];
    };
    uninstallable: boolean;
    isInRegistry: boolean;
    label?: undefined;
    name_prefix?: undefined;
    permissions?: undefined;
    tags?: undefined;
    version?: undefined;
    installed?: undefined;
    related?: undefined;
    availableVersion?: undefined;
} | {
    slug: string;
    name: string;
    editor: string;
    name_prefix: string;
    categories: string[];
    developer: {
        name: string;
    };
    tags: string[];
    type: string;
    icon: string;
    permissions: {
        mock2: {
            type: string;
        };
        mock?: undefined;
    };
    version: string;
    uninstallable: boolean;
    installed: boolean;
    related: string;
    label?: undefined;
    versions?: undefined;
    isInRegistry?: undefined;
    locales?: undefined;
    availableVersion?: undefined;
} | {
    slug: string;
    name: string;
    icon: string;
    developer: {
        name: string;
    };
    type: string;
    categories: string[];
    versions: {
        stable: string[];
        beta: string[];
        dev: string[];
    };
    uninstallable: boolean;
    isInRegistry: boolean;
    editor?: undefined;
    label?: undefined;
    name_prefix?: undefined;
    permissions?: undefined;
    tags?: undefined;
    version?: undefined;
    installed?: undefined;
    related?: undefined;
    locales?: undefined;
    availableVersion?: undefined;
} | {
    slug: string;
    name: string;
    icon: string;
    developer: {
        name: string;
    };
    type: string;
    categories: string[];
    tags: string[];
    permissions: {
        mock: {
            type: string;
        };
        mock2?: undefined;
    };
    version: string;
    versions: {
        stable: string[];
        beta: string[];
        dev: string[];
    };
    installed: boolean;
    uninstallable: boolean;
    isInRegistry: boolean;
    editor?: undefined;
    label?: undefined;
    name_prefix?: undefined;
    related?: undefined;
    locales?: undefined;
    availableVersion?: undefined;
} | {
    slug: string;
    name: string;
    editor: string;
    name_prefix: string;
    categories: string[];
    developer: {
        name: string;
    };
    type: string;
    icon: string;
    locales: {
        en: {
            long_description: string;
        };
        name?: undefined;
    };
    versions: {
        stable: string[];
        beta: string[];
        dev: string[];
    };
    uninstallable: boolean;
    isInRegistry: boolean;
    label?: undefined;
    permissions?: undefined;
    tags?: undefined;
    version?: undefined;
    installed?: undefined;
    related?: undefined;
    availableVersion?: undefined;
} | {
    slug: string;
    name: string;
    categories: string[];
    icon: string;
    type: string;
    versions: {
        stable: string[];
        beta: string[];
        dev: string[];
    };
    installed: boolean;
    availableVersion: string;
    uninstallable: boolean;
    isInRegistry: boolean;
    editor?: undefined;
    label?: undefined;
    name_prefix?: undefined;
    developer?: undefined;
    permissions?: undefined;
    tags?: undefined;
    version?: undefined;
    related?: undefined;
    locales?: undefined;
})[];
export default apps;
