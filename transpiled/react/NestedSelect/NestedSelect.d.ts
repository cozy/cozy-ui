export { ItemRow };
export default NestedSelect;
import ItemRow from "./ItemRow";
/**
 * Select like component to choose an option among a list of options.
 * Options can have children; selecting an option that has children
 * will show the children of the chosen option instead of selecting
 * the option.
 */
declare function NestedSelect({ onSelect, ContentComponent, HeaderComponent, canSelectParent, isSelected, title, transformParentItem, radioPosition, ellipsis, options, searchOptions, noDivider }: {
    onSelect: any;
    ContentComponent: any;
    HeaderComponent: any;
    canSelectParent: any;
    isSelected: any;
    title: any;
    transformParentItem: any;
    radioPosition: any;
    ellipsis: any;
    options: any;
    searchOptions: any;
    noDivider: any;
}): JSX.Element;
declare namespace NestedSelect {
    namespace defaultProps {
        export { List as ContentComponent };
        export const HeaderComponent: null;
        export function transformParentItem(x: any): any;
        export const radioPosition: string;
    }
    namespace propTypes {
        const radioPosition_1: PropTypes.Requireable<string>;
        export { radioPosition_1 as radioPosition };
        export const onSelect: PropTypes.Validator<(...args: any[]) => any>;
        export const isSelected: PropTypes.Validator<(...args: any[]) => any>;
        export const options: PropTypes.Requireable<PropTypes.InferProps<{
            /** Header shown above options list */
            header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /** Header shown above options list inside a children */
            childrenHeader: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            /** Array of options */
            children: PropTypes.Requireable<(PropTypes.InferProps<{
                /** Used to open NestedSelect on the element with this "id" value */
                focusedId: PropTypes.Requireable<string>;
                /** Header shown above options list */
                header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
                /** Icon shown on the left of the item */
                icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
                /** Key used for the item, if not passed, title is used */
                key: PropTypes.Requireable<string>;
                /** Label used for the item */
                title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
                /** Description of the item */
                description: PropTypes.Requireable<PropTypes.ReactNodeLike>;
                /** Options below the current one */
                children: PropTypes.Requireable<any[]>;
                /** Additional information */
                info: PropTypes.Requireable<PropTypes.ReactNodeLike>;
                /** Action displayed to the right of item */
                action: PropTypes.Requireable<PropTypes.InferProps<{
                    /** Component to render */
                    Component: PropTypes.Requireable<(...args: any[]) => any>;
                    /** Props to pass to the component */
                    props: PropTypes.Requireable<object>;
                }>>;
            }> | null)[]>;
        }>>;
        export const canSelectParent: PropTypes.Requireable<boolean>;
        const transformParentItem_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { transformParentItem_1 as transformParentItem };
        export const searchOptions: PropTypes.Requireable<PropTypes.InferProps<{
            placeholderSearch: PropTypes.Validator<string>;
            noDataLabel: PropTypes.Validator<string>;
            onSearch: PropTypes.Validator<(...args: any[]) => any>;
        }>>;
        export const ellipsis: PropTypes.Requireable<boolean>;
        export const noDivider: PropTypes.Requireable<boolean>;
        export const ContentComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
}
import List from "../List";
import PropTypes from "prop-types";
