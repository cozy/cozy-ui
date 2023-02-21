// ALPHABETICALLY SORTED
export const apps = [
  {
    slug: 'collect',
    name: 'Collect',
    editor: 'Cozy',
    label: 1,
    name_prefix: 'Cozy',
    categories: ['cozy'],
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
  },
  {
    slug: 'devonly',
    name: 'DevOnly',
    editor: 'Cozy',
    categories: ['others'],
    developer: { name: 'Cozy' },
    type: 'webapp',
    locales: {
      name: 'For Dev Only'
    },
    icon: '<svg></svg>',
    versions: {
      stable: [],
      beta: [],
      dev: ['1.0.0-betaojdkehy989ekhflldh']
    },
    uninstallable: true,
    isInRegistry: true
  },
  {
    slug: 'drive',
    name: 'Drive',
    editor: 'Cozy',
    name_prefix: 'Cozy',
    categories: ['cozy'],
    developer: { name: 'Cozy' },
    tags: ['search', 'files', 'folders'],
    type: 'webapp',
    icon: '<svg></svg>',
    permissions: {
      mock2: {
        type: 'io.mock.doctype2'
      }
    },
    version: '3.0.0-beta89bnhj3993',
    uninstallable: false,
    installed: true,
    maintenance: true,
    related: 'http://drive.cozy.mock/'
  },
  {
    slug: 'konnector-bouilligue',
    name: 'Bouilligue',
    icon: '<svg></svg>',
    developer: { name: 'Cozy' },
    type: 'konnector',
    categories: ['isp', 'telecom'],
    versions: {
      stable: ['0.1.0'],
      beta: ['0.1.0'],
      dev: ['0.1.0']
    },
    uninstallable: true,
    isInRegistry: true
  },
  {
    slug: 'konnector-trinlane',
    name: 'Trinlane (with a very long name)',
    icon: '<svg></svg>',
    developer: { name: 'Author with long name' },
    type: 'konnector',
    categories: ['transport'],
    tags: ['transport', 'files', 'bills'],
    permissions: {
      mock: {
        type: 'io.mock.doctype'
      }
    },
    version: '0.1.0',
    versions: {
      stable: ['0.1.0'],
      beta: ['0.1.0'],
      dev: ['0.1.0']
    },
    installed: true,
    uninstallable: true,
    isInRegistry: true
  },
  {
    slug: 'konnector-trinlane2',
    name: 'Trinlane (with a very long name and no footer)',
    icon: '<svg></svg>',
    developer: { name: 'Author with long name' },
    type: 'konnector',
    categories: ['transport'],
    tags: ['transport', 'files', 'bills'],
    permissions: {
      mock: {
        type: 'io.mock.doctype'
      }
    },
    versions: {
      stable: ['0.1.0'],
      beta: ['0.1.0'],
      dev: ['0.1.0']
    },
    uninstallable: true,
    isInRegistry: true
  },
  {
    slug: 'konnector-withlowername',
    name: 'easyflight',
    icon: '<svg></svg>',
    developer: { name: 'Author with long name' },
    type: 'konnector',
    categories: ['transport'],
    tags: ['transport', 'files', 'bills'],
    permissions: {
      mock: {
        type: 'io.mock.doctype'
      }
    },
    version: '0.1.0',
    versions: {
      stable: ['0.1.0'],
      beta: ['0.1.0'],
      dev: ['0.1.0']
    },
    installed: true,
    uninstallable: true,
    isInRegistry: true
  },
  // don't add permissions to Photos for testing
  {
    slug: 'photos',
    name: 'Photos',
    editor: 'Cozy',
    name_prefix: 'Cozy',
    categories: ['cozy'],
    developer: { name: 'Cozy' },
    type: 'webapp',
    icon: '<svg></svg>',
    locales: {
      en: {
        long_description: 'A long description finally short'
      }
    },
    versions: {
      stable: ['3.0.0'],
      beta: ['3.0.0'],
      dev: ['3.0.0']
    },
    uninstallable: true,
    isInRegistry: true,
    maintenance: true
  },
  {
    slug: 'tasky',
    name: 'Tasky',
    categories: ['partners'],
    icon: '<svg></svg>',
    type: 'webapp',
    versions: {
      stable: ['3.0.0', '1.0.0'],
      beta: ['3.0.0', '1.0.0'],
      dev: ['3.0.0', '1.0.0']
    },
    installed: true,
    availableVersion: '3.0.0',
    uninstallable: true,
    isInRegistry: true
  }
]

export default apps
