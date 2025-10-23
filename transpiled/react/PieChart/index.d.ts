export function makeOptions({ options, single }: {
    options: any;
    single: any;
}): any;
export function makeData({ data, single, theme }: {
    data: any;
    single: any;
    theme: any;
}): any;
export default PieChart;
declare function PieChart({ data, options, primaryText, secondaryText, single, className, ...props }: {
    [x: string]: any;
    data: any;
    options?: {} | undefined;
    primaryText: any;
    secondaryText: any;
    single?: boolean | undefined;
    className: any;
}): JSX.Element;
declare namespace PieChart {
    namespace propTypes {
        const data: PropTypes.Validator<object>;
        const options: PropTypes.Requireable<object>;
        const primaryText: PropTypes.Requireable<string>;
        const secondaryText: PropTypes.Requireable<string>;
        const single: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
    }
}
import PropTypes from "prop-types";
