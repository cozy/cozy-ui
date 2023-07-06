export function isRef(obj) {
  return (
    obj !== null &&
    typeof obj === 'object' &&
    Object.prototype.hasOwnProperty.call(obj, 'current')
  )
}

export function unRef(element) {
  return isRef(element) ? element.current : element
}
