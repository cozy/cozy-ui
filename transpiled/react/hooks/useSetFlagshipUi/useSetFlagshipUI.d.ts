import { FlagshipUI as IntentInterface } from 'cozy-intent/dist/api/models/applications';
import { WebviewService } from 'cozy-intent/dist/api/services/WebviewService';
export declare enum ThemeColor {
    Dark = "dark",
    Light = "light"
}
export interface FlagshipUI extends Omit<IntentInterface, 'topTheme' | 'bottomTheme'> {
    topTheme: ThemeColor;
    bottomTheme: ThemeColor;
}
export declare const parseArg: (webviewIntent?: void | WebviewService | undefined, arg?: FlagshipUI | undefined, caller?: string | undefined) => void;
export declare const useSetFlagshipUI: (onMount: FlagshipUI, onUnmount?: FlagshipUI | undefined, caller?: string | undefined) => void;
