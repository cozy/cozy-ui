export function BreakpointsProvider({ parentBasedIframe, children }: {
    parentBasedIframe: any;
    children: any;
}): JSX.Element;
export namespace BreakpointsProvider {
    namespace defaultProps {
        const parentBasedIframe: boolean;
    }
    namespace propTypes {
        const parentBasedIframe_1: PropTypes.Requireable<boolean>;
        export { parentBasedIframe_1 as parentBasedIframe };
    }
}
export function useBreakpoints(): never;
export default useBreakpoints;
import PropTypes from "prop-types";
