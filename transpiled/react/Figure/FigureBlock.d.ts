export default FigureBlock;
/**
 * Shows a `Figure` with a label, useful for important numbers.
 *
 * A part from `className` and `label`, takes same properties
 * as `Figure`.
 */
declare function FigureBlock({ className, label, total, symbol, coloredPositive, coloredNegative, signed, decimalNumbers, figureClassName, withCurrencySpacing }: {
    className: any;
    label: any;
    total: any;
    symbol: any;
    coloredPositive: any;
    coloredNegative: any;
    signed: any;
    decimalNumbers?: number | undefined;
    figureClassName: any;
    withCurrencySpacing: any;
}): JSX.Element;
declare namespace FigureBlock {
    namespace propTypes {
        const label: Types.Validator<string>;
        const className: Types.Requireable<string>;
    }
}
import Types from "prop-types";
