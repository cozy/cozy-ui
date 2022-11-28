import {
  computeMaxHeight,
  computeMediumHeight,
  computeMinHeight,
  setTopPosition,
  setBottomPosition,
  minimizeAndClose
} from './helpers'

jest.mock('../helpers/getSafeArea', () => ({
  getSafeAreaValue: jest.fn().mockReturnValue(15)
}))
jest.mock('cozy-device-helper', () => ({
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
        innerContentHeight: 200
      })

      expect(res).toBe(200)
    })
  })

  describe('with backdrop', () => {
    it('should return innerContentHeight value if lower than mediumHeight', () => {
      const res = computeMediumHeight({
        backdrop: true,
        maxHeight: 800,
        mediumHeight: 400,
        innerContentHeight: 300
      })

      expect(res).toBe(300)
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
        maxHeightSnapIndex: 2,
        setIsTopPosition
      })

      expect(setIsTopPosition).toHaveBeenCalledWith(true)
    })

    it('to true if snapIndex = maxHeightSnapIndex and isTopPosition is false', () => {
      const setIsTopPosition = jest.fn()

      setTopPosition({
        snapIndex: 2,
        maxHeightSnapIndex: 2,
        isTopPosition: false,
        setIsTopPosition
      })

      expect(setIsTopPosition).toHaveBeenCalledWith(true)
    })

    it('to false if snapIndex < maxHeightSnapIndex and isTopPosition is true', () => {
      const setIsTopPosition = jest.fn()

      setTopPosition({
        snapIndex: 1,
        maxHeightSnapIndex: 2,
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
        maxHeightSnapIndex: 2,
        isTopPosition: true,
        setIsTopPosition
      })

      expect(setIsTopPosition).not.toHaveBeenCalled()
    })

    it('if snapIndex < maxHeightSnapIndex and isTopPosition is false', () => {
      const setIsTopPosition = jest.fn()

      setTopPosition({
        snapIndex: 1,
        maxHeightSnapIndex: 2,
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
