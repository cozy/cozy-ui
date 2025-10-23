export function buildLastNameFirst(contact: any): any;
export function sortLastNameFirst(contact: any, comparedContact: any): any;
export function sortContacts(contacts: any): any;
export function categorizeContacts(contacts: object[], t: Function): CategorizedContactsResult;
export function sortHeaders(categorized: CategorizedContactsResult, t: Function): string[];
export function makeGroupLabelsAndCounts(contacts: array, t: any): object;
export type CategorizedContactsResult = {
    [x: string]: Object;
};
