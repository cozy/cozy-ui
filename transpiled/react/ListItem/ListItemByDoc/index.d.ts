export default ListItemByDoc;
declare function ListItemByDoc({ doc, primary, secondary, icon, actions, selectProps, expandedAttributesProps: { isExpandedAttributesActive, expandedAttributes }, onClick }: {
    doc: any;
    primary: any;
    secondary: any;
    icon: any;
    actions: any;
    selectProps: any;
    expandedAttributesProps: {
        isExpandedAttributesActive: any;
        expandedAttributes: any;
    };
    onClick: any;
}): JSX.Element;
declare namespace ListItemByDoc {
    namespace defaultProps {
        namespace selectProps {
            const isSelectActive: boolean;
            const isSelected: boolean;
            const isChecked: boolean;
        }
        namespace expandedAttributesProps {
            const isExpandedAttributesActive: boolean;
        }
    }
    namespace propTypes {
        export const doc: PropTypes.Requireable<object>;
        export const primary: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const secondary: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const actions: PropTypes.Requireable<any[]>;
        const selectProps_1: PropTypes.Requireable<PropTypes.InferProps<{
            isSelectActive: PropTypes.Requireable<boolean>;
            isSelected: PropTypes.Requireable<boolean>;
            isChecked: PropTypes.Requireable<boolean>;
        }>>;
        export { selectProps_1 as selectProps };
        const expandedAttributesProps_1: PropTypes.Requireable<PropTypes.InferProps<{
            isExpandedAttributesActive: PropTypes.Requireable<boolean>;
            expandedAttributes: PropTypes.Requireable<any[]>;
        }>>;
        export { expandedAttributesProps_1 as expandedAttributesProps };
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
