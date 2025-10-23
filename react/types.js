/**
 * @typedef {Object} NestedSelectOptionItemAction
 * @property {React.FC} Component
 * @property {Object} props
 */
/**
 * @typedef {Object} NestedSelectOptionItem
 * @property {string} title
 * @property {string} description
 * @property {string} [info]
 * @property {NestedSelectOptionItemAction} [action]
 * @property {React.ReactNode} [icon]
 * @property {React.ReactNode} [header]
 * @property {string} [children]
 */
/**
 * @typedef {Object} NestedSelectOptionBase
 * @property {NestedSelectOptionItem[]} children
 * @property {string} [focusedId]
 * @property {React.ReactNode} [childrenHeader]
 */
/**
 * @typedef {NestedSelectOptionItem & NestedSelectOptionBase} NestedSelectOption
 */

export default {}
