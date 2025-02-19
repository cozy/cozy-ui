import { forwardRef, useEffect, useState } from 'react'
import { useDragDropManager } from 'react-dnd'

const TableContainerWithDnD = forwardRef(({ children }, ref) => {
  const dragDropManager = useDragDropManager()
  const monitor = dragDropManager.getMonitor()
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const unsubscribe = monitor.subscribeToStateChange(() => {
      setIsDragging(monitor.isDragging())
    })
    return () => unsubscribe()
  }, [monitor])

  useEffect(() => {
    if (!isDragging) return
    const scrollThreshold = 250
    const scrollMaxSpeed = 100

    const intervalId = setInterval(() => {
      const offset = monitor.getClientOffset()
      const container = ref.current
      if (!offset || !container) return

      const { top, bottom } = container.getBoundingClientRect()
      const distanceToTop = offset.y - top
      const distanceToBottom = bottom - offset.y

      if (distanceToTop < scrollThreshold) {
        const speed = scrollMaxSpeed * (1 - distanceToTop / scrollThreshold)
        container.scrollBy(0, -speed)
      } else if (distanceToBottom < scrollThreshold) {
        const speed = scrollMaxSpeed * (1 - distanceToBottom / scrollThreshold)
        container.scrollBy(0, speed)
      }
    }, 16) // ~60fps

    return () => clearInterval(intervalId)
  }, [isDragging, monitor, ref])

  return children
})

export default TableContainerWithDnD
