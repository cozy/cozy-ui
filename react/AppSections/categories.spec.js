'use strict'

/* eslint-env jest */

import mapValues from 'lodash/mapValues'

import * as catUtils from './categories'
import en from './locales/en'
import { I18nContext } from '../jestLib/I18n'
import mockApps from '../mocks/apps'

const i18nContext = I18nContext({
  locale: {
    ...en,
    app_categories: {
      ...en.app_categories,
      foo: 'Foo',
      bar: 'Bar'
    }
  }
})
const tMock = i18nContext.t

describe('groupApps', () => {
  it('should return apps sorted in a dictionary by categories', () => {
    expect(
      mapValues(catUtils.groupApps(mockApps), apps => apps.map(x => x.slug))
    ).toEqual({
      cozy: ['collect', 'drive', 'photos'],
      isp: ['konnector-bouilligue'],
      others: ['devonly'],
      partners: ['tasky'],
      telecom: ['konnector-bouilligue'],
      transport: ['konnector-trinlane']
    })
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
      'isp',
      'all',
      'telecom',
      'others',
      'banking'
    ])
    expect(catList.sort(catUtils.sorter).map(x => x.value)).toEqual([
      'all',
      'cozy',
      'banking',
      'isp',
      'telecom',
      'others'
    ])
  })

  it('should test with all and others at the border', () => {
    const catList2 = prepareCategories([
      'all',
      'telecom',
      'banking',
      'cozy',
      'others'
    ])
    expect(catList2.sort(catUtils.sorter).map(x => x.value)).toEqual([
      'all',
      'cozy',
      'banking',
      'telecom',
      'others'
    ])
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
    ).toEqual([
      {
        label: 'The essentials',
        secondary: false,
        type: 'webapp',
        value: 'cozy'
      },
      {
        label: 'Partners',
        secondary: false,
        type: 'webapp',
        value: 'partners'
      },
      {
        label: 'Others',
        secondary: false,
        type: 'webapp',
        value: 'others'
      },
      {
        label: 'Services',
        secondary: false,
        value: 'konnectors'
      },
      {
        label: 'Mobile and Internet',
        secondary: true,
        type: 'konnector',
        value: 'isp'
      },
      {
        label: 'Telecom',
        secondary: true,
        type: 'konnector',
        value: 'telecom'
      },
      {
        label: 'Transportation',
        secondary: true,
        type: 'konnector',
        value: 'transport'
      }
    ])
  })

  it('should return include the all categories if includeAll option true', () => {
    expect(
      catUtils.generateOptionsFromApps(mockApps, { includeAll: true, addLabel })
    ).toEqual([
      {
        secondary: false,
        value: 'all'
      },
      {
        label: 'The essentials',
        secondary: false,
        type: 'webapp',
        value: 'cozy'
      },
      {
        label: 'Partners',
        secondary: false,
        type: 'webapp',
        value: 'partners'
      },
      {
        label: 'Others',
        secondary: false,
        type: 'webapp',
        value: 'others'
      },
      {
        label: 'Services',
        secondary: false,
        value: 'konnectors'
      },
      {
        label: 'Mobile and Internet',
        secondary: true,
        type: 'konnector',
        value: 'isp'
      },
      {
        label: 'Telecom',
        secondary: true,
        type: 'konnector',
        value: 'telecom'
      },
      {
        label: 'Transportation',
        secondary: true,
        type: 'konnector',
        value: 'transport'
      }
    ])
  })

  it('should return an empty list if empty apps list provided', () => {
    expect(
      catUtils.generateOptionsFromApps([], { includeAll: false, addLabel })
    ).toEqual([])
  })

  it('should return an empty list if no apps provided', () => {
    expect(
      catUtils.generateOptionsFromApps(null, { includeAll: false, addLabel })
    ).toEqual([])
  })

  it('should return additional apps categories when there more than one', () => {
    const appsWithAdditionlOnes = [
      ...mockApps,
      {
        _id: 'shortcutA',
        name: 'Shortcut A',
        categories: ['foo'],
        type: 'file',
        _type: 'io.cozy.files'
      },
      {
        _id: 'shortcutB',
        name: 'Shortcut B',
        categories: ['bar'],
        type: 'file',
        _type: 'io.cozy.files'
      }
    ]

    expect(
      catUtils.generateOptionsFromApps(appsWithAdditionlOnes, {
        includeAll: false,
        addLabel
      })
    ).toEqual([
      {
        label: 'The essentials',
        secondary: false,
        type: 'webapp',
        value: 'cozy'
      },
      {
        label: 'Partners',
        secondary: false,
        type: 'webapp',
        value: 'partners'
      },
      {
        label: 'Others',
        secondary: false,
        type: 'webapp',
        value: 'others'
      },
      {
        label: 'Additional apps',
        secondary: false,
        value: 'shortcuts'
      },
      {
        label: 'Bar',
        secondary: true,
        type: 'file',
        value: 'bar'
      },
      {
        label: 'Foo',
        secondary: true,
        type: 'file',
        value: 'foo'
      },
      {
        label: 'Services',
        secondary: false,
        value: 'konnectors'
      },
      {
        label: 'Mobile and Internet',
        secondary: true,
        type: 'konnector',
        value: 'isp'
      },
      {
        label: 'Telecom',
        secondary: true,
        type: 'konnector',
        value: 'telecom'
      },
      {
        label: 'Transportation',
        secondary: true,
        type: 'konnector',
        value: 'transport'
      }
    ])
  })
})
