export default ContactPhone;
declare function ContactPhone({ phone }: {
    phone: any;
}): JSX.Element;
declare namespace ContactPhone {
    namespace propTypes {
        const phone: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const phone_1: string;
        export { phone_1 as phone };
    }
}
import PropTypes from "prop-types";
