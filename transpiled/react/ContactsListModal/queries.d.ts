export function buildContactsQuery(): {
    definition: () => import("cozy-client").QueryDefinition;
    options: {
        as: string;
        fetchPolicy: Function;
    };
};
