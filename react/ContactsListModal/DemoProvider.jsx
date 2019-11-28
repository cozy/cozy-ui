import React from 'react'
import PropTypes from 'prop-types'
import contacts from '../ContactsList/data.json'
import CozyClient from 'cozy-client'

const mockClient = new CozyClient({
  uri: 'http://cozy.tools:8080',
  token: 'faketoken'
})

mockClient.__proto__.requestQuery = () =>
  Promise.resolve({
    fetchStatus: 'loaded',
    data: contacts
  })

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
