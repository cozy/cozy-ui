export default PercentageLine;
/**
 * @deprecated Use [Progress](#/Progress)
 */
declare function PercentageLine({ value, color, className, style }: {
    value: any;
    color: any;
    className: any;
    style: any;
}): JSX.Element;
declare namespace PercentageLine {
    namespace propTypes {
        const value: Value;
        const color: typeof CSS;
        const className: Additional;
        const style: Custom;
    }
}
