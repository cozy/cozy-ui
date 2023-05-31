import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'

import Thumbnail from '.'

const MockIcon = <svg />

const setup = ({ image, icon, isStacked } = {}) => {
  return render(<Thumbnail image={image} icon={icon} isStacked={isStacked} />)
}

describe('Thumbnail components:', () => {
  describe('Thumbnail without Skeleton', () => {
    describe('Thumbnail with "image" prop without Skeleton', () => {
      it('should display an unstacked image', () => {
        const { getByTestId, queryByTestId } = setup({
          image: '/fakeImagePath'
        })

        expect(getByTestId('ThumbnailImage')).toBeInTheDocument()
        expect(queryByTestId('BackgroundThumbnailImage')).toBeNull()
        expect(queryByTestId('Skeleton')).toBeNull()
      })

      it('should display an stacked image', () => {
        const { getByTestId, queryByTestId } = setup({
          image: '/fakeImagePath',
          isStacked: true
        })

        expect(getByTestId('ThumbnailImage')).toBeInTheDocument()
        expect(getByTestId('BackgroundThumbnailImage')).toBeInTheDocument()
        expect(queryByTestId('Skeleton')).toBeNull()
      })
    })

    describe('Thumbnail with "icon" prop without Skeleton', () => {
      it('should display an unstacked icon String', () => {
        const { getByTestId, queryByTestId } = setup({
          icon: 'fake-icon-string'
        })

        expect(getByTestId('ThumbnailIcon')).toBeInTheDocument()
        expect(queryByTestId('BackgroundThumbnailIcon')).toBeNull()
        expect(queryByTestId('Skeleton')).toBeNull()
      })

      it('should display an unstacked icon Component', () => {
        const { getByTestId, queryByTestId } = setup({
          icon: MockIcon
        })

        expect(getByTestId('ThumbnailIcon')).toBeInTheDocument()
        expect(queryByTestId('BackgroundThumbnailIcon')).toBeNull()
        expect(queryByTestId('Skeleton')).toBeNull()
      })

      it('should display an stacked icon String', () => {
        const { getByTestId, queryByTestId } = setup({
          icon: 'fake-icon-string',
          isStacked: true
        })

        expect(getByTestId('ThumbnailIcon')).toBeInTheDocument()
        expect(getByTestId('BackgroundThumbnailIcon')).toBeInTheDocument()
        expect(queryByTestId('Skeleton')).toBeNull()
      })

      it('should display an stacked icon Component', () => {
        const { getByTestId, queryByTestId } = setup({
          icon: MockIcon,
          isStacked: true
        })

        expect(getByTestId('ThumbnailIcon')).toBeInTheDocument()
        expect(getByTestId('BackgroundThumbnailIcon')).toBeInTheDocument()
        expect(queryByTestId('Skeleton')).toBeNull()
      })
    })
  })

  describe('Thumbnail with Skeleton', () => {
    it('should display only one Thumbnail with Skeleton', () => {
      const { getByTestId, queryByTestId } = setup()

      expect(getByTestId('ThumbnailWrapper')).toBeInTheDocument()
      expect(getByTestId('Skeleton')).toBeInTheDocument()
      expect(queryByTestId('ThumbnailBackgroundWrapper')).toBeNull()
    })

    it('should display Thumbnail stacked with Skeleton', () => {
      const { getByTestId } = setup({ isStacked: true })

      expect(getByTestId('ThumbnailWrapper')).toBeInTheDocument()
      expect(getByTestId('SkeletonBackground')).toBeInTheDocument()
      expect(getByTestId('ThumbnailBackgroundWrapper')).toBeInTheDocument()
    })
  })
})
