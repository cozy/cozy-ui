export default ViewStack;
/**
 * Wraps children to builds an animated carrousel where children
 * can push/pop views.
 *
 * - Children receive stack{Pop,Push} methods through `useViewStack`.
 * - When stackPush(<View />) is called, the carrousel animates to this view
 * - When stackPop() is called, the carrousel animates to the view just before
 * - It is possible to await on stackPop() to wait for the animation to finish
 */
declare function ViewStack({ children }: {
    children: any;
}): JSX.Element;
