'use strict'
/* eslint-env jest */
import React from 'react'

import { computedMenuListHeightStyles } from '../SelectBox'
import { SelectBox } from '../SelectBox'
import { isIOSApp } from 'cozy-device-helper'

jest.mock('cozy-device-helper', () => ({
  ...jest.requireActual('cozy-device-helper'),
  isIOSApp: jest.fn()
}))

describe('SelectBox', () => {
  describe('computedMenuListHeightStyles', () => {
    const fixtures = {
      containerMock: {
        getBoundingClientRect: jest.fn().mockReturnValue({
          bottom: 235
        }),
        style: {
          paddingTop: '1rem',
          paddingBottom: '2rem'
        }
      },
      selectMock: {
        getBoundingClientRect: jest.fn().mockReturnValue({
          bottom: 100
        })
      },
      stylesBaseMock: {
        paddingTop: 2,
        paddingBottom: 2
      }
    }

    it('returns expected style object', () => {
      const styleClosures = computedMenuListHeightStyles(
        fixtures.containerMock,
        fixtures.selectMock
      )
      expect(typeof styleClosures.menuList).toBe('function')

      expect(styleClosures.menuList(fixtures.stylesBaseMock)).toEqual({
        paddingTop: 2,
        paddingBottom: 2,
        maxHeight: 'calc(131px - 1rem - 2rem)'
      })
    })

    it('returns expected style object when container has no padding', () => {
      const styleClosures = computedMenuListHeightStyles(
        { ...fixtures.containerMock, style: {} },
        fixtures.selectMock
      )
      expect(typeof styleClosures.menuList).toBe('function')

      expect(styleClosures.menuList(fixtures.stylesBaseMock)).toEqual({
        paddingTop: 2,
        paddingBottom: 2,
        maxHeight: 'calc(131px - 0px - 0px)'
      })
    })

    it('returns expected style object when base styles have no padding', () => {
      const styleClosures = computedMenuListHeightStyles(
        fixtures.containerMock,
        fixtures.selectMock
      )
      expect(typeof styleClosures.menuList).toBe('function')

      expect(styleClosures.menuList({})).toEqual({
        maxHeight: 'calc(135px - 1rem - 2rem)'
      })
    })
  })
  describe('needsclick', () => {
    beforeEach(() => {
      jest.resetModules()
      isIOSApp.mockReturnValue(false)
    })
    it('should not add needclicks if not on iOS', () => {
      const wrapper = shallow(<SelectBox breakpoints={{}} />)
      expect(wrapper.prop('classNamePrefix')).toEqual('')
    })
    it('shoudl add needclick if iOS', () => {
      isIOSApp.mockReturnValue(true)
      const wrapper = shallow(<SelectBox breakpoints={{}} />)
      expect(wrapper.prop('classNamePrefix')).toContain('needsclick')
    })
  })
})
