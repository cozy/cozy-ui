import React from 'react'
import { UploadQueue, formatRemainingTime } from '.'
import { render } from '@testing-library/react'
import { useI18n } from '../providers/I18n'

jest.mock('../providers/I18n/withLocales', () =>
  jest.fn().mockImplementation(() => x => x)
)

jest.mock('../providers/I18n', () => ({
  translate: jest.fn().mockImplementation(() => x => x),
  useI18n: jest.fn(),
  DEFAULT_LANG: 'en'
}))

describe('UploadQueue', () => {
  describe('formatRemainingTime', () => {
    it('should return correct remaining time', () => {
      const time = formatRemainingTime(29)

      expect(time).toEqual('less than a minute')
    })
  })

  describe('UploadQueue', () => {
    beforeEach(() => {
      useI18n.mockReturnValue({
        t: (key, format) =>
          format ? `${key} ${format.time} ${format.smart_count}` : key
      })
    })

    it('should set singular value when "1 minute remaining"', () => {
      const item = {
        file: { name: 'file' },
        status: 'status',
        isDirectory: 'isDirectory',
        progress: { loaded: 1234, total: 5678, remainingTime: 89 },
        getMimeTypeIcon: 'getMimeTypeIcon'
      }

      const { container } = render(<UploadQueue queue={[item]} />)

      expect(
        container.getElementsByClassName('u-flex-shrink')[0]
      ).toHaveTextContent('item.remainingTime 1 minute 1')
    })

    it('should set singular value when "moins d 1 minute remaining"', () => {
      const item = {
        file: { name: 'file' },
        status: 'status',
        isDirectory: 'isDirectory',
        progress: { loaded: 1234, total: 5678, remainingTime: 29 },
        getMimeTypeIcon: 'getMimeTypeIcon'
      }

      const { container } = render(<UploadQueue queue={[item]} />)

      expect(
        container.getElementsByClassName('u-flex-shrink')[0]
      ).toHaveTextContent('item.remainingTime less than a minute 1')
    })

    it('should set plural value when "44 minutes remainings"', () => {
      const item = {
        file: { name: 'file' },
        status: 'status',
        isDirectory: 'isDirectory',
        progress: { loaded: 1234, total: 5678, remainingTime: 2669 },
        getMimeTypeIcon: 'getMimeTypeIcon'
      }

      const { container } = render(<UploadQueue queue={[item]} />)

      expect(
        container.getElementsByClassName('u-flex-shrink')[0]
      ).toHaveTextContent('item.remainingTime 44 minutes 2')
    })

    it('should set singular value when "1 hour remaining" - low limit', () => {
      const item = {
        file: { name: 'file' },
        status: 'status',
        isDirectory: 'isDirectory',
        progress: { loaded: 1234, total: 5678, remainingTime: 2671 },
        getMimeTypeIcon: 'getMimeTypeIcon'
      }

      const { container } = render(<UploadQueue queue={[item]} />)

      expect(
        container.getElementsByClassName('u-flex-shrink')[0]
      ).toHaveTextContent('item.remainingTime about 1 hour 1')
    })

    it('should set singular value when "about 1 hour remaining" - high limit', () => {
      const item = {
        file: { name: 'file' },
        status: 'status',
        isDirectory: 'isDirectory',
        progress: { loaded: 1234, total: 5678, remainingTime: 5369 },
        getMimeTypeIcon: 'getMimeTypeIcon'
      }

      const { container } = render(<UploadQueue queue={[item]} />)

      expect(
        container.getElementsByClassName('u-flex-shrink')[0]
      ).toHaveTextContent('item.remainingTime about 1 hour 1')
    })

    it('should set plural value when more than "2 hours remainings"', () => {
      const item = {
        file: { name: 'file' },
        status: 'status',
        isDirectory: 'isDirectory',
        progress: { loaded: 1234, total: 5678, remainingTime: 5371 },
        getMimeTypeIcon: 'getMimeTypeIcon'
      }

      const { container } = render(<UploadQueue queue={[item]} />)

      expect(
        container.getElementsByClassName('u-flex-shrink')[0]
      ).toHaveTextContent('item.remainingTime about 2 hours 2')
    })

    it('should not update time and bar everytime loaded/remaining time update', () => {
      const item = (remainingTime, loaded) => ({
        file: { name: 'file' },
        status: 'status',
        isDirectory: 'isDirectory',
        progress: { loaded, total: 4936, remainingTime },
        getMimeTypeIcon: 'getMimeTypeIcon'
      })

      const { rerender, getAllByRole, container } = render(
        <UploadQueue queue={[item(5371, 1234)]} />
      )

      expect(
        container.getElementsByClassName('u-flex-shrink')[0]
      ).toHaveTextContent('item.remainingTime about 2 hours 2')
      expect(getAllByRole('progressbar')[1]).toHaveAttribute(
        'aria-valuenow',
        '25'
      )

      rerender(<UploadQueue queue={[item(1, 5677)]} />)

      expect(
        container.getElementsByClassName('u-flex-shrink')[0]
      ).toHaveTextContent('item.remainingTime about 2 hours 2')
      expect(getAllByRole('progressbar')[1]).toHaveAttribute(
        'aria-valuenow',
        '25'
      )
    })
  })
})
