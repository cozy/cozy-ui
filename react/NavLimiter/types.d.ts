declare module 'cozy-ui/transpiled/react/DropdownText' {
  import * as React from 'react'

  export interface DropdownTextProps {
    className?: string
    active?: boolean
    iconPosition?: 'start' | 'end'
    variant?: string
    onClick?: () => void
  }

  const DropdownText: React.FC<DropdownTextProps>
  export default DropdownText
}

declare module 'cozy-ui/transpiled/react/List' {
  import * as React from 'react'

  export interface ListProps {
    className?: string
  }

  const List: React.FC<ListProps>
  export default List
}

declare module 'cozy-ui/transpiled/react/Nav' {
  import * as React from 'react'

  export interface NavItemProps {
    secondary?: boolean
  }

  export interface NavLinkProps {
    className?: string
  }

  export const NavItem: React.FC<NavItemProps>
  export const NavLink: {
    className?: string
  }
}

declare module '*.styl' {
  const styles: { [className: string]: string }
  export default styles
}
