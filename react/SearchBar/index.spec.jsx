import { render } from '@testing-library/react'
import React from 'react'
import { I18n } from 'twake-i18n'

import SearchBar from '.'
import MuiCozyTheme from '../MuiCozyTheme'

// The sheet of the styles that depend on the props (the size)
const mediaQueriesOfSheetWith = className =>
  [...document.styleSheets]
    .map(sheet => [...sheet.cssRules])
    .filter(rules => rules.some(rule => rule.selectorText?.includes(className)))
    .flat()
    .filter(rule => rule.media)
    .map(rule => rule.media.mediaText)

describe('SearchBar', () => {
  it('sizes the text of a small search bar on phones without a touch screen only', () => {
    render(
      <I18n lang="en" dictRequire={() => ({})}>
        <MuiCozyTheme>
          <SearchBar size="small" />
        </MuiCozyTheme>
      </I18n>
    )

    expect(mediaQueriesOfSheetWith('inputBase')).toEqual([
      '(max-width:767.95px) and (not (pointer: coarse))'
    ])
  })
})
