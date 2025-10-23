export default DateMonthPicker;
declare function DateMonthPicker({ initialValue, onSelect }: {
    initialValue: any;
    onSelect: any;
}): JSX.Element;
declare namespace DateMonthPicker {
    namespace propTypes {
        export const onSelect: PropTypes.Validator<(...args: any[]) => any>;
        export { dateMonthProp as initialValue };
    }
}
import PropTypes from "prop-types";
declare function dateMonthProp(props: any, propName: any, componentName: any): Error | undefined;
