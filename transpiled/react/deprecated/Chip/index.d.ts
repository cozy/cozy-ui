export default Chip;
export function RoundChip(props: any): JSX.Element;
export class ChipButton extends React.PureComponent<any, any, any> {
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare class Chip extends React.PureComponent<any, any, any> {
    static defaultProps: {
        component: string;
        size: string;
        variant: string;
        theme: string;
    };
    constructor(props: Readonly<any>);
    constructor(props: any, context?: any);
    render(): JSX.Element;
}
declare namespace Chip {
    export { ChipButton as Button };
    export { RoundChip as Round };
    export function Separator({ className }: {
        className: any;
    }): JSX.Element;
}
import React from "react";
