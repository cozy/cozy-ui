/**
 * Return the env(safe-area-inset-[position]) value
 * expl: "0px"
 */
export const getSafeArea = (position: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(
    `--safe-area-inset-${position}`
  )

/**
 * Return the env(safe-area-inset-[position]) value without unit
 * expl: 0 for "0px"
 */
export const getSafeAreaValue = (position: string): number =>
  parseInt(getSafeArea(position))
