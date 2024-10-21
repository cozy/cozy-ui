import PropTypes from 'prop-types'
import React from 'react'

import Divider from '../Divider'
import ListItem from '../ListItem'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import Skeleton from '../Skeleton'

const ListItemSkeleton = ({ hasSecondary, divider, gutters }) => {
  return (
    <>
      <ListItem gutters={gutters}>
        <ListItemIcon>
          <Skeleton
            className="u-bdrs-4"
            variant="rect"
            width={32}
            height={32}
          />
        </ListItemIcon>
        <ListItemText
          primary={<Skeleton width="75%" height={13} />}
          secondary={
            hasSecondary ? <Skeleton width="37%" height={13} /> : undefined
          }
        />
      </ListItem>
      {divider && <Divider />}
    </>
  )
}

ListItemSkeleton.propTypes = {
  /** Show secondary line or not */
  hasSecondary: PropTypes.bool,
  /** Show divider after the ListItem */
  divider: PropTypes.bool,
  gutters: PropTypes.string
}

export default ListItemSkeleton
