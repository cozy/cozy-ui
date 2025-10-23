export default ContactRow;
declare function ContactRow({ className, contact, onClick, divider, ...rest }: {
    [x: string]: any;
    className: any;
    contact: any;
    onClick: any;
    divider: any;
}): JSX.Element;
declare namespace ContactRow {
    namespace propTypes {
        const contact: PropTypes.Validator<object>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const divider: PropTypes.Requireable<boolean>;
    }
}
import PropTypes from "prop-types";
