import { render, screen } from '@testing-library/react'
import React from 'react'
import I18n from 'twake-i18n'

import ActionsMenuButton from './ActionsMenuButton'

describe('ActionsMenuButton', () => {
  it('names the menu button', () => {
    render(
      <I18n lang="en" dictRequire={() => ({})}>
        <ActionsMenuButton docs={[]} actions={[]} />
      </I18n>
    )

    expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument()
  })
})
