export const readApplicationDataset: (() => any) & import("lodash").MemoizedFunction;
export const readCozyData: (() => any) & import("lodash").MemoizedFunction;
/**
 * Reads an attribute set by the stack from the DOM
 *
 * A cozy app must receives on data from the stack, typically on the
 * [role=application] node. Here, we try first to read from data-cozy
 * and we fallback on data-[attrName].
 */
export const readCozyDataFromDOM: ((attrName: any) => any) & import("lodash").MemoizedFunction;
export function resetCache(): void;
