/**
 * Shows a list of apps grouped by categories.
 *
 * Can be
 *
 * - uncontrolled: it controls an internal search object to filter the list.
 * - controlled: it is controlled by the `search` prop
 */
export class Sections extends React.Component<any, any, any> {
    constructor(props: any, context: any);
    state: {
        search: any;
    };
    handleCategoryChange(categoryOption: any): void;
    render(): JSX.Element;
}
export namespace Sections {
    namespace propTypes {
        const t: PropTypes.Validator<(...args: any[]) => any>;
        const apps: PropTypes.Validator<any[]>;
        const error: PropTypes.Requireable<object>;
        const onAppClick: PropTypes.Validator<(...args: any[]) => any>;
        const hasNav: PropTypes.Requireable<boolean>;
        const initialSearch: PropTypes.Requireable<object>;
        const displaySpecificMaintenanceStyle: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const hasNav_1: boolean;
        export { hasNav_1 as hasNav };
        const displaySpecificMaintenanceStyle_1: boolean;
        export { displaySpecificMaintenanceStyle_1 as displaySpecificMaintenanceStyle };
        export const showFilterDropdown: boolean;
        export const showTitles: boolean;
        export const showSubTitles: boolean;
        export const showSubSubTitles: boolean;
        export const componentsProps: PropTypes.Requireable<PropTypes.InferProps<{
            /** Props spread to AppsSection component */
            appsSection: PropTypes.Requireable<PropTypes.InferProps<{
                /** Props spread to onClick method of AppTile component */
                disableClick: PropTypes.Requireable<(...args: any[]) => any>;
            }>>;
        }>>;
    }
}
declare var _default: any;
export default _default;
import React from "react";
import PropTypes from "prop-types";
