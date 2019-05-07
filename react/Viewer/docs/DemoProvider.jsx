import React from 'react'
import PropTypes from 'prop-types'

const demoTextFileResponse = {
  text: () => new Promise(resolve => resolve('Hello World !'))
}

const demoFilesByClass = {
  pdf:
    'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf',
  audio: 'https://viewerdemo.cozycloud.cc/Z.mp3',
  video: 'https://viewerdemo.cozycloud.cc/Nextcloud.mp4',
  text: 'https://viewerdemo.cozycloud.cc/notes.md'
}

const getDownloadLinkById = id =>
  new Promise(resolve => resolve(demoFilesByClass[id]))

const mockClient = {
  options: {
    uri: ''
  },
  collection: () => ({
    getDownloadLinkById,
    download: () =>
      alert(
        "This is a demo, there's no actual Cozy to download the file from ¯\\_(ツ)_/¯"
      ),
    get: () =>
      new Promise(resolve =>
        resolve({
          data: {
            links: {
              large: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
            }
          }
        })
      )
  }),
  fetch: () => new Promise(resolve => resolve(demoTextFileResponse)),
  getClient: () => mockClient
}

const t = key => {
  const translations = {
    'Viewer.error':
      'This file could not be loaded. Do you have a working internet connection right now?',
    'Viewer.retry': 'Retry',
    'Viewer.download': 'Download',
    'Viewer.close': 'close'
  }

  return translations[key] || key
}

class Wrapper extends React.Component {
  getChildContext() {
    return {
      client: mockClient,
      t
    }
  }

  render() {
    return <>{this.props.children}</>
  }
}

Wrapper.childContextTypes = {
  client: PropTypes.object,
  t: PropTypes.func
}

export default Wrapper
