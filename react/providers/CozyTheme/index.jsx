import React, { createContext, useContext, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import flag from 'cozy-flags'
import log from 'cozy-logger'

import { isRsg } from '../../hooks/useSetFlagshipUi/helpers'
import useMediaQuery from '../../hooks/useMediaQuery'
import MuiCozyTheme from '../../MuiCozyTheme'
import CozyThemeWithQuery from './CozyThemeWithQuery'

export const CozyThemeContext = createContext()

export const useCozyTheme = () => {
  const context = useContext(CozyThemeContext)

  if (!context) {
    log(
      'error',
      '`CozyThemeContext` is missing. `useCozyTheme()` must be used within a `<CozyTheme>`. `light normal` is returned as fallback value.'
    )

    return { type: 'light', variant: 'normal' }
  }

  return context
}

const DumbCozyTheme = ({
  variant,
  className,
  ignoreItself,
  settingsThemeType,
  children
}) => {
  const uiThemeType = localStorage.getItem('ui-theme-type') // use only for cozy-ui documentation and argos screenshots
  const uiThemeVariant = localStorage.getItem('ui-theme-variant') // use only for cozy-ui documentation and argos screenshots

  const isOnlyLight = !!flag('ui.darkmode.enabled') // should be remove when dark mode is validated on all apps
  const deviceThemeType = useMediaQuery('(prefers-color-scheme: dark)')
    ? isOnlyLight
      ? 'dark'
      : 'light'
    : 'light'

  const selfThemeType =
    uiThemeType ||
    (['light', 'dark'].includes(settingsThemeType)
      ? settingsThemeType
      : deviceThemeType)
  const selfThemeVariant = uiThemeVariant || variant

  useLayoutEffect(() => {
    const negativeThemeType = selfThemeType === 'light' ? 'dark' : 'light'

    // remove "negative" value because can be changed without refresh
    document
      .querySelector('body')
      .classList.remove(`CozyTheme--${negativeThemeType}-normal`)

    // add css var to body to be able to use them on it
    document
      .querySelector('body')
      .classList.add(`CozyTheme--${selfThemeType}-normal`) // `add` omits if already present
  }, [selfThemeType])

  return (
    <CozyThemeContext.Provider
      value={{ type: selfThemeType, variant: selfThemeVariant }}
    >
      <MuiCozyTheme type={selfThemeType} variant={selfThemeVariant}>
        <div
          className={cx(className, {
            [`CozyTheme--${selfThemeType}-${selfThemeVariant}`]: Boolean(
              selfThemeVariant
            ),
            'u-dc': ignoreItself
          })}
        >
          {children}
        </div>
      </MuiCozyTheme>
    </CozyThemeContext.Provider>
  )
}
DumbCozyTheme.propTypes = CozyThemeProptypes
DumbCozyTheme.defaultProps = CozyThemeDefaultProps

const CozyTheme = props => {
  const Comp =
    process.env.NODE_ENV === 'test' || isRsg
      ? DumbCozyTheme
      : CozyThemeWithQuery

  return <Comp {...props} />
}

const CozyThemeProptypes = {
  variant: PropTypes.oneOf(['normal', 'inverted']),
  /** Causes this element's children to appear as if they were direct children of the element's parent, ignoring the element itself. */
  ignoreItself: PropTypes.bool,
  className: PropTypes.string,
  settingsThemeType: PropTypes.string,
  children: PropTypes.node
}

const CozyThemeDefaultProps = {
  variant: 'normal',
  ignoreItself: true
}
CozyTheme.propTypes = CozyThemeProptypes
CozyTheme.defaultProps = CozyThemeDefaultProps

// export this way to help doc generates correct component and props
export default CozyTheme
export { DumbCozyTheme }
