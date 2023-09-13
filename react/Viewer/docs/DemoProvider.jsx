import React from 'react'

import { CozyProvider } from 'cozy-client'
import { BreakpointsProvider } from '../../providers/Breakpoints'

import { I18nContext } from '../../providers/I18n'

const demoTextFileResponse = {
  text: () => new Promise(resolve => resolve('Hello World !'))
}

const demoFilesByClass = {
  pdf:
    'https://raw.githubusercontent.com/rospdf/pdf-php/2ccf7591fc2f18e63342ebfedad7997b08c34ed2/readme.pdf',
  audio: 'https://viewerdemo.cozycloud.cc/Z.mp3',
  video: 'https://viewerdemo.cozycloud.cc/Nextcloud.mp4',
  text: 'https://viewerdemo.cozycloud.cc/notes.md'
}

const mockClient = {
  plugins: {
    realtime: {
      subscribe: () => {},
      unsubscribe: () => {},
      unsubscribeAll: () => {}
    }
  },
  on: () => {},
  collection: () => ({
    getDownloadLinkById: id =>
      new Promise(resolve => resolve(demoFilesByClass[id])),
    download: () =>
      alert(
        "This is a demo, there's no actual Cozy to download the file from ¯\\_(ツ)_/¯"
      ),
    get: () =>
      new Promise(resolve =>
        resolve({
          data: {
            links: {
              large: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG',
              preview: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
            }
          }
        })
      )
  }),
  getStackClient: () => ({
    uri: '',
    fetch: () => new Promise(resolve => resolve(demoTextFileResponse))
  }),
  getClient: () => mockClient,
  store: {
    getState: () => {},
    subscribe: () => {},
    unsubscribe: () => {}
  },
  getQueryFromState: queryName => {
    if (queryName === 'io.cozy.files/parent_folder') {
      return {
        data: {
          _id: 'parent_id',
          path: '/Parent'
        }
      }
    }
  },
  query: () => ({
    data: [{ attributes: { slug: 'mespapiers' }, links: { related: '' } }]
  }),
  getInstanceOptions: () => ({ app: { slug: 'mespapiers' }, subdomain: 'flat' })
}

class Wrapper extends React.Component {
  render() {
    return (
      <CozyProvider client={mockClient}>
        <BreakpointsProvider>
          <I18nContext.Provider value={{ t: x => x, lang: 'en' }}>
            {this.props.children}
          </I18nContext.Provider>
        </BreakpointsProvider>
      </CozyProvider>
    )
  }
}

export default Wrapper
