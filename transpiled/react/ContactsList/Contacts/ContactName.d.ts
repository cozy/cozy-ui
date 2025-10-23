export default ContactName;
declare function ContactName({ contact }: {
    contact: any;
}): JSX.Element;
declare namespace ContactName {
    namespace propTypes {
        const contact: PropTypes.Validator<object>;
    }
}
import PropTypes from "prop-types";
