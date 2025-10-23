export default ContactAddressModal;
declare function ContactAddressModal({ onClose, name, subFields }: {
    onClose: any;
    name: any;
    subFields: any;
}): JSX.Element;
declare namespace ContactAddressModal {
    namespace propTypes {
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const name: PropTypes.Validator<string>;
        const subFields: PropTypes.Validator<(PropTypes.InferProps<{
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
        }> | null)[]>;
    }
}
import PropTypes from "prop-types";
