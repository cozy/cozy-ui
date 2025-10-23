export function Hero({ children, ...props }: {
    [x: string]: any;
    children: any;
}): JSX.Element;
export namespace Hero {
    export { Title };
    export { Icon };
    export { Subtitle };
    export { Section };
    export { Sections };
    export { Paragraph };
    export { CTA };
}
export default Hero;
export const Title: ({ children, className, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
}) => JSX.Element;
export const Subtitle: ({ children, className, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
}) => JSX.Element;
export const Section: ({ children, className, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
}) => JSX.Element;
export const Sections: ({ children, className, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
}) => JSX.Element;
export const Paragraph: ({ children, className, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
}) => JSX.Element;
export const CTA: ({ children, className, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
}) => JSX.Element;
export function Icon({ color, icon }: {
    color: any;
    icon: any;
}): JSX.Element;
