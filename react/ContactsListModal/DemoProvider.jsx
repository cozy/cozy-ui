import React from 'react'
import contacts from '../ContactsList/data.json'
import CozyClient, { CozyProvider } from 'cozy-client'

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

class Wrapper extends React.Component {
  render() {
    return (
      <CozyProvider client={mockClient}>{this.props.children}</CozyProvider>
    )
  }
}

export default Wrapper
