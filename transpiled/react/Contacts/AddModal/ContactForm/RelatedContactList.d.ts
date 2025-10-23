export function RelatedContactList({ name, onClose, contacts }: {
    name: any;
    onClose: any;
    contacts: any;
}): JSX.Element;
export namespace RelatedContactList {
    namespace propTypes {
        const name: PropTypes.Validator<string>;
        const onClose: PropTypes.Validator<(...args: any[]) => any>;
        const contacts: PropTypes.Validator<PropTypes.InferProps<{
            data: PropTypes.Requireable<(object | null)[]>;
        }>>;
    }
}
import PropTypes from "prop-types";
