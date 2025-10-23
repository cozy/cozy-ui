export function buildCurrentFolderQuery(folderId: any): {
    definition: () => import("cozy-client").QueryDefinition;
    options: {
        as: string;
        fetchPolicy: Function;
    };
};
export function buildContentFolderQuery(dirId: any): {
    definition: () => import("cozy-client").QueryDefinition;
    options: {
        as: string;
        fetchPolicy: Function;
    };
};
