import React from 'react'
import PropTypes from 'prop-types'
import I18n, { useI18n } from '.'

const locales = { helloworld: 'Hello World !' }

const DumbI18nHelloWorld = ({ t, f, lang }) => (
  <div>
    {t('helloworld')}
    <br />
    {f('2020-01-06', 'DDD MMM')}
    <br />
    {lang}
  </div>
)

const I18nHelloWorldHook = () => {
  const { t, f, lang } = useI18n()
  return <DumbI18nHelloWorld t={t} f={f} lang={lang} />
}

const I18nHelloWorldOldAPI = (props, context) => {
  const { t, f, lang } = context
  return <DumbI18nHelloWorld t={t} f={f} lang={lang} />
}

I18nHelloWorldOldAPI.contextTypes = {
  t: PropTypes.func,
  f: PropTypes.func,
  lang: PropTypes.string
}

describe('new context api', () => {
  it('should provide t and f and lang through useI18n hook', () => {
    const root = mount(
      <I18n lang="en" dictRequire={() => locales}>
        <I18nHelloWorldHook />
      </I18n>
    )
    expect(root.html()).toBe('<div>Hello World !<br>6 Jan<br>en</div>')
  })
})

describe('old context api', () => {
  it('should provide t and f and lang through old context API', () => {
    const root = mount(
      <I18n lang="en" dictRequire={() => locales}>
        <I18nHelloWorldOldAPI />
      </I18n>
    )
    expect(root.html()).toBe('<div>Hello World !<br>6 Jan<br>en</div>')
  })
})
