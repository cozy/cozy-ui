export function mkComponent(Tag: any, extra?: {}): ({ children, className, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
}) => JSX.Element;
