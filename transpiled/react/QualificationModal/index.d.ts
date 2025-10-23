export default QualificationModal;
declare function QualificationModal({ file, title, noDataLabel, onClose }: {
    file: any;
    title: any;
    noDataLabel: any;
    onClose: any;
}): JSX.Element;
declare namespace QualificationModal {
    namespace propTypes {
        const file: PropTypes.Requireable<object>;
        const title: PropTypes.Requireable<string>;
        const noDataLabel: PropTypes.Requireable<string>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
