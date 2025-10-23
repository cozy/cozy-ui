export default QualificationItem;
declare function QualificationItem({ icon, label, isSelected, onClick, ...props }: {
    [x: string]: any;
    icon: any;
    label: any;
    isSelected: any;
    onClick: any;
}): JSX.Element;
declare namespace QualificationItem {
    namespace propTypes {
        const icon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const label: PropTypes.Requireable<string>;
        const isSelected: PropTypes.Requireable<boolean>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
