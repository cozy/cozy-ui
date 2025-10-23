/**
 * Return the env(safe-area-inset-[position]) value
 * expl: "0px"
 */
export declare const getSafeArea: (position: string) => string;
/**
 * Return the env(safe-area-inset-[position]) value without unit
 * expl: 0 for "0px"
 */
export declare const getSafeAreaValue: (position: string) => number;
