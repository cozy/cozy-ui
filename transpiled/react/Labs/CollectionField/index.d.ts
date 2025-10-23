export default CollectionField;
/**
 * Handles a collection of form fields.
 * This is a controlled component. You have to give it some values and handle
 * changes via the onChange prop. See examples in readme.
 *
 * When a field is added, the underlying component receives `null` as
 * its value.
 * When a field is being added, the "Add" button is not shown.
 */
declare function CollectionField(props: any): JSX.Element;
declare namespace CollectionField {
    namespace propTypes {
        const values: any[];
        const component: ElementType;
        const label: string;
        const onChange: Function;
        const addButtonLabel: string;
        const removeButtonLabel: string;
        const placeholder: string;
        const onAddField: string;
    }
}
