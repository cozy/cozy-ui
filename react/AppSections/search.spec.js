'use strict'

/* eslint-env jest */

import { makeMatcherFromSearch } from './search'
import mockApps from '../mocks/apps'

const mockMaintenanceApps = [
  { slug: 'collect' },
  { slug: 'drive' },
  {
    slug: 'konnectorInMaintenance',
    maintenance: {
      flag_infra_maintenance: true,
      flag_short_maintenance: true,
      flag_disallow_manual_exec: true,
      messages: []
    }
  }
]

describe('makeMatcherFromSearch', () => {
  it('should filter correctly on type', () => {
    const matcher = makeMatcherFromSearch({ type: 'webapp' })
    expect(mockApps.filter(matcher)).toMatchSnapshot()
  })

  it('should filter correctly on doctype', () => {
    const matcher = makeMatcherFromSearch({ doctype: 'io.mock.doctype2' })
    expect(mockApps.filter(matcher)).toMatchSnapshot()
  })

  it('should filter correctly on tags', () => {
    const matcher = makeMatcherFromSearch({ tag: 'bills' })
    expect(mockApps.filter(matcher)).toMatchSnapshot()
  })

  it('should filter correctly on category', () => {
    const matcher = makeMatcherFromSearch({ category: 'cozy' })
    expect(mockApps.filter(matcher)).toMatchSnapshot()
  })

  it('should filter correctly on pending update apps', () => {
    const matcher = makeMatcherFromSearch({ pendingUpdate: true })
    expect(mockApps.filter(matcher)).toMatchSnapshot()
  })

  it('should filter correctly when under maintenance is false', () => {
    const matcher = makeMatcherFromSearch({ underMaintenance: false })
    expect(mockMaintenanceApps.filter(matcher)).toStrictEqual([
      { slug: 'collect' },
      { slug: 'drive' }
    ])
  })

  it('should filter correctly when under maintenance is true', () => {
    const matcher = makeMatcherFromSearch({ underMaintenance: true })
    expect(mockMaintenanceApps.filter(matcher)).toStrictEqual([
      {
        maintenance: {
          flag_disallow_manual_exec: true,
          flag_infra_maintenance: true,
          flag_short_maintenance: true,
          messages: []
        },
        slug: 'konnectorInMaintenance'
      }
    ])
  })

  it('should handle correctly multi filters', () => {
    const matcher = makeMatcherFromSearch({
      type: 'konnector',
      doctype: 'io.mock.doctype'
    })
    expect(mockApps.filter(matcher)).toMatchSnapshot()
  })

  it('should not throw error if search is not provided', () => {
    const matcher = makeMatcherFromSearch()
    expect(mockApps.filter(matcher)).toMatchSnapshot()
  })

  it('should not throw error if app with malformed permission and search on doctype', () => {
    const malFormedPermApp = {
      slug: 'collect',
      name: 'Collect',
      editor: 'Cozy',
      name_prefix: 'Cozy',
      categories: ['cozy'],
      developer: { name: 'Cozy' },
      type: 'webapp',
      icon: '<svg></svg>',
      permissions: {
        mock: {
          // NO TYPE = malformed
          description: 'io.mock.doctype'
        },
        mock2: {
          type: 'io.mock.doctype2'
        }
      },
      tags: ['konnector', 'collect', 'bills', 'providers', 'files'],
      version: '3.0.0',
      versions: {
        stable: ['3.0.0'],
        beta: ['3.0.0'],
        dev: ['3.0.0']
      },
      uninstallable: false,
      installed: true,
      isInRegistry: true,
      related: 'http://collect.cozy.mock/'
    }
    const matcher = makeMatcherFromSearch({ doctype: 'io.mock.doctype' })
    expect([malFormedPermApp].filter(matcher)).toMatchSnapshot()
  })

  it('should not throw error if app with no categories and search on category', () => {
    const appWithoutCategories = {
      slug: 'collect',
      name: 'Collect',
      editor: 'Cozy',
      name_prefix: 'Cozy',
      developer: { name: 'Cozy' },
      type: 'webapp',
      icon: '<svg></svg>',
      permissions: {
        mock: {
          type: 'io.mock.doctype'
        },
        mock2: {
          type: 'io.mock.doctype2'
        }
      },
      tags: ['konnector', 'collect', 'bills', 'providers', 'files'],
      version: '3.0.0',
      versions: {
        stable: ['3.0.0'],
        beta: ['3.0.0'],
        dev: ['3.0.0']
      },
      uninstallable: false,
      installed: true,
      isInRegistry: true,
      related: 'http://collect.cozy.mock/'
    }
    const matcher = makeMatcherFromSearch({ category: 'cozy' })
    expect([appWithoutCategories].filter(matcher)).toMatchSnapshot()
  })
})
