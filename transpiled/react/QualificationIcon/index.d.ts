export default QualificationIcon;
declare function QualificationIcon({ theme, qualification, ...props }: {
    [x: string]: any;
    theme: any;
    qualification: any;
}): JSX.Element;
declare namespace QualificationIcon {
    namespace propTypes {
        const qualification: PropTypes.Requireable<string>;
        const theme: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
