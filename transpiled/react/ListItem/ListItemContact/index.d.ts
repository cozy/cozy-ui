export default ListItemContact;
declare function ListItemContact({ contact, primary, secondary, icon, actions, selectProps, expandedAttributesProps, onClick }: {
    contact: any;
    primary: any;
    secondary: any;
    icon: any;
    actions: any;
    selectProps: any;
    expandedAttributesProps: any;
    onClick: any;
}): JSX.Element;
declare namespace ListItemContact {
    namespace defaultProps {
        const actions: never[];
    }
    namespace propTypes {
        export const contact: PropTypes.Requireable<object>;
        export const primary: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const secondary: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const actions_1: PropTypes.Requireable<any[]>;
        export { actions_1 as actions };
        export const selectProps: PropTypes.Requireable<PropTypes.InferProps<{
            isSelectActive: PropTypes.Requireable<boolean>;
            isSelected: PropTypes.Requireable<boolean>;
            isChecked: PropTypes.Requireable<boolean>;
        }>>;
        export const expandedAttributesProps: PropTypes.Requireable<PropTypes.InferProps<{
            isExpandedAttributesActive: PropTypes.Requireable<boolean>;
            expandedAttributes: PropTypes.Requireable<any[]>;
        }>>;
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
