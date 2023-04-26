import { Fragment, Children } from 'react'

export const getComponentName = component => {
  if (!component) return null
  return component.type.displayName || component.type.name || 'Component'
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
