export default ContactCozy;
declare function ContactCozy({ cozyUrl }: {
    cozyUrl: any;
}): JSX.Element;
declare namespace ContactCozy {
    namespace propTypes {
        const cozyUrl: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const cozyUrl_1: string;
        export { cozyUrl_1 as cozyUrl };
    }
}
import PropTypes from "prop-types";
