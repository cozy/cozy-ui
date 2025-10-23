export default FieldInputLayout;
declare function FieldInputLayout({ attributes: { layout, icon, isSecondary, ...attributes }, contacts, showSecondaryFields, formProps }: {
    attributes: {
        [x: string]: any;
        layout: any;
        icon: any;
        isSecondary: any;
    };
    contacts: any;
    showSecondaryFields: any;
    formProps: any;
}): JSX.Element;
declare namespace FieldInputLayout {
    namespace propTypes {
        const attributes: PropTypes.Requireable<object>;
        const contacts: PropTypes.Requireable<PropTypes.InferProps<{
            data: PropTypes.Requireable<(object | null)[]>;
        }>>;
        const formProps: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
