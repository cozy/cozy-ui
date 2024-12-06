import { render, screen } from '@testing-library/react'
import React from 'react'

import { I18n } from '.'
import withLocales from './withLocales'

const globalLocales = {
  en: {
    'hello-world': 'Hello global world !'
  },
  fr: {
    'hello-world': 'Bonjour le monde global !'
  }
}

const componentLocales = {
  en: {
    'hello-world': 'Hello local world !'
  },
  fr: {
    'hello-world': 'Bonjour le monde local !'
  }
}

class MockComponent extends React.Component {
  render() {
    const { t } = this.props
    return <div>{t('hello-world')}</div>
  }
}

describe('with locales', () => {
  const setup = ({ lang, Component }) => {
    render(
      <I18n lang={lang} dictRequire={localeCode => globalLocales[localeCode]}>
        <Component />
      </I18n>
    )
  }

  const testComponent = (Component, description) => {
    describe(description, () => {
      it('should provide t with correct locale strings', () => {
        setup({ lang: 'en', Component })
        expect(screen.getByText('Hello local world !')).toBeInTheDocument()
        setup({ lang: 'fr', Component })
        expect(screen.getByText('Bonjour le monde local !')).toBeInTheDocument()
      })
    })
  }

  const TComponentObj = withLocales(componentLocales)(MockComponent)
  const requireLang = lang => componentLocales[lang]
  const TComponentFunc = withLocales(requireLang)(MockComponent)

  testComponent(TComponentObj, 'locales from object')
  testComponent(TComponentFunc, 'locales from require function')
})
