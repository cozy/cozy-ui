export namespace spacingByAvatarSize {
    const xs: number;
    const s: number;
    const m: number;
    const l: number;
    const xl: number;
}
export default AvatarGroup;
declare function AvatarGroup({ size, ...props }: {
    [x: string]: any;
    size: any;
}): JSX.Element;
declare namespace AvatarGroup {
    namespace defaultProps {
        const size: string;
    }
}
