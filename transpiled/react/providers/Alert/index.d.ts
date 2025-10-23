/**
 * @typedef {import('../../Alert').AlertProps & { message: string, title: string }} ShowAlertArgs
 */
/**
 * @typedef {object} UseAlertReturn
 * @property {(args: ShowAlertArgs) => void} showAlert
 */
export const AlertContext: React.Context<any>;
export function useAlert(): UseAlertReturn;
declare var _default: React.MemoExoticComponent<({ children }: {
    children: any;
}) => JSX.Element>;
export default _default;
export type ShowAlertArgs = import('../../Alert').AlertProps & {
    message: string;
    title: string;
};
export type UseAlertReturn = {
    showAlert: (args: ShowAlertArgs) => void;
};
import React from "react";
