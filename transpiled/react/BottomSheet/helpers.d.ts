export function computeToolbarHeight(toolbarProps?: {}): number;
export function computeMaxHeight(toolbarProps: any): number;
export function computeMediumHeight({ backdrop, maxHeight, mediumHeight, mediumHeightRatio, innerContentHeight, bottomSpacerHeight, offset }: {
    backdrop: any;
    maxHeight: any;
    mediumHeight: any;
    mediumHeightRatio: any;
    innerContentHeight: any;
    bottomSpacerHeight: any;
    offset: any;
}): any;
export function computeMinHeight({ isClosable, isOpenMin, headerRef, offset, actionButtonsHeight, actionButtonsBottomMargin }: {
    isClosable: any;
    isOpenMin: any;
    headerRef: any;
    offset?: number | undefined;
    actionButtonsHeight: any;
    actionButtonsBottomMargin: any;
}): any;
export function makeOverridenChildren(children: any, headerContentRef: any): any[];
export function setTopPosition({ snapIndex, peekHeights, isTopPosition, setIsTopPosition }: {
    snapIndex: any;
    peekHeights: any;
    isTopPosition: any;
    setIsTopPosition: any;
}): void;
export function setBottomPosition({ snapIndex, isBottomPosition, setIsBottomPosition }: {
    snapIndex: any;
    isBottomPosition: any;
    setIsBottomPosition: any;
}): void;
export function minimizeAndClose({ backdrop, setCurrentIndex, setIsTopPosition, setIsBottomPosition, handleClose }: {
    backdrop: any;
    setCurrentIndex: any;
    setIsTopPosition: any;
    setIsBottomPosition: any;
    handleClose: any;
}): void;
export function computeBottomSpacer({ backdrop, maxHeight, innerContentHeight, toolbarProps, offset }: {
    backdrop: any;
    maxHeight: any;
    innerContentHeight: any;
    toolbarProps: any;
    offset: any;
}): any;
export function getCssValue(element: any, value: any): number;
