export function AppTile({ app, name: nameProp, namePrefix, onClick, showDeveloper, showStatus, IconComponent: IconComponentProp, displaySpecificMaintenanceStyle }: {
    app: any;
    name: any;
    namePrefix: any;
    onClick: any;
    showDeveloper: any;
    showStatus: any;
    IconComponent: any;
    displaySpecificMaintenanceStyle: any;
}): JSX.Element;
export namespace AppTile {
    namespace propTypes {
        export { AppDoctype as app };
        export const name: PropTypes.Requireable<string>;
        export const namePrefix: PropTypes.Requireable<string>;
        export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        export const IconComponent: PropTypes.Requireable<PropTypes.ReactElementLike>;
        export const showDeveloper: PropTypes.Requireable<boolean>;
        export const showStatus: PropTypes.Requireable<boolean | any[]>;
        export const displaySpecificMaintenanceStyle: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const showDeveloper_1: boolean;
        export { showDeveloper_1 as showDeveloper };
        const showStatus_1: boolean;
        export { showStatus_1 as showStatus };
        const displaySpecificMaintenanceStyle_1: boolean;
        export { displaySpecificMaintenanceStyle_1 as displaySpecificMaintenanceStyle };
    }
}
export default AppTile;
import { AppDoctype } from "../proptypes";
import PropTypes from "prop-types";
