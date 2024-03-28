import React, { Children, isValidElement, useState } from 'react'

import DropdownText from 'cozy-ui/transpiled/react/DropdownText'
import List from 'cozy-ui/transpiled/react/List'
import styles from './styles.styl'
import { NavItem } from 'cozy-ui/transpiled/react/Nav'

interface NavLimiterProps {
  children: React.ReactNode
  max?: number
  showMoreString: string
  showLessString: string
}

/**
 * Component that limits the number of displayed children in a list
 * and provides a dropdown button to toggle between displaying all children or a limited number of children.
 * Provided children should be of type `<ListItem />` or similar.
 */
export const NavLimiter = ({
  children,
  showMoreString,
  showLessString,
  max = 5
}: NavLimiterProps): JSX.Element => {
  const [viewAll, setViewAll] = useState(false)
  const childrenArray = Children.toArray(children).filter(isValidElement)
  const amountHidden = Math.max(0, childrenArray.length - max)
  const displayedChildren = viewAll
    ? childrenArray
    : childrenArray.slice(0, max)

  return (
    <List className="u-p-0 u-w-100">
      <div className={styles['c-nav-limiter']}>{displayedChildren}</div>

      {amountHidden > 0 && (
        <NavItem secondary>
          <DropdownText
            className={styles['c-nav-limiter-dropdown']}
            active={viewAll}
            iconPosition="start"
            variant="body2"
            onClick={(): void => setViewAll(current => !current)}
          >
            <span>
              {viewAll ? showLessString : `${showMoreString} (${amountHidden})`}
            </span>
          </DropdownText>
        </NavItem>
      )}
    </List>
  )
}
