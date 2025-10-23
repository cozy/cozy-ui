export function normalizeExpandedAttribute(attr: any): any;
export const notExpandedAttributes: {
    'io.cozy.contacts': string[];
    'io.cozy.files': any[];
};
export const defaultExpandedAttributes: {
    'io.cozy.contacts': string[];
    'io.cozy.files': any[];
};
export function hasAllElement(arr1: any, arr2: any): any;
export function makeDefaultExpandedAttributes(doc: any, expandedAttributes: any): any;
export function copyToClipboard({ value, setAlertProps, t }: {
    value: any;
    setAlertProps: any;
    t: any;
}): () => Promise<void>;
export function isDate(value: any): boolean;
export function getAttrValue(doc: any, attrName: any): any;
export function makeAttrsValues(doc: any, expandedAttributes: any): any;
export function hasExpandedAttributesDisplayed({ doc, expandedAttributes }: {
    doc: any;
    expandedAttributes: any;
}): boolean;
export function getFormattedValue({ attrName, attrValue, qualificationLabel, f, lang }: {
    attrName: any;
    attrValue: any;
    qualificationLabel: any;
    f: any;
    lang: any;
}): any;
export function makeLabel({ attrName, qualificationLabel, t, lang }: {
    attrName: any;
    qualificationLabel: any;
    t: any;
    lang: any;
}): any;
export function makeAttrsLabelAndFormattedValue({ doc, expandedAttributes, t, f, lang }: {
    doc: any;
    expandedAttributes: any;
    t: any;
    f: any;
    lang: any;
}): any;
