export const groups: {
    id: string;
    _id: string;
    _type: string;
    _rev: string;
    cozyMetadata: {
        createdAt: string;
        createdByApp: string;
        createdByAppVersion: string;
        metadataVersion: number;
        updatedAt: string;
        updatedByApps: {
            date: string;
            slug: string;
            version: string;
        }[];
    };
    metadata: {
        version: number;
    };
    name: string;
}[];
