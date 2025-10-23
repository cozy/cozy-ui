export default ItemIcon;
declare function ItemIcon({ icon, file }: {
    icon: any;
    file: any;
}): any;
declare namespace ItemIcon {
    namespace propTypes {
        const icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const file: PropTypes.Requireable<object>;
    }
}
import PropTypes from "prop-types";
