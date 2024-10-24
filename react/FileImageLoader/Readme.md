### FileImageLoader

A component to get the image in `links` prop of a file, according to its class (could be `image` or `pdf`).

```jsx
import DemoProvider from 'cozy-ui/transpiled/react/providers/DemoProvider'
import FileImageLoader from 'cozy-ui/transpiled/react/FileImageLoader'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileDuotoneIcon from "cozy-ui/transpiled/react/Icons/FileDuotone"
import BankIcon from "cozy-ui/transpiled/react/Icons/Bank"
import CloudWallpaper from 'cozy-ui/docs/cloud-wallpaper.jpg'

const demoTextFileResponse = {
  text: () => new Promise(resolve => resolve('Hello World !'))
}

const demoFilesByClass = {
  pdf: 'https://raw.githubusercontent.com/rospdf/pdf-php/2ccf7591fc2f18e63342ebfedad7997b08c34ed2/readme.pdf',
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
              large: CloudWallpaper
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

const file = {
  _id: 'image',
  class: 'image',
  name: 'Demo.img',
  mime: 'application/jpeg',
  links: {
    large: CloudWallpaper
  }
}

const onImageError = () => console.info('image errored')
const onImageLoad = () => console.info('image loaded!')
const FallbackComp = () => {
  return (
    <div>fallback component</div>
  )
}

;

<DemoProvider client={mockClient}>
  <FileImageLoader
    file={file}
    linkType="large"
    onError={onImageError}
    render={src => (
      <img
        src={src}
        height={300}
        onLoad={onImageLoad}
      />
    )}
    renderFallback={() => <FallbackComp />}
  />
</DemoProvider>
```
