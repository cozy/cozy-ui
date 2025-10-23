export function MobilePageLayout({ children, extraHeight }: {
    children: any;
    extraHeight?: number | undefined;
}): JSX.Element;
/**
 * - On mobile, wraps into MobilePageLayout.
 * - On desktop, wraps into a simple div.
 */
export const PageLayout: React.NamedExoticComponent<object>;
export const PageContent: React.NamedExoticComponent<object>;
export function PageFooter({ children }: {
    children: any;
}): JSX.Element;
import React from "react";
