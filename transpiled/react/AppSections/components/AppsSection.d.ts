export function AppsSection({ appsList, subtitle, onAppClick, IconComponent, displaySpecificMaintenanceStyle, disableClick }: {
    appsList: any;
    subtitle: any;
    onAppClick: any;
    IconComponent: any;
    displaySpecificMaintenanceStyle: any;
    disableClick: any;
}): JSX.Element;
export namespace AppsSection {
    namespace propTypes {
        const appsList: PropTypes.Requireable<any[]>;
        const subtitle: PropTypes.Requireable<PropTypes.ReactElementLike>;
        const onAppClick: PropTypes.Requireable<(...args: any[]) => any>;
        const IconComponent: PropTypes.Requireable<PropTypes.ReactElementLike>;
        const displaySpecificMaintenanceStyle: PropTypes.Requireable<boolean>;
        const disableClick: PropTypes.Requireable<(...args: any[]) => any>;
    }
}
export default AppsSection;
import PropTypes from "prop-types";
