export function GroupsSelect({ allGroups, closeMenuOnSelect, value, styles, isMulti, noOptionsMessage, withCheckbox, components, onGroupCreated, onChange, onGroupCreate, onGroupUpdate, onGroupDelete, menuPosition }: {
    allGroups: any;
    closeMenuOnSelect: any;
    value: any;
    styles: any;
    isMulti: any;
    noOptionsMessage: any;
    withCheckbox: any;
    components: any;
    onGroupCreated: any;
    onChange: any;
    onGroupCreate: any;
    onGroupUpdate: any;
    onGroupDelete: any;
    menuPosition: any;
}): JSX.Element;
export namespace GroupsSelect {
    const propTypes: {
        allGroups: PropTypes.Validator<any[]>;
        styles: PropTypes.Requireable<object>;
        value: PropTypes.Validator<object>;
        components: PropTypes.Requireable<object>;
        isMulti: PropTypes.Requireable<boolean>;
        noOptionsMessage: PropTypes.Requireable<(...args: any[]) => any>;
        withCheckbox: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Validator<(...args: any[]) => any>;
        onGroupCreated: PropTypes.Requireable<(...args: any[]) => any>;
        onGroupCreate: PropTypes.Requireable<(...args: any[]) => any>;
        onGroupUpdate: PropTypes.Requireable<(...args: any[]) => any>;
        onGroupDelete: PropTypes.Requireable<(...args: any[]) => any>;
        closeMenuOnSelect: PropTypes.Requireable<boolean>;
        menuPosition: PropTypes.Requireable<string>;
    } | {
        allGroups: PropTypes.Validator<any[]>;
        onGroupCreate: PropTypes.Validator<(...args: any[]) => any>;
        onGroupUpdate: PropTypes.Validator<(...args: any[]) => any>;
        onGroupDelete: PropTypes.Validator<(...args: any[]) => any>;
        styles?: undefined;
        value?: undefined;
        components?: undefined;
        isMulti?: undefined;
        noOptionsMessage?: undefined;
        withCheckbox?: undefined;
        onChange?: undefined;
        onGroupCreated?: undefined;
        closeMenuOnSelect?: undefined;
        menuPosition?: undefined;
    };
    namespace defaultProps {
        const isMulti: boolean;
        const components: {};
        const closeMenuOnSelect: boolean;
    }
}
export default GroupsSelect;
import PropTypes from "prop-types";
