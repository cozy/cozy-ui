export function buildSettingsInstanceQuery(): {
    definition: import("cozy-client").QueryDefinition;
    options: {
        as: string;
        fetchPolicy: Function;
        singleDocData: boolean;
    };
};
