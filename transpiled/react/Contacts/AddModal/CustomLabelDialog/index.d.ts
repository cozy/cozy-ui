export default CustomLabelDialog;
declare function CustomLabelDialog({ customValue, setCustomValue, customLabelOptions, onSubmit, onClose }: {
    customValue: any;
    setCustomValue: any;
    customLabelOptions: any;
    onSubmit: any;
    onClose: any;
}): JSX.Element;
declare namespace CustomLabelDialog {
    namespace propTypes {
        const customValue: PropTypes.Requireable<string>;
        const setCustomValue: PropTypes.Requireable<(...args: any[]) => any>;
        const customLabelOptions: PropTypes.Requireable<PropTypes.InferProps<{
            hide: PropTypes.Requireable<boolean>;
            defaultType: PropTypes.Requireable<string>;
            defaultLabel: PropTypes.Requireable<string>;
        }>>;
        const onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
