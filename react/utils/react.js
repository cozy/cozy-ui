import { Fragment, Children } from 'react'

export const getComponentName = component => {
  if (!component) return null
  return component.type.displayName || component.type.name || 'Component'
}

export const getChildren = props => {
  return Children.toArray(props.children)
}

export const getChildrenCount = props => {
  const children = getChildren(props)
  return children.length
}

export const getLastChild = props => {
  const children = getChildren(props)
  const lastChild = children[children.length - 1]

  return lastChild.type === Fragment
    ? getChildren(lastChild.props)[0]
    : lastChild
}
