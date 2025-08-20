import { render, screen, fireEvent, act } from '@testing-library/react'
import React from 'react'

import GroupsSelect from './GroupsSelect'
import SelectedGroupProvider from './GroupsSelectProvider'
import Control from './SelectBox/Control'
import AlertProvider from '../../providers/Alert'
import DemoProvider from '../../providers/DemoProvider'

const createGroup = jest.fn()
const updateGroup = jest.fn()
const deleteGroup = jest.fn()

export const groups = [
  {
    id: '5b49553c5916cf7b5b2a5f48600078a8',
    _id: '5b49553c5916cf7b5b2a5f48600078a8',
    _type: 'io.cozy.contacts.groups',
    _rev: '1-7862def64fb044932d3264e2f8477454',
    cozyMetadata: {
      createdAt: '2019-07-15T11:22:13.551Z',
      createdByApp: 'Contacts',
      createdByAppVersion: '0.8.5',
      metadataVersion: 1,
      updatedAt: '2019-07-15T11:22:13.551Z',
      updatedByApps: [
        { date: '2019-07-15T11:22:13.551Z', slug: 'Contacts', version: '0.8.5' }
      ]
    },
    metadata: { version: 1 },
    name: '2018-2019 Enseignants'
  },
  {
    id: '8cb7ea7fe264260e997529439b0091c0',
    _id: '8cb7ea7fe264260e997529439b0091c0',
    _type: 'io.cozy.contacts.groups',
    _rev: '1-8b92242f1ccaca20e7862306cddbe37f',
    cozyMetadata: {
      createdAt: '2020-04-15T06:46:20.128Z',
      createdByApp: 'Contacts',
      createdByAppVersion: '0.8.7',
      metadataVersion: 1,
      updatedAt: '2020-04-15T06:46:20.128Z',
      updatedByApps: [
        { date: '2020-04-15T06:46:20.128Z', slug: 'Contacts', version: '0.8.7' }
      ]
    },
    metadata: { version: 1 },
    name: 'ez'
  },
  {
    id: '18c031b0ac9f47cdc48b275b1900726d',
    _id: '18c031b0ac9f47cdc48b275b1900726d',
    _type: 'io.cozy.contacts.groups',
    _rev: '1-f438477a749fa0b90cde2e7c53a41bd6',
    cozyMetadata: {
      createdAt: '2019-11-08T07:45:55.424Z',
      createdByApp: 'Contacts',
      createdByAppVersion: '0.8.6',
      metadataVersion: 1,
      updatedAt: '2019-11-08T07:45:55.424Z',
      updatedByApps: [
        { date: '2019-11-08T07:45:55.424Z', slug: 'Contacts', version: '0.8.6' }
      ]
    },
    metadata: { version: 1 },
    name: 'groupe test'
  }
]

const setup = () => {
  const root = render(
    <DemoProvider>
      <AlertProvider>
        <SelectedGroupProvider>
          <GroupsSelect
            value={[groups[0]]}
            allGroups={groups}
            components={{ Control }}
            onChange={() => {}}
            onGroupCreate={createGroup}
            onGroupUpdate={updateGroup}
            onGroupDelete={deleteGroup}
          />
        </SelectedGroupProvider>
      </AlertProvider>
    </DemoProvider>
  )
  return { root }
}

describe('GroupsSelect', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should display every groups and group creation button', () => {
    setup()

    act(() => {
      fireEvent.click(screen.getByText('Groups'))
    })

    for (const group of groups) {
      expect(screen.queryByText(group.name)).not.toBeNull()
    }
    expect(screen.queryByText('Create a group')).not.toBeNull()
  })

  it('should be able to create a new group', () => {
    setup()

    act(() => {
      fireEvent.click(screen.getByText('Groups'))
    })

    act(() => {
      fireEvent.click(screen.getByText('Create a group'))
    })

    // it should replace the button by an empty input
    let createGroupInput = screen.queryByRole('textbox', {
      id: 'createGroupInput'
    })
    expect(createGroupInput).not.toBeNull()
    expect(createGroupInput.value).toBe('')

    act(() => {
      // it should trigger creation function by pressing Enter key, and clear the input
      fireEvent.change(
        screen.getByRole('textbox', {
          id: 'createGroupInput'
        }),
        { target: { value: 'new group' } }
      )
    })

    createGroupInput = screen.queryByRole('textbox', {
      id: 'createGroupInput'
    })
    expect(createGroupInput).not.toBeNull()
    expect(createGroupInput.value).toBe('new group')

    act(() => {
      fireEvent.keyDown(
        screen.getByRole('textbox', {
          id: 'createGroupInput'
        }),
        { key: 'Enter', keyCode: '13' }
      )
    })

    expect(createGroup).toHaveBeenCalled()
    createGroupInput = screen.queryByRole('textbox', {
      id: 'createGroupInput'
    })
    expect(createGroupInput).not.toBeNull()
    expect(createGroupInput.value).toBe('')
  })

  it("shouldn't be able to create a new group", () => {
    setup()

    act(() => {
      fireEvent.click(screen.getByText('Groups'))
    })

    act(() => {
      fireEvent.click(screen.getByText('Create a group'))
    })

    // it should replace the button by an empty input
    let createGroupInput = screen.queryByRole('textbox', {
      id: 'createGroupInput'
    })
    expect(createGroupInput).not.toBeNull()
    expect(createGroupInput.value).toBe('')

    act(() => {
      // it should trigger creation function by pressing Enter key, and clear the input
      fireEvent.change(
        screen.getByRole('textbox', {
          id: 'createGroupInput'
        }),
        { target: { value: '' } }
      )
    })

    createGroupInput = screen.queryByRole('textbox', {
      id: 'createGroupInput'
    })
    expect(createGroupInput).not.toBeNull()
    expect(createGroupInput.value).toBe('')

    act(() => {
      fireEvent.keyDown(
        screen.getByRole('textbox', {
          id: 'createGroupInput'
        }),
        { key: 'Enter', keyCode: '13' }
      )
    })

    expect(createGroup).not.toHaveBeenCalled()
    createGroupInput = screen.queryByRole('textbox', {
      id: 'createGroupInput'
    })
    expect(createGroupInput).not.toBeNull()
    expect(createGroupInput.value).toBe('')
  })

  it('should be able to rename a group', () => {
    setup()

    act(() => {
      // it should replace the field by input with group name as value
      fireEvent.click(screen.getByText('Groups'))
    })

    act(() => {
      fireEvent.click(
        screen.getByTestId(`ActionsOption_${groups[0].name}-icon_pen`)
      )
    })

    let editGroupInput = screen.queryByRole('textbox', {
      id: 'editGroupInput'
    })
    expect(editGroupInput).not.toBeNull()
    expect(editGroupInput.value).toBe(groups[0].name)

    act(() => {
      // it should trigger rename function by pressing Enter key, and remove input
      fireEvent.keyDown(
        screen.getByRole('textbox', {
          id: 'editGroupInput'
        }),
        { key: 'Enter', keyCode: '13' }
      )
    })

    expect(updateGroup).toHaveBeenCalled()
    editGroupInput = screen.queryByRole('textbox', {
      id: 'editGroupInput'
    })
    expect(editGroupInput).toBeNull()
  })
})
