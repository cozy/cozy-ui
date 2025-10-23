export default ButtonClient;
declare function ButtonClient(props: any): JSX.Element;
declare namespace ButtonClient {
    namespace propTypes {
        const label: PropTypes.Validator<string>;
        const href: PropTypes.Validator<string>;
        const className: PropTypes.Requireable<string>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const icon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
    namespace defaultProps {
        const className_1: string;
        export { className_1 as className };
    }
}
import PropTypes from "prop-types";
