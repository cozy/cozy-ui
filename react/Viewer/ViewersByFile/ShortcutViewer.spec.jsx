import React from 'react'

import CozyClient, { CozyProvider } from 'cozy-client'
import { render, waitFor } from '@testing-library/react'
import I18n from '../../providers/I18n'

import en from '../locales/en.json'

import ShortcutViewer from './ShortcutViewer'

export const locales = {
  en
}

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
    await waitFor(() => {
      expect(container).toMatchSnapshot()
    })
  })
})
