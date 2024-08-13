import {
  computeMaxHeight,
  computeMediumHeight,
  computeMinHeight,
  setTopPosition,
  setBottomPosition,
  minimizeAndClose,
  computeToolbarHeight,
  computeBottomSpacer
} from './helpers'

jest.mock('../helpers/getSafeArea', () => ({
  getSafeAreaValue: jest.fn().mockReturnValue(15)
}))
jest.mock('../hooks/useSetFlagshipUi/helpers', () => ({
  getFlagshipMetadata: jest.fn(() => ({ navbarHeight: 10 }))
}))
const windowSpy = jest.spyOn(window, 'window', 'get')
windowSpy.mockImplementation(() => ({ innerHeight: 800 }))

describe('computeMaxHeight', () => {
  it('should return correct value if no arg', () => {
    const res = computeMaxHeight({})

    expect(res).toBe(799)
  })

  it('should return correct value with height arg', () => {
    const res = computeMaxHeight({ height: 50 })

    expect(res).toBe(750)
  })

  it('should return correct value with ref arg', () => {
    const res = computeMaxHeight({ ref: { current: { offsetHeight: 50 } } })

    expect(res).toBe(750)
  })
})

describe('computeMediumHeight', () => {
  describe('with no backdrop', () => {
    it('should return mediumHeight value if mediumHeight < maxHeight', () => {
      const res = computeMediumHeight({
        backdrop: false,
        maxHeight: 800,
        mediumHeight: 400
      })

      expect(res).toBe(400)
    })

    it('should return maxHeight value if mediumHeight > maxHeight', () => {
      const res = computeMediumHeight({
        backdrop: false,
        maxHeight: 800,
        mediumHeight: 900
      })

      expect(res).toBe(800)
    })

    it('should return the innerContentHeight if innerContentHeight < mediumHeight', () => {
      const res = computeMediumHeight({
        backdrop: false,
        maxHeight: 800,
        mediumHeight: 400,
        innerContentHeight: 200,
        offset: 0
      })

      expect(res).toBe(200)
    })

    it('should return the innerContentHeight with offset if innerContentHeight < mediumHeight and offset set', () => {
      const res = computeMediumHeight({
        backdrop: false,
        maxHeight: 800,
        mediumHeight: 400,
        innerContentHeight: 200,
        bottomSpacerHeight: 0,
        offset: 48
      })

      expect(res).toBe(248)
    })
  })

  describe('with backdrop', () => {
    it('should return innerContentHeight value if lower than mediumHeight', () => {
      const res = computeMediumHeight({
        backdrop: true,
        maxHeight: 800,
        mediumHeight: 400,
        innerContentHeight: 300,
        bottomSpacerHeight: 0
      })

      expect(res).toBe(300)
    })

    it('should return innerContentHeight and bottomSpacerHeight value if lower than mediumHeight and bottomSpacerHeight set', () => {
      const res = computeMediumHeight({
        backdrop: true,
        maxHeight: 800,
        mediumHeight: 400,
        innerContentHeight: 300,
        bottomSpacerHeight: 48
      })

      expect(res).toBe(348)
    })

    it('should return mediumHeight value if lower than innerContentHeight', () => {
      const res = computeMediumHeight({
        backdrop: true,
        maxHeight: 800,
        mediumHeight: 300,
        innerContentHeight: 400
      })

      expect(res).toBe(300)
    })

    it('should return maxHeight value if mediumHeight and innerContentHeight are higher', () => {
      const res = computeMediumHeight({
        backdrop: true,
        maxHeight: 800,
        mediumHeight: 900,
        innerContentHeight: 900
      })

      expect(res).toBe(800)
    })
  })
})

describe('computeMinHeight', () => {
  it('should return 0 if isClosable true', () => {
    const res = computeMinHeight({ isClosable: true })

    expect(res).toBe(0)
  })

  it('should return correct value if isClosable false', () => {
    const res = computeMinHeight({
      isClosable: false,
      headerRef: { current: { offsetHeight: 10 } },
      actionButtonsHeight: 20,
      actionButtonsBottomMargin: 30
    })

    expect(res).toBe(85)
  })
})

describe('setTopPosition', () => {
  describe('it should set top position', () => {
    it('to true if snapIndex is higher than maxHeightSnapIndex', () => {
      const setIsTopPosition = jest.fn()

      setTopPosition({
        snapIndex: 3,
        peekHeights: [0, 100, 200],
        setIsTopPosition
      })

      expect(setIsTopPosition).toHaveBeenCalledWith(true)
    })

    it('to true if snapIndex = maxHeightSnapIndex and isTopPosition is false', () => {
      const setIsTopPosition = jest.fn()

      setTopPosition({
        snapIndex: 2,
        peekHeights: [0, 100, 200],
        isTopPosition: false,
        setIsTopPosition
      })

      expect(setIsTopPosition).toHaveBeenCalledWith(true)
    })

    it('to false if snapIndex < maxHeightSnapIndex and isTopPosition is true', () => {
      const setIsTopPosition = jest.fn()

      setTopPosition({
        snapIndex: 1,
        peekHeights: [0, 100, 200],
        isTopPosition: true,
        setIsTopPosition
      })

      expect(setIsTopPosition).toHaveBeenCalledWith(false)
    })
  })

  describe('it should not set top position', () => {
    it('if snapIndex = maxHeightSnapIndex and isTopPosition is true', () => {
      const setIsTopPosition = jest.fn()

      setTopPosition({
        snapIndex: 2,
        peekHeights: [0, 100, 200],
        isTopPosition: true,
        setIsTopPosition
      })

      expect(setIsTopPosition).not.toHaveBeenCalled()
    })

    it('if snapIndex < maxHeightSnapIndex and isTopPosition is false', () => {
      const setIsTopPosition = jest.fn()

      setTopPosition({
        snapIndex: 1,
        peekHeights: [0, 100, 200],
        isTopPosition: false,
        setIsTopPosition
      })

      expect(setIsTopPosition).not.toHaveBeenCalled()
    })
  })
})

describe('setBottomPosition', () => {
  describe('it should set bottom position', () => {
    it('if snapIndex = 0 and isBottomPosition is false', () => {
      const setIsBottomPosition = jest.fn()

      setBottomPosition({
        snapIndex: 0,
        isBottomPosition: false,
        setIsBottomPosition
      })

      expect(setIsBottomPosition).toHaveBeenCalledWith(true)
    })

    it('should snapIndex != 0 and isBottomPosition is true', () => {
      const setIsBottomPosition = jest.fn()

      setBottomPosition({
        snapIndex: 1,
        isBottomPosition: true,
        setIsBottomPosition
      })

      expect(setIsBottomPosition).toHaveBeenCalledWith(false)
    })
  })

  describe('it should not set bottom position', () => {
    it('if snapIndex = 0 and isBottomPosition is true', () => {
      const setIsBottomPosition = jest.fn()

      setBottomPosition({
        snapIndex: 0,
        isBottomPosition: true,
        setIsBottomPosition
      })

      expect(setIsBottomPosition).not.toHaveBeenCalled()
    })

    it('if snapIndex != 0 and isBottomPosition is false', () => {
      const setIsBottomPosition = jest.fn()

      setBottomPosition({
        snapIndex: 1,
        isBottomPosition: false,
        setIsBottomPosition
      })

      expect(setIsBottomPosition).not.toHaveBeenCalled()
    })
  })
})

describe('minimizeAndClose', () => {
  jest.useFakeTimers()

  it('should not trigger function if no backdrop', () => {
    const setCurrentIndex = jest.fn()
    const setIsTopPosition = jest.fn()
    const setIsBottomPosition = jest.fn()
    const handleClose = jest.fn()

    minimizeAndClose({
      backdrop: false,
      setCurrentIndex,
      setIsTopPosition,
      setIsBottomPosition,
      handleClose
    })

    jest.runAllTimers()

    expect(setCurrentIndex).not.toHaveBeenCalled()
    expect(setIsTopPosition).not.toHaveBeenCalled()
    expect(setIsBottomPosition).not.toHaveBeenCalled()
    expect(handleClose).not.toHaveBeenCalled()
  })

  it('should trigger every function if backdrop is true', () => {
    const setCurrentIndex = jest.fn()
    const setIsTopPosition = jest.fn()
    const setIsBottomPosition = jest.fn()
    const handleClose = jest.fn()

    minimizeAndClose({
      backdrop: true,
      setCurrentIndex,
      setIsTopPosition,
      setIsBottomPosition,
      handleClose
    })

    jest.runAllTimers()

    expect(setCurrentIndex).toHaveBeenCalledWith(0)
    expect(setIsTopPosition).toHaveBeenCalledWith(false)
    expect(setIsBottomPosition).toHaveBeenCalledWith(true)
    expect(handleClose).toHaveBeenCalled()
  })
})

describe('computeBottomSpacer', () => {
  describe('without backdrop', () => {
    describe('inner content longer than max height', () => {
      it('should return maxHeight - innerContentHeight if no offset', () => {
        const res = computeBottomSpacer({
          backdrop: false,
          maxHeight: 800,
          innerContentHeight: 200,
          offset: 0
        })

        expect(res).toBe(600)
      })

      it('should return maxHeight - innerContentHeight if no offset even with toolbar', () => {
        const res = computeBottomSpacer({
          backdrop: false,
          maxHeight: 800,
          innerContentHeight: 200,
          toolbarProps: { height: 50 },
          offset: 0
        })

        expect(res).toBe(600)
      })

      it('should return maxHeight - innerContentHeight even with an offset', () => {
        const res = computeBottomSpacer({
          backdrop: false,
          maxHeight: 800,
          innerContentHeight: 200,
          offset: 48
        })

        expect(res).toBe(600)
      })

      it('should return maxHeight - innerContentHeight even with an offset and toolbar', () => {
        const res = computeBottomSpacer({
          backdrop: false,
          maxHeight: 800,
          innerContentHeight: 200,
          toolbarProps: { height: 50 },
          offset: 48
        })

        expect(res).toBe(600)
      })
    })

    describe('inner content shorter than max height', () => {
      it('should return the offset value and border even if zero', () => {
        const res = computeBottomSpacer({
          backdrop: false,
          maxHeight: 800,
          innerContentHeight: 1000,
          offset: 0
        })

        expect(res).toBe(1)
      })

      it('should return the toolbar height', () => {
        const res = computeBottomSpacer({
          backdrop: false,
          maxHeight: 800,
          innerContentHeight: 1000,
          toolbarProps: { height: 50 },
          offset: 0
        })

        expect(res).toBe(50)
      })

      it('should return the offset value and border', () => {
        const res = computeBottomSpacer({
          backdrop: false,
          maxHeight: 800,
          innerContentHeight: 1000,
          offset: 48
        })

        expect(res).toBe(49)
      })

      it('should return the offset value and border and toolbar height', () => {
        const res = computeBottomSpacer({
          backdrop: false,
          maxHeight: 800,
          innerContentHeight: 1000,
          toolbarProps: { height: 50 },
          offset: 48
        })

        expect(res).toBe(98)
      })
    })
  })

  describe('with backdrop', () => {
    describe('inner content longer than max height', () => {
      it('should return the offset value even if zero', () => {
        const res = computeBottomSpacer({
          backdrop: true,
          maxHeight: 800,
          innerContentHeight: 200,
          offset: 0
        })

        expect(res).toBe(0)
      })

      it('should return the offset value even if zero and toolbar', () => {
        const res = computeBottomSpacer({
          backdrop: true,
          maxHeight: 800,
          innerContentHeight: 200,
          toolbarProps: { height: 50 },
          offset: 0
        })

        expect(res).toBe(0)
      })

      it('should return the offset value', () => {
        const res = computeBottomSpacer({
          backdrop: true,
          maxHeight: 800,
          innerContentHeight: 200,
          offset: 48
        })

        expect(res).toBe(48)
      })

      it('should return the offset value even with toolbar', () => {
        const res = computeBottomSpacer({
          backdrop: true,
          maxHeight: 800,
          innerContentHeight: 200,
          toolbarProps: { height: 50 },
          offset: 48
        })

        expect(res).toBe(48)
      })
    })

    describe('inner content shorter than max height', () => {
      it('should return the offset value even if zero', () => {
        const res = computeBottomSpacer({
          backdrop: true,
          maxHeight: 800,
          innerContentHeight: 1000,
          offset: 0
        })

        expect(res).toBe(1)
      })

      it('should return the toolbar height', () => {
        const res = computeBottomSpacer({
          backdrop: true,
          maxHeight: 800,
          innerContentHeight: 1000,
          toolbarProps: { height: 50 },
          offset: 0
        })

        expect(res).toBe(50)
      })

      it('should return the offset value', () => {
        const res = computeBottomSpacer({
          backdrop: true,
          maxHeight: 800,
          innerContentHeight: 1000,
          offset: 48
        })

        expect(res).toBe(49)
      })

      it('should return the offset value and toolbar height', () => {
        const res = computeBottomSpacer({
          backdrop: true,
          maxHeight: 800,
          innerContentHeight: 1000,
          toolbarProps: { height: 50 },
          offset: 48
        })

        expect(res).toBe(98)
      })
    })
  })
})

describe('computeToolbarHeight', () => {
  it('should return the height prop', () => {
    const res = computeToolbarHeight({ height: 50 })

    expect(res).toBe(50)
  })

  it('should return the height from ref', () => {
    const res = computeToolbarHeight({ ref: { current: { offsetHeight: 50 } } })

    expect(res).toBe(50)
  })

  it('should return default value', () => {
    const res = computeToolbarHeight()

    expect(res).toBe(1)
  })
})
