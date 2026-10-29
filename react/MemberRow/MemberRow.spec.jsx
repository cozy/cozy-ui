import { render, screen } from '@testing-library/react'
import React from 'react'
import { I18n, useI18n } from 'twake-i18n'

import MemberRow from '.'
import List from '../List'
import DemoProvider from '../providers/DemoProvider'

describe('MemberRow', () => {
  it('keeps the translations of the app in the subtitle, and its own', () => {
    const AppSubtitle = () => {
      const { t } = useI18n()
      return t('status')
    }
    render(
      <DemoProvider>
        <I18n lang="en" dictRequire={() => ({ status: 'Invitation sent' })}>
          <List>
            <MemberRow
              member={{
                id: 'bob',
                name: 'Bob',
                subtitle: <AppSubtitle />,
                role: 'editor',
                canRemove: true
              }}
              roles={[{ value: 'editor', label: 'Editor' }]}
              onRoleChange={jest.fn()}
              onRemove={jest.fn()}
            />
          </List>
        </I18n>
      </DemoProvider>
    )

    expect(screen.queryByText('Invitation sent')).toBeInTheDocument()
    expect(screen.queryByLabelText('Remove from sharing')).toBeInTheDocument()
  })
})
