export function addFlagshipElements(): void;
export function removeFlagshipElements(): void;
/**
 * Whether we are in cozy-ui documentation (Rsg is for ReactStyleGuide)
 * @returns {boolean}
 */
export const isRsg: boolean;
/**
 * Overrides flagship metadata
 * See https://github.com/cozy/cozy-libs/blob/master/packages/cozy-device-helper/src/flagship.ts#L13
 */
export const getFlagshipMetadata: (() => {
    immersive: boolean;
    statusBarHeight: number;
    navbarHeight: number;
}) | (() => import("cozy-device-helper/dist/flagship").FlagshipMetadata);
export function setRsgFlagshipElements({ topBackground, topOverlay, topTheme, bottomBackground, bottomOverlay, bottomTheme }?: undefined | Partial<FlagshipUI>): void;
import { FlagshipUI } from "./useSetFlagshipUI";
