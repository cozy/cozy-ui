import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { getSharingLink } from 'cozy-client/dist/models/sharing'
import { isMobileApp } from 'cozy-device-helper'

import DemoProvider from '../docs/DemoProvider'
import ForwardButton from './ForwardButton'
import { exportFilesNative } from './helpers'

jest.mock('cozy-device-helper')
jest.mock('cozy-client/dist/models/sharing', () => ({
  ...jest.requireActual('cozy-client/dist/models/sharing'),
  getSharingLink: jest.fn()
}))
jest.mock('./helpers')

const file = {
  _id: '123',
  name: 'filename.pdf'
}

const setup = ({ isMobileApplication, onClick }) => {
  isMobileApp.mockReturnValue(isMobileApplication)
  return render(
    <DemoProvider>
      <ForwardButton file={file} onClick={onClick} />
    </DemoProvider>
  )
}

describe('ForwardButton', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('exportFilesNative', () => {
    it('should call it if is on native app', async () => {
      const { findByTestId } = setup({ isMobileApplication: true })

      const btn = await findByTestId('openFileButton')
      fireEvent.click(btn)

      expect(exportFilesNative).toHaveBeenCalledTimes(1)
    })

    it('should not call it if is on web app', async () => {
      const { findByTestId } = setup({ isMobileApplication: false })

      const btn = await findByTestId('openFileButton')
      fireEvent.click(btn)

      expect(exportFilesNative).toHaveBeenCalledTimes(0)
    })
  })

  describe('getSharingLink', () => {
    it('should not call it if is on native app', async () => {
      const { findByTestId } = setup({ isMobileApplication: true })

      const btn = await findByTestId('openFileButton')
      fireEvent.click(btn)

      expect(getSharingLink).toHaveBeenCalledTimes(0)
    })

    it('should not call it if the "onClick" prop is passed', async () => {
      const onClick = jest.fn()
      const { findByTestId } = setup({ isMobileApplication: true, onClick })

      const btn = await findByTestId('openFileButton')
      fireEvent.click(btn)

      expect(getSharingLink).toHaveBeenCalledTimes(0)
      expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('should call it if is on web app', async () => {
      const { findByTestId } = setup({ isMobileApplication: false })

      const btn = await findByTestId('openFileButton')
      fireEvent.click(btn)

      expect(getSharingLink).toHaveBeenCalledTimes(1)
    })
  })
})
