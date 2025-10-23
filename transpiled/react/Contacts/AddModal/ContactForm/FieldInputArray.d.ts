export default FieldInputArray;
declare function FieldInputArray({ attributes: { name, label, ...restAttributes }, contacts, formProps: { valid, submitFailed, errors } }: {
    attributes: {
        [x: string]: any;
        name: any;
        label: any;
    };
    contacts: any;
    formProps: {
        valid: any;
        submitFailed: any;
        errors: any;
    };
}): JSX.Element;
