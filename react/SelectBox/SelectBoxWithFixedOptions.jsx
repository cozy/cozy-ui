import { components } from 'react-select'
import React from 'react'
import groupBy from 'lodash/groupBy'

import SelectBox from './SelectBox'
import styles from './styles.styl'

const Group = props => {
  return (
    <components.Group
      {...props}
      className={props.data.isFixed ? styles.FixedGroup : styles.Group}
    />
  )
}

const MenuList = props => (
  <components.MenuList {...props} className={styles.MenuList} />
)

const Nothing = () => null

const groupByFixed = options => {
  const { fixed = [], normal = [] } = groupBy(options, o =>
    o.fixed ? 'fixed' : 'normal'
  )
  return [
    { label: 'normal', options: normal },
    { label: 'fixed', isFixed: true, options: fixed }
  ]
}

const SelectBoxWithFixedOptions = props => (
  <SelectBox
    {...props}
    options={groupByFixed(props.options)}
    styles={{
      ...props.styles
    }}
    components={{
      MenuList: MenuList,
      GroupHeading: Nothing,
      Group,
      ...props.components
    }}
  />
)

SelectBoxWithFixedOptions.defaultProps = {
  styles: {},
  components: {}
}

export default SelectBoxWithFixedOptions
