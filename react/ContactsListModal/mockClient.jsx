import CozyClient from 'cozy-client'

import contacts from '../ContactsList/_mockContacts.json'

const mockClient = new CozyClient({
  uri: 'http://cozy.tools:8080',
  token: 'faketoken'
})

mockClient.__proto__.requestQuery = ({ doctype }) => {
  if (doctype === 'io.cozy.contacts') {
    return Promise.resolve({
      fetchStatus: 'loaded',
      data: contacts
    })
  }

  if (doctype === 'io.cozy.apps') {
    return Promise.resolve({
      fetchStatus: 'loaded',
      data: [
        {
          _id: 'io.cozy.apps/contacts',
          _type: 'io.cozy.apps',
          attributes: {
            slug: 'contacts'
          },
          links: {
            related: 'http://contacts.cozy.tools:8080/'
          }
        }
      ]
    })
  }
}

mockClient.plugins = {
  realtime: {
    subscribe: () => {},
    unsubscribe: () => {},
    unsubscribeAll: () => {}
  }
}

mockClient.save = () => ({ data: contacts[0] })

export default mockClient
