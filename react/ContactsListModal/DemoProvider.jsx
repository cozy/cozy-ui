import React from 'react'
import PropTypes from 'prop-types'
import contacts from '../ContactsList/data.json'
import CozyClient from 'cozy-client'

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
  getChildContext() {
    return {
      client: mockClient
    }
  }

  render() {
    return <>{this.props.children}</>
  }
}

Wrapper.childContextTypes = {
  client: PropTypes.object
}

export default Wrapper
