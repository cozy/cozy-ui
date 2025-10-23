export default DefaultButton;
export function Button(props: any): JSX.Element;
export namespace Button {
    namespace propTypes {
        const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const icon: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const iconOnly: PropTypes.Requireable<boolean>;
        const theme: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string>;
        const extension: PropTypes.Requireable<string>;
        const align: PropTypes.Requireable<string>;
        const round: PropTypes.Requireable<boolean>;
        const className: PropTypes.Requireable<string>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const extraRight: any;
        const busy: PropTypes.Requireable<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const type: PropTypes.Requireable<string>;
        const subtle: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const type_1: string;
        export { type_1 as type };
        export const tag: string;
        const size_1: string;
        export { size_1 as size };
        const align_1: string;
        export { align_1 as align };
    }
}
export function ButtonLink(props: any): JSX.Element;
export namespace ButtonLink {
    export namespace defaultProps_1 {
        const tag_1: string;
        export { tag_1 as tag };
    }
    export { defaultProps_1 as defaultProps };
}
declare function DefaultButton(props: any): JSX.Element;
import PropTypes from "prop-types";
