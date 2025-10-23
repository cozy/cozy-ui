export const IntentContext: React.Context<any>;
export function useIntent(): any;
export default IntentProvider;
import React from "react";
declare function IntentProvider({ intentId, componentsProps, children }: {
    intentId: any;
    componentsProps: any;
    children: any;
}): JSX.Element;
