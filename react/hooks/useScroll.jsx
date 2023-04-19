import { useState } from 'react'
import debounce from 'lodash/debounce'

import useEventListener from './useEventListener'
import { unRef } from '../helpers/ref'

/**
 * Get scrollTop & scrollLeft from scroll event
 * @param {HTMLElement|React.RefObject} element - Element or Ref to listen scroll event
 * @param {Object} options
 * @param {number} options.delay - Delay in ms before calling the callback
 * @returns {{ scrollTop: number, scrollLeft: number}} - Scroll state
 */
const useScroll = (element, { delay = 250 } = {}) => {
  const [scroll, setScroll] = useState({
    scrollTop: 0,
    scrollLeft: 0
  })

  const handleScroll = debounce(() => {
    const mainElement = unRef(element)

    if (mainElement === window) {
      setScroll({
        scrollTop: window.scrollY,
        scrollLeft: window.scrollX
      })
    } else {
      setScroll({
        scrollTop: mainElement.scrollTop,
        scrollLeft: mainElement.scrollLeft
      })
    }
  }, delay)

  // For Desktop
  useEventListener(element, 'scroll', handleScroll)
  // For Mobile
  useEventListener(element, 'touchmove', handleScroll)

  return scroll
}

export default useScroll
