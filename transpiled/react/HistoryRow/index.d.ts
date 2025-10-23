export default HistoryRow;
/**
 *
 * This component display a timeline of file's version
 */
declare function HistoryRow({ style, primaryText, secondaryText, tag, downloadLink, ...rest }: {
    [x: string]: any;
    style: any;
    primaryText: any;
    secondaryText: any;
    tag: any;
    downloadLink: any;
}): JSX.Element;
declare namespace HistoryRow {
    namespace propTypes {
        const style: PropTypes.Requireable<object>;
        const title: PropTypes.Requireable<string>;
        const primaryText: PropTypes.Requireable<string>;
        const secondaryText: PropTypes.Requireable<string>;
        const tag: PropTypes.Requireable<string>;
        const downloadLink: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
