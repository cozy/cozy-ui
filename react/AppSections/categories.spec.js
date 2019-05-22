'use strict'

/* eslint-env jest */

import * as catUtils from './categories'

import { I18nContext } from '../jestLib/I18n'
import mockApps from '../mocks/apps'
import en from './locales/en'
import mapValues from 'lodash/mapValues'

const i18nContext = I18nContext({
  locale: en
})
const tMock = i18nContext.t

describe('groupApps', () => {
  it('should return apps sorted in a dictionnary by categories', () => {
    expect(
      mapValues(catUtils.groupApps(mockApps), apps => apps.map(x => x.slug))
    ).toMatchSnapshot()
  })
})

describe('sorter', () => {
  const prepareCategories = categoryNames =>
    categoryNames.map(cat =>
      catUtils.addLabel(
        {
          value: cat
        },
        tMock
      )
    )

  it('should return a categories list alphabetically except for all and others', () => {
    const catList = prepareCategories([
      'cozy',
      'all',
      'isp',
      'others',
      'telecom'
    ])
    expect(catList.sort(catUtils.sorter).map(x => x.value)).toMatchSnapshot()

    // test with all and others at the border
    const catList2 = prepareCategories(['all', 'cozy', 'telecom', 'others'])
    expect(catList2.sort(catUtils.sorter).map(x => x.value)).toMatchSnapshot()
  })
})

describe('generateOptionsFromApps', () => {
  const addLabel = x => catUtils.addLabel(x, tMock)
  it('should return a list of categories options for a select input based on the apps list', () => {
    expect(
      catUtils.generateOptionsFromApps(mockApps, {
        includeAll: false,
        addLabel
      })
    ).toMatchSnapshot()
  })

  it('should return include the all categories if includeAll option true', () => {
    expect(
      catUtils.generateOptionsFromApps(mockApps, { includeAll: true, addLabel })
    ).toMatchSnapshot()
  })

  it('should return an empty list if empty apps list provided', () => {
    expect(
      catUtils.generateOptionsFromApps([], { includeAll: false, addLabel })
    ).toMatchSnapshot()
  })

  it('should return an empty list if no apps provided', () => {
    expect(
      catUtils.generateOptionsFromApps(null, { includeAll: false, addLabel })
    ).toMatchSnapshot()
  })
})
