import { components } from 'react-select'
import React from 'react'
import groupBy from 'lodash/groupBy'

import SelectBox from './SelectBox'
import { silver } from '../palette'

const optionPadding = 0.25

const fixedOptionsStyle = {
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  paddingTop: optionPadding + 'rem',
  paddingBottom: optionPadding + 'rem',
  borderTop: `1px solid ${silver}`,
  background: 'white',
  position: 'relative'
}

const FixedOptions = props => (
  <div style={fixedOptionsStyle}>{props.children}</div>
)

/*
  This is the hacky part, where fixed options vnodes are manually spliced
  from the options vnodes. Fixed options vnodes are returned along with
  the menuUi where fixed vnodes have been removed.

  We rely on react-select internal structure `menu > scroll captor > menu list > options`.
  This code should be updated if react-select's internal structure changes.

  https://github.com/cozy/cozy-ui/pull/501
*/
const extractFixed = children => {
  const newChildren = React.cloneElement(children)
  const menuList = newChildren.children ? newChildren.children[0] : null
  if (!menuList) {
    return { fixed: [], newChildren }
  }
  const options = menuList.children
  const { fixed, normal } = groupBy(
    options,
    vnode => (vnode.attributes.data.fixed === true ? 'fixed' : 'normal')
  )
  newChildren.children[0].children = normal
  return { fixed, newChildren }
}

const MenuWithFixedOptions = props => {
  const { children } = props
  const { fixed, newChildren: menuUi } = extractFixed(children)
  return (
    <div>
      <components.Menu {...props}>
        {menuUi}
        <FixedOptions>{fixed}</FixedOptions>
      </components.Menu>
    </div>
  )
}

const fixedMenuStyle = {
  zIndex: 10,
  overflow: 'hidden',
  // the space at the end is important otherwise the property gets autoprefixed (by what, I
  // don't know) and is no longer understood by the browser
  display: 'flex ',
  flexDirection: 'column'
}

const SelectBoxWithFixedOptions = props => (
  <SelectBox
    {...props}
    styles={{
      menu: base => ({
        ...base,
        ...fixedMenuStyle
      }),
      ...(props.styles || {})
    }}
    components={{
      Menu: MenuWithFixedOptions,
      ...(props.components || {})
    }}
  />
)

export default SelectBoxWithFixedOptions
