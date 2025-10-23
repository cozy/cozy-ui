/**
 * Checks if the browser is offline
 *
 * This is done through the browser API. It cannot garantees that the browser
 * is able to contact the serveur, nor that the connection is stable enough.
 *
 * In Nodejs, where this API doesn't exists, always return `false`.
 * @returns {boolean}
 */
export default function useBrowserOffline(): boolean;
