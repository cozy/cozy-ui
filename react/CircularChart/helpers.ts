const makeThickness = (thickness: number, hasTwoBar: boolean): number => {
  return hasTwoBar ? thickness : thickness * 1.33
}

export const makeSizeAndThickness = (
  size: string,
  hasTwoBar: boolean
): object => {
  switch (size) {
    case 'small':
      return {
        primarySizeAndThickness: {
          size: 85,
          thickness: makeThickness(2, hasTwoBar)
        },
        secondarySizeAndThickness: {
          size: 73,
          thickness: 2.5
        }
      }

    case 'medium':
      return {
        primarySizeAndThickness: {
          size: 102,
          thickness: makeThickness(1.9, hasTwoBar)
        },
        secondarySizeAndThickness: {
          size: 88,
          thickness: 2.2
        }
      }

    default:
      return {
        primarySizeAndThickness: {
          size: 150,
          thickness: makeThickness(1.7, hasTwoBar)
        },
        secondarySizeAndThickness: {
          size: 132,
          thickness: 1.9
        }
      }
  }
}
