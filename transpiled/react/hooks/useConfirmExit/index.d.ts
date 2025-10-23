/**
 * @typedef useConfirmExitResponse
 * @property {function} requestToLeave - gets an URL or function,
 * triggers a confirmation modal and redirect the browser to this URL
 * or call this function if the user confirms.
 * @property {function} exitConfirmationModal - React component
 * that will show a confirmation modal when requested by requestToLeave
 * and nothing otherwise
 */
/**
 * When provided a message, will warn the user before exiting the page
 *
 * When the browser detects a page unload (go to another website or
 * leave the window/tab), it will show a native popup asking for
 * confirmation. This popup may show the `message` but will usually
 * use a native message from the browser.
 *
 * If the user confirm he wants to leave, `onLeave` will be executed.
 * This function may not be able to execute async code.
 *
 * @param {bool|function} activate - (return) falsy to deactivate the behaviour
 * @param {string} message - Confirmation message
 * @param {string} title - Title of the modal
 * @param {function} onLeave - will be executed before returning
 * @returns {useConfirmExitResponse}
 */
export default function useConfirmExit({ activate, onLeave, message, title, leaveLabel, cancelLabel }?: bool | Function): useConfirmExitResponse;
export type useConfirmExitResponse = {
    /**
     * - gets an URL or function,
     * triggers a confirmation modal and redirect the browser to this URL
     * or call this function if the user confirms.
     */
    requestToLeave: Function;
    /**
     * - React component
     * that will show a confirmation modal when requested by requestToLeave
     * and nothing otherwise
     */
    exitConfirmationModal: Function;
};
