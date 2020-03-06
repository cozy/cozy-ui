import React from 'react'

import CozyClient, { CozyProvider } from 'cozy-client'
import I18n from '../I18n'
import { render, wait } from '@testing-library/react'

import ShortcutViewer from './ShortcutViewer'
import { locales } from './index'
const setup = () => {
  const client = new CozyClient({})
  return (
    <CozyProvider client={client}>
      <I18n lang="en" dictRequire={() => locales['en']}>
        <ShortcutViewer file={{ id: '1' }} />
      </I18n>
    </CozyProvider>
  )
}

describe('Shortcutviewer', () => {
  it('renders the component', async () => {
    const { container } = render(setup())
    expect(container).toMatchSnapshot()
    await wait()
  })
})
