export default ModalStack;
/**
 * Wraps children so that they can push views that will appear as modals.
 *
 * - Children receive stack{Pop,Push} methods through `useViewStack`.
 * - When stackPush(<View />) is called, a modal containing <View/> is displayed
 * - When stackPop() is called, the modal disappears
 * - Several modals can be stacked in this manner
 * - The <Modal /> element wrapping <View /> can receive props via the 2nd
 * argument of stackPush : `stackPush(<SmallView />, { size: 'xsmall' })`
 *
 * Can be used as a replacement of a <ViewStack /> on mobile
 */
declare function ModalStack({ children }: {
    children: any;
}): JSX.Element;
