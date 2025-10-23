export const AppDoctype: PropTypes.Requireable<PropTypes.InferProps<{
    name: PropTypes.Requireable<string>;
    slug: PropTypes.Requireable<string>;
    developer: PropTypes.Requireable<object>;
    links: PropTypes.Requireable<PropTypes.InferProps<{
        icon: PropTypes.Requireable<string>;
    }>>;
    latest_version: PropTypes.Requireable<PropTypes.InferProps<{
        version: PropTypes.Requireable<string>;
    }>>;
}>>;
export const FileDoctype: PropTypes.Requireable<PropTypes.InferProps<{
    _id: PropTypes.Requireable<string>;
    class: PropTypes.Requireable<string>;
    mime: PropTypes.Requireable<string>;
    name: PropTypes.Requireable<string>;
}>>;
import PropTypes from "prop-types";
