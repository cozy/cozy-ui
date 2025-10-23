/// <reference types="react" />
import { IOCozyFile } from 'cozy-client/types/types';
interface ShortcutTileProps {
    file: Partial<IOCozyFile> & {
        name: string;
        attributes?: {
            metadata?: {
                icon?: string;
                iconMimeType?: string;
            };
        };
    };
}
export declare const ShortcutTile: ({ file }: ShortcutTileProps) => JSX.Element;
export {};
