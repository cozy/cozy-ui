import React from 'react'
const mockClient = {
  options: {
    uri: ''
  },
  getStackClient: () => ({
    fetchJSON: () =>
      Promise.resolve({
        data: {
          attributes: { uuid: '1223', manager_url: 'http://mycozy.cloud' }
        }
      })
  })
}

class Wrapper extends React.Component {
  render() {
    return React.cloneElement(this.props.children, {
      client: mockClient
    })
  }
}

export default Wrapper
