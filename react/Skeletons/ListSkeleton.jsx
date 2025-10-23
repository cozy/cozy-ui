import PropTypes from 'prop-types'
import React from 'react'

import ListItemSkeleton from './ListItemSkeleton'
import List from '../List'
import ListSubheader from '../ListSubheader'

const ListSkeleton = ({ count, hasSecondary, withSubheader, divider }) => {
  return (
    <List
      subheader={
        withSubheader ? <ListSubheader>&nbsp;</ListSubheader> : undefined
      }
    >
      {[...Array(count).keys()].map((_, idx) => (
        <ListItemSkeleton
          key={idx}
          hasSecondary={hasSecondary}
          divider={divider}
        />
      ))}
    </List>
  )
}

ListSkeleton.propTypes = {
  /** Show secondary line or not */
  hasSecondary: PropTypes.bool,
  /** Number of element to show */
  count: PropTypes.number,
  /** Show divider between ListItems */
  divider: PropTypes.bool
}

ListSkeleton.defaultProps = {
  count: 1
}

export default ListSkeleton
