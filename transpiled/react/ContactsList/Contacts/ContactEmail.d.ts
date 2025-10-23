export default ContactEmail;
declare function ContactEmail({ email }: {
    email: any;
}): JSX.Element;
declare namespace ContactEmail {
    namespace propTypes {
        const email: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const email_1: string;
        export { email_1 as email };
    }
}
import PropTypes from "prop-types";
