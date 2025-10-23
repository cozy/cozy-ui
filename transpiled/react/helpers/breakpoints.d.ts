export function getBreakpointsStatus(breakpoints: any, innerWidth: any): {
    [x: string]: boolean;
};
export function isInsideIframe(): boolean;
export default breakpoints;
declare namespace breakpoints {
    const isExtraLarge: number[];
    const isLarge: number[];
    const isMedium: number[];
    const isSmall: number[];
    const isTiny: number[];
    const isDesktop: number[];
    const isTablet: number[];
    const isMobile: number[];
}
