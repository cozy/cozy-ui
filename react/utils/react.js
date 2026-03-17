import { Fragment, Children, isValidElement, cloneElement } from 'react'

/**
 * Get the name of the node
 * @param {React.ElementType || string} node
 * @returns
 */
export const getComponentName = node => {
  if (!node) return null
  // type is defined only if we use a node, but a string could be passed to
  // and so, there is no type
  return node.type?.displayName || node.type?.name || 'Node'
}

export const getChildren = props => {
  const children = Children.toArray(props.children)
  return Children.count(children) > 0 ? children : null
}

export const getChildrenCount = props => {
  const children = getChildren(props)
  return Children.count(children) || null
}

export const getLastChild = props => {
  const children = getChildren(props)

  if (!children) return null

  const lastChild = children[children.length - 1]

  return lastChild.type === Fragment
    ? getChildren(lastChild.props)[0]
    : lastChild
}

/**
 * Clone a React component and add props on it
 * @param {React.ReactElement} comp
 * @param {Function} propsCallback - get comp props as arg, return new props as object
 * @returns
 */
export const AddPropsToComp = (comp, propsCallback) =>
  isValidElement(comp)
    ? cloneElement(comp, { ...propsCallback(comp.props) })
    : null

/**
 * Clone a React child and add props on it
 * @param {React.ReactElement} children
 * @param {Function} propsCallback - get child props as arg, return new props as object
 * @returns
 */
export const AddPropsToChildren = (children, propsCallback) =>
  Children.map(children, child => AddPropsToComp(child, propsCallback))
