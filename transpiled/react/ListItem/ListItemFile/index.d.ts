export default ListItemFile;
declare function ListItemFile({ file, primary, secondary, icon, actions, selectProps, expandedAttributesProps, onClick }: {
    file: any;
    primary: any;
    secondary: any;
    icon: any;
    actions: any;
    selectProps: any;
    expandedAttributesProps: any;
    onClick: any;
}): JSX.Element;
declare namespace ListItemFile {
    namespace defaultProps {
        namespace expandedAttributesProps {
            const isExpandedAttributesActive: boolean;
        }
    }
    namespace propTypes {
        export const file: PropTypes.Requireable<object>;
        export const primary: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const secondary: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        export const actions: PropTypes.Requireable<any[]>;
        export const selectProps: PropTypes.Requireable<PropTypes.InferProps<{
            isSelectActive: PropTypes.Requireable<boolean>;
            isSelected: PropTypes.Requireable<boolean>;
            isChecked: PropTypes.Requireable<boolean>;
        }>>;
        const expandedAttributesProps_1: PropTypes.Requireable<PropTypes.InferProps<{
            isExpandedAttributesActive: PropTypes.Requireable<boolean>;
            expandedAttributes: PropTypes.Requireable<any[]>;
        }>>;
        export { expandedAttributesProps_1 as expandedAttributesProps };
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
