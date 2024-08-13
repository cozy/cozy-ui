import { Theme } from '@material-ui/core';
import { FlagshipUI } from '../hooks/useSetFlagshipUi/useSetFlagshipUI';
interface DialogEffectsOptions {
    cozybar?: Element | null;
    fullscreen?: boolean;
    immersive?: boolean;
    sidebar?: HTMLElement | Element | null;
    rootModal?: HTMLElement | Element | null;
    theme: Theme;
    isLight?: boolean;
}
export declare enum DOMStrings {
    BackgroundDefault = "default",
    BackgroundPaper = "paper",
    CozyBarBackground = "background-color",
    CozyBarClass = ".coz-bar-wrapper",
    CozyBarPrimaryClass = "coz-theme-primary",
    DialogClass = ".MuiPaper-root",
    OverlayActive = "rgba(0, 0, 0, 0.5)",
    OverlayTransparent = "transparent",
    RootModalColor = "color",
    SidebarID = "sidebar"
}
export declare const makeOnMount: ({ cozybar, fullscreen, sidebar, rootModal, theme, isLight }: DialogEffectsOptions) => FlagshipUI;
export declare const makeOnUnmount: ({ rootModal, theme, immersive, sidebar, cozybar, isLight }: DialogEffectsOptions) => FlagshipUI;
/**
 * Custom version of useSetFlagshipUi() that is aware of the Dialog component.
 *
 * The difference here is that we send messages to the Native app when a props change.
 * In the original version, we send the mount message as soon as the component is rendered.
 *
 * Dialog can be rendered but hidden, so we need to wait for the open prop to be true
 */
export declare const useDialogSetFlagshipUI: (open: boolean, onMount: FlagshipUI, onUnmount?: FlagshipUI | undefined, caller?: string | undefined) => void;
export declare const useDialogEffects: (open: boolean, fullscreen?: boolean | undefined) => void;
export {};
