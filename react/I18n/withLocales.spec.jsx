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

class Component extends React.Component {
  render() {
    const { t } = this.props
    return <div>{t('hello-world')}</div>
  }
}
const TComponent = withLocales(componentLocales)(Component)

describe('with locales', () => {
  let root
  const setup = ({ lang }) => {
    root = mount(
      <I18n lang={lang} dictRequire={localeCode => globalLocales[localeCode]}>
        <TComponent />
      </I18n>
    )
  }
  it('should provide t with correct locale strings', () => {
    setup({ lang: 'en' })
    expect(root.text()).toBe('Hello local world !')
    setup({ lang: 'fr' })
    expect(root.text()).toBe('Bonjour le monde local !')
  })
})
