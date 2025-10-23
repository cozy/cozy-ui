export const fieldsRequired: string[];
export function validateFields(values: object, t: func): object;
export function makeItemLabel(item?: object | undefined): string;
export function makeTypeAndLabel(itemLabel?: string | undefined): {
    type?: string;
    label?: string;
};
export function hasExtendedAddress(addressField: object): boolean;
export function moveToHead(shouldBeHead: any): (items: any) => any;
export function movePrimaryToHead(items: any): any;
export function createAddress({ address, oldContact, t }: {
    address: any;
    oldContact: any;
    t: any;
}): any;
export function getRelatedContactRelationships(relatedContact: (import('../types').RelatedContact | undefined)[]): Record<string, {
    data: {
        _id: string;
        _type: string;
    }[];
}>;
export function removeRelatedContactRelationships(contact: import('cozy-client/types/types').IOCozyContact): import('cozy-client/types/types').IOCozyContact;
export function removeAsscociatedData(contact: import('cozy-client/types/types').IOCozyContact): import('cozy-client/types/types').IOCozyContact;
export function makeRelatedContact(contact: import('cozy-client/types/types').IOCozyContact): import('../types').RelatedContact[];
export function addField(fields: any): any;
export function removeField(fields: any, index: any): void;
export function makeCustomLabel(value: string, t: func): string;
export function makeImppValues(oldContact: import('cozy-client/types/types').IOCozyContact, value: string | null): {
    uri: string;
    protocol: string;
    label: string;
    primary?: boolean;
}[];
export function makeInitialCustomValue(name: string, value: string): string;
export function makeFields(customFields: (import('../types').Field)[] | undefined, defaultFields: (import('../types').Field)[]): (import('../types').Field)[];
