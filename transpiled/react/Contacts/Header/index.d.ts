export default Header;
declare function Header({ allGroups, onContactCreate, onContactImport, onSearch, onGroupCreate, onGroupDelete, onGroupUpdate }: {
    allGroups: any;
    onContactCreate: any;
    onContactImport: any;
    onSearch: any;
    onGroupCreate: any;
    onGroupDelete: any;
    onGroupUpdate: any;
}): JSX.Element;
declare namespace Header {
    namespace propTypes {
        const allGroups: PropTypes.Requireable<any[]>;
        const onContactCreate: PropTypes.Requireable<(...args: any[]) => any>;
        const onContactImport: PropTypes.Requireable<(...args: any[]) => any>;
        const onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        const onGroupCreate: PropTypes.Requireable<(...args: any[]) => any>;
        const onGroupUpdate: PropTypes.Requireable<(...args: any[]) => any>;
        const onGroupDelete: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const allGroups_1: never[];
        export { allGroups_1 as allGroups };
    }
}
import PropTypes from "prop-types";
