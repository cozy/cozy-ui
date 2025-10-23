export default useScroll;
/**
 * Get scrollTop & scrollLeft from scroll event
 * @param {HTMLElement|React.RefObject} element - Element or Ref to listen scroll event
 * @param {Object} options
 * @param {number} options.delay - Delay in ms before calling the callback
 * @returns {{ scrollTop: number, scrollLeft: number}} - Scroll state
 */
declare function useScroll(element: HTMLElement | import("react").RefObject<any>, { delay }?: {
    delay: number;
}): {
    scrollTop: number;
    scrollLeft: number;
};
