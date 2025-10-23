export default ContactsListModal;
declare function ContactsListModal({ onItemClick, placeholder, addContactLabel, emptyMessage, dismissAction, contacts }: {
    onItemClick: any;
    placeholder: any;
    addContactLabel: any;
    emptyMessage: any;
    dismissAction: any;
    contacts: any;
}): JSX.Element;
declare namespace ContactsListModal {
    namespace propTypes {
        const onItemClick: PropTypes.Requireable<(...args: any[]) => any>;
        const placeholder: PropTypes.Requireable<string | boolean>;
        const addContactLabel: PropTypes.Requireable<string | boolean>;
        const emptyMessage: PropTypes.Requireable<string | boolean>;
        const dismissAction: PropTypes.Requireable<(...args: any[]) => any>;
        const contacts: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
