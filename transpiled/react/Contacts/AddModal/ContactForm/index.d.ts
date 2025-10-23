export function getSubmitContactForm(): any;
export function isSameContactProp(prevProps: any, nextProps: any): boolean;
declare var _default: React.MemoExoticComponent<{
    ({ contacts, contact, customFieldsProps, onSubmit }: {
        contacts: {
            data: Array<object>;
        };
        contact: import('cozy-client/types/types').IOCozyContact;
        customFieldsProps: Object;
        onSubmit: func;
    }): JSX.Element;
    defaultProps: {
        customFieldsProps: {};
    };
}>;
export default _default;
import React from "react";
