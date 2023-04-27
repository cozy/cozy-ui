import React, { forwardRef, useEffect, useMemo } from 'react'
import cx from 'classnames'
import MUIListItemText from '@material-ui/core/ListItemText'
import once from 'lodash/once'

const logDeprecatedWarning = once(() => {
  console.warn(
    'primaryText/primaryTextClassName and secondaryText/secondaryTextClassName are deprecated. Please use directly the primary prop : primary={<span className="u-error">Error</span>} for example.'
  )
})

const defaultSecondaryTypographyProps = { variant: 'caption' }

const ellipsisClassNames = 'u-db u-ellipsis'

const getTypographyProp = (props, className, ellipsis) => {
  return !className && !ellipsis
    ? props
    : {
        classes: { root: cx(className, ellipsis && ellipsisClassNames) },
        ...props
      }
}

const ListItemText = forwardRef((props, ref) => {
  const {
    primaryText,
    secondaryText,
    primaryTextClassName,
    secondaryTextClassName,
    primary: primaryProp,
    secondary: secondaryProp,
    ellipsis,
    ...rest
  } = props

  useEffect(() => {
    if (
      primaryText ||
      secondaryText ||
      primaryTextClassName ||
      secondaryTextClassName
    ) {
      logDeprecatedWarning()
    }
  }, [primaryText, secondaryText, primaryTextClassName, secondaryTextClassName])

  const primary = primaryProp ? primaryProp : primaryText
  const secondary = secondaryProp ? secondaryProp : secondaryText

  let { primaryTypographyProps, secondaryTypographyProps } = props

  primaryTypographyProps = useMemo(() => {
    return getTypographyProp(
      primaryTypographyProps,
      primaryTextClassName,
      ellipsis
    )
  }, [primaryTypographyProps, primaryTextClassName, ellipsis])

  secondaryTypographyProps = useMemo(() => {
    return getTypographyProp(
      secondaryTypographyProps || defaultSecondaryTypographyProps,
      secondaryTextClassName,
      ellipsis
    )
  }, [secondaryTypographyProps, secondaryTextClassName, ellipsis])

  return (
    <MUIListItemText
      ref={ref}
      primary={primary}
      secondary={secondary}
      primaryTypographyProps={primaryTypographyProps}
      secondaryTypographyProps={secondaryTypographyProps}
      {...rest}
    />
  )
})

ListItemText.displayName = 'ListItemText'

ListItemText.defaultProps = {
  ellipsis: true
}

export default ListItemText
