/**
 * @typedef {'text'|'tel'|'email'|'button'|'url'|'date'} FieldType
 */
/**
 * @typedef {Object} CustomLabelOptions
 * @property {string} defaultType - The default type of the option
 * @property {string} defaultLabel - The default label of the option
 * @property {boolean} [hide] - Whether the radio choices is hidden
 */
/**
 * @typedef {Object} LabelField
 * @property {string} name - The name of the label field
 * @property {boolean} select - Whether the field is a select
 * @property {CustomLabelOptions} customLabelOptions - The custom label field options
 * @property {Option[]} options - The options of the label field
 */
/**
 * @typedef {Object} InputLabelProps
 * @property {boolean} shrink - passed to InputLabelProps props
 */
/**
 * @typedef {Object} Field
 * @property {string} name - The name of the field
 * @property {string|null} icon - The icon of the field
 * @property {FieldType} type - The type of the field
 * @property {boolean} [isSecondary] -  Whether the field is hidden from the main form
 * @property {LabelField} [label] - Add a "label" field next to the main field
 * @property {'accordion'|'array'} [layout] - Whether the field is an array (To add fields dynamically (e.g. email, address, etc.))
 * @property {Field[]} [subFields] - The subfields of the field
 * @property {InputLabelProps} [InputLabelProps] - The object passed to InputLabelProps props
 * @property {boolean} [multiline] - Whether the field is multiline
 * @property {number} [position] - Position of a field in the form. 1 is first.
 */
/**
 * @typedef {Object} RelatedContact
 * @property {string} relatedContactId - The id of the related contact
 * @property {string} relatedContact - The displayName of the related contact
 * @property {string} relatedContactLabel - Object with the type of the related contact stringified (e.g. '{\"type\":\"spouse\"}')
 */
export const labelPropTypes: PropTypes.Requireable<PropTypes.InferProps<{
    name: PropTypes.Requireable<string>;
    options: PropTypes.Requireable<(PropTypes.InferProps<{
        value: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
    }> | null)[]>;
    customLabelOptions: PropTypes.Requireable<PropTypes.InferProps<{
        hide: PropTypes.Requireable<boolean>;
        defaultType: PropTypes.Requireable<string>;
        defaultLabel: PropTypes.Requireable<string>;
    }>>;
}>>;
export const fieldInputAttributesTypes: PropTypes.Requireable<PropTypes.InferProps<{
    name: PropTypes.Requireable<string>;
    icon: PropTypes.Requireable<string | object>;
    type: PropTypes.Requireable<string>;
    label: PropTypes.Requireable<PropTypes.InferProps<{
        name: PropTypes.Requireable<string>;
        options: PropTypes.Requireable<(PropTypes.InferProps<{
            value: PropTypes.Requireable<string>;
            label: PropTypes.Requireable<string>;
        }> | null)[]>;
        customLabelOptions: PropTypes.Requireable<PropTypes.InferProps<{
            hide: PropTypes.Requireable<boolean>;
            defaultType: PropTypes.Requireable<string>;
            defaultLabel: PropTypes.Requireable<string>;
        }>>;
    }>>;
    layout: PropTypes.Requireable<string>;
    subFields: PropTypes.Requireable<(PropTypes.InferProps<{
        name: PropTypes.Validator<string>;
        icon: PropTypes.Requireable<string>;
        type: PropTypes.Validator<string>;
    }> | null)[]>;
    labelProps: PropTypes.Requireable<PropTypes.InferProps<{
        shrink: PropTypes.Requireable<boolean>;
    }>>;
}>>;
export namespace FieldInputWrapperPropTypes {
    export const input: PropTypes.Requireable<object>;
    export { fieldInputAttributesTypes as attributes };
    export const meta: PropTypes.Requireable<object>;
    export const id: PropTypes.Requireable<string>;
    export const label: PropTypes.Requireable<string>;
    export const required: PropTypes.Requireable<boolean>;
    export const variant: PropTypes.Requireable<string>;
    export const customLabelOptions: PropTypes.Requireable<PropTypes.InferProps<{
        hide: PropTypes.Requireable<boolean>;
        defaultType: PropTypes.Validator<string>;
        defaultLabel: PropTypes.Validator<string>;
    }>>;
    export const fullWidth: PropTypes.Requireable<boolean>;
}
export type FieldType = 'text' | 'tel' | 'email' | 'button' | 'url' | 'date';
export type CustomLabelOptions = {
    /**
     * - The default type of the option
     */
    defaultType: string;
    /**
     * - The default label of the option
     */
    defaultLabel: string;
    /**
     * - Whether the radio choices is hidden
     */
    hide?: boolean | undefined;
};
export type LabelField = {
    /**
     * - The name of the label field
     */
    name: string;
    /**
     * - Whether the field is a select
     */
    select: boolean;
    /**
     * - The custom label field options
     */
    customLabelOptions: CustomLabelOptions;
    /**
     * - The options of the label field
     */
    options: (new (text?: string | undefined, value?: string | undefined, defaultSelected?: boolean | undefined, selected?: boolean | undefined) => HTMLOptionElement)[];
};
export type InputLabelProps = {
    /**
     * - passed to InputLabelProps props
     */
    shrink: boolean;
};
export type Field = {
    /**
     * - The name of the field
     */
    name: string;
    /**
     * - The icon of the field
     */
    icon: string | null;
    /**
     * - The type of the field
     */
    type: FieldType;
    /**
     * -  Whether the field is hidden from the main form
     */
    isSecondary?: boolean | undefined;
    /**
     * - Add a "label" field next to the main field
     */
    label?: LabelField | undefined;
    /**
     * - Whether the field is an array (To add fields dynamically (e.g. email, address, etc.))
     */
    layout?: "array" | "accordion" | undefined;
    /**
     * - The subfields of the field
     */
    subFields?: Field[] | undefined;
    /**
     * - The object passed to InputLabelProps props
     */
    InputLabelProps?: InputLabelProps | undefined;
    /**
     * - Whether the field is multiline
     */
    multiline?: boolean | undefined;
    /**
     * - Position of a field in the form. 1 is first.
     */
    position?: number | undefined;
};
export type RelatedContact = {
    /**
     * - The id of the related contact
     */
    relatedContactId: string;
    /**
     * - The displayName of the related contact
     */
    relatedContact: string;
    /**
     * - Object with the type of the related contact stringified (e.g. '{\"type\":\"spouse\"}')
     */
    relatedContactLabel: string;
};
import PropTypes from "prop-types";
