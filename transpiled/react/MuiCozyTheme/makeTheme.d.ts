export function makeTheme(type: any, variant: any): {
    overrides: any;
    shape: import("@material-ui/core/styles/shape").Shape;
    breakpoints: import("@material-ui/core/styles/createBreakpoints").Breakpoints;
    direction: import("@material-ui/core/styles/createTheme").Direction;
    mixins: import("@material-ui/core/styles/createMixins").Mixins;
    palette: import("@material-ui/core/styles/createPalette").Palette;
    props?: import("@material-ui/core/styles/props").ComponentsProps | undefined;
    shadows: import("@material-ui/core/styles/shadows").Shadows;
    spacing: import("@material-ui/core/styles/createSpacing").Spacing;
    transitions: import("@material-ui/core/styles/transitions").Transitions;
    typography: import("@material-ui/core/styles/createTypography").Typography;
    zIndex: import("@material-ui/core/styles/zIndex").ZIndex;
    unstable_strictMode?: boolean | undefined;
};
