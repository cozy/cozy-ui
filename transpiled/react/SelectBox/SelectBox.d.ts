declare var _default: JSX.Element;
export default _default;
export function Option({ children, isSelected, isFocused, isDisabled, innerProps, innerRef, labelComponent, withCheckbox }: {
    children: any;
    isSelected: any;
    isFocused: any;
    isDisabled: any;
    innerProps: any;
    innerRef: any;
    labelComponent: any;
    withCheckbox: any;
}): JSX.Element;
export namespace Option {
    namespace propTypes {
        const withCheckbox: PropTypes.Requireable<boolean>;
        const labelComponent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        const withCheckbox_1: boolean;
        export { withCheckbox_1 as withCheckbox };
    }
}
export function CheckboxOption({ ...props }: {
    [x: string]: any;
}): JSX.Element;
export namespace CheckboxOption {
    const propTypes_1: {};
    export { propTypes_1 as propTypes };
}
export function ActionsOption({ actions, ...props }: {
    [x: string]: any;
    actions: any;
}): JSX.Element;
export namespace ActionsOption {
    export namespace propTypes_2 {
        const actions: PropTypes.Requireable<(PropTypes.InferProps<{
            icon: PropTypes.Requireable<string>;
            onClick: PropTypes.Requireable<(...args: any[]) => any>;
            iconProps: PropTypes.Requireable<object>;
        }> | null)[]>;
    }
    export { propTypes_2 as propTypes };
    export namespace defaultProps_1 {
        const actions_1: never[];
        export { actions_1 as actions };
    }
    export { defaultProps_1 as defaultProps };
}
/**
 * Determines maxHeight property for menuList component. This value is computed
 * with a container element and the current SelectBox element.
 * The container element defines an element which the SelectBox should not
 * overflow.
 * @param  {object} container React reference to an element containing
 * the SelectBox
 * @param  {object} element    React reference to the ReactSelect element
 * @return {object}            A style object, with `menuList` property set.
 */
export function computedMenuListHeightStyles(container: object, selectElement: any): object;
export function reactSelectControl(CustomControl: any): ({ innerProps, innerRef, children }: {
    innerProps: any;
    innerRef: any;
    children: any;
}) => JSX.Element;
export class SelectBox extends React.Component<any, any, any> {
    constructor(props: any);
    state: {
        isOpen: boolean;
    };
    element: any;
    handleRef(ref: any): void;
    handleOpen(): void;
    handleClose(): void;
    refreshMenuStyle(): void;
    menuStyle: object | undefined;
    controlRef: any;
    render(): JSX.Element;
}
export namespace SelectBox {
    export namespace propTypes_3 {
        const container: PropTypes.Requireable<object>;
        const components: PropTypes.Requireable<object>;
        const disabled: PropTypes.Requireable<boolean>;
        const fullwidth: PropTypes.Requireable<boolean>;
        const inset: PropTypes.Requireable<boolean>;
        const name: PropTypes.Requireable<string>;
        const inputRef: PropTypes.Requireable<(...args: any[]) => any>;
        const size: PropTypes.Requireable<string>;
        const styles: PropTypes.Requireable<object>;
    }
    export { propTypes_3 as propTypes };
    export namespace defaultProps_2 {
        const components_1: {};
        export { components_1 as components };
        const fullwidth_1: boolean;
        export { fullwidth_1 as fullwidth };
        const inset_1: boolean;
        export { inset_1 as inset };
        const size_1: string;
        export { size_1 as size };
        const styles_1: {};
        export { styles_1 as styles };
    }
    export { defaultProps_2 as defaultProps };
}
import PropTypes from "prop-types";
import React from "react";
export { components };
