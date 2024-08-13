import React, { useContext, forwardRef } from 'react'

import { I18nContext } from '.'

// higher order decorator for components that need `t` and/or `f`
const translate = () => WrappedComponent => {
  const Wrapper = forwardRef((props, ref) => {
    const i18nContext = useContext(I18nContext)

    return (
      <WrappedComponent
        {...props}
        ref={ref}
        t={i18nContext && i18nContext.t}
        f={i18nContext && i18nContext.f}
        lang={i18nContext && i18nContext.lang}
      />
    )
  })

  Wrapper.displayName = `withI18n(${WrappedComponent.displayName ||
    WrappedComponent.name})`

  return Wrapper
}

export default translate
