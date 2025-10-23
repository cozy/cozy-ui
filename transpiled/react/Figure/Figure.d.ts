export default Figure;
declare function Figure(props: any): JSX.Element;
declare namespace Figure {
    namespace propTypes {
        const total: Types.Validator<string | number>;
        const totalClassName: Types.Requireable<string>;
        const symbol: Types.Requireable<string>;
        const currencyClassName: Types.Requireable<string>;
        const coloredPositive: Types.Requireable<boolean>;
        const coloredNegative: Types.Requireable<boolean>;
        const signed: Types.Requireable<boolean>;
        const decimalNumbers: Types.Requireable<number>;
        const warningLimit: Types.Requireable<number>;
        const withCurrencySpacing: Types.Requireable<boolean>;
        const blurred: Types.Requireable<boolean>;
    }
}
import Types from "prop-types";
