import { render } from '@testing-library/react'
import { flatten, merge } from 'lodash'
import React from 'react'

import Figure from './Figure'

const combine = (...iterables) => {
  if (iterables.length === 1) {
    return iterables[0].map(x => [x])
  } else {
    const combinationsNMinus1 = combine.apply(null, iterables.slice(1))
    return flatten(
      combinationsNMinus1.map(c => iterables[0].map(item => [item, ...c]))
    )
  }
}

const formatAttrs = attrs => {
  return Object.keys(attrs)
    .map(x => `${x}: ${attrs[x]}`)
    .join(', ')
}

describe('Figure', () => {
  const amounts = [-100, 100, 500, 4]

  const coloredAttributes = [
    'coloredPositive',
    'coloredNegative',
    'coloredWarning'
  ]

  const combinations = combine
    .apply(
      null,
      coloredAttributes.map(x => [{ [x]: true }, { [x]: false }])
    )
    .map(attrs => {
      return merge.apply(null, [{}, ...attrs])
    })

  // We check for different king of amounts if
  // - its red if it is negative if coloredNegative is set
  // - its green if it is positive if coloredPositive is set
  // - its yellow if it is above the warning limit if coloredWarning is set

  for (let amount of amounts) {
    for (let attrs of combinations) {
      it(`should render correctly ${amount} ${formatAttrs(attrs)}`, () => {
        const { container } = render(
          <Figure warningLimit={110} total={amount} {...attrs} />
        )
        expect(container).toMatchSnapshot()
      })
    }
  }
})
