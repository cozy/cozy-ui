export const getScrollParent = element => {
  let el = element
  let scrollTop = 0

  while (el && el.parentNode !== document) {
    scrollTop += el.scrollTop
    el = el.parentNode
  }
  return scrollTop
}
