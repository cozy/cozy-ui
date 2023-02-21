import { makeSizeAndThickness } from './helpers'

describe('makeSizeAndThickness', () => {
  describe('with hasTwoBar false', () => {
    it('small values', () => {
      const res = makeSizeAndThickness('small', false)

      expect(res).toStrictEqual({
        primarySizeAndThickness: {
          size: 85,
          thickness: 2.66
        },
        secondarySizeAndThickness: {
          size: 73,
          thickness: 2.5
        }
      })
    })

    it('medium values', () => {
      const res = makeSizeAndThickness('medium', false)

      expect(res).toStrictEqual({
        primarySizeAndThickness: {
          size: 102,
          thickness: 2.527
        },
        secondarySizeAndThickness: {
          size: 88,
          thickness: 2.2
        }
      })
    })

    it('large values', () => {
      const res = makeSizeAndThickness('large', false)

      expect(res).toStrictEqual({
        primarySizeAndThickness: {
          size: 150,
          thickness: 2.261
        },
        secondarySizeAndThickness: {
          size: 132,
          thickness: 1.9
        }
      })
    })
  })

  describe('with hasTwoBar true', () => {
    it('small values', () => {
      const res = makeSizeAndThickness('small', true)

      expect(res).toStrictEqual({
        primarySizeAndThickness: {
          size: 85,
          thickness: 2
        },
        secondarySizeAndThickness: {
          size: 73,
          thickness: 2.5
        }
      })
    })

    it('medium values', () => {
      const res = makeSizeAndThickness('medium', true)

      expect(res).toStrictEqual({
        primarySizeAndThickness: {
          size: 102,
          thickness: 1.9
        },
        secondarySizeAndThickness: {
          size: 88,
          thickness: 2.2
        }
      })
    })

    it('large values', () => {
      const res = makeSizeAndThickness('large', true)

      expect(res).toStrictEqual({
        primarySizeAndThickness: {
          size: 150,
          thickness: 1.7
        },
        secondarySizeAndThickness: {
          size: 132,
          thickness: 1.9
        }
      })
    })
  })
})
