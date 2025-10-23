export default ContactsListModalWithQuery;
declare function ContactsListModalWithQuery(props: any): JSX.Element;
declare namespace ContactsListModalWithQuery {
    namespace propTypes {
        const onItemClick: PropTypes.Requireable<(...args: any[]) => any>;
        const placeholder: PropTypes.Requireable<string | boolean>;
        const addContactLabel: PropTypes.Requireable<string | boolean>;
        const emptyMessage: PropTypes.Requireable<string | boolean>;
        const dismissAction: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
