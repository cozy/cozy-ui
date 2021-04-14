import React from 'react'
import { Viewer } from './index.jsx'
import ViewerControls from './ViewerControls'

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}

describe('Viewer', () => {
  const mockClient = {
    collection: jest.fn(() => ({
      getDownloadLinkById: jest.fn(id => `https://testurl.com/${id}`)
    }))
  }
  const shallowRenderOptions = {
    context: {
      client: mockClient
    }
  }

  const getViewerComponent = async component => {
    const wrapper = component.find('ViewerWrapper').dive()
    const withFileUrlWrapper = wrapper.find('withFileUrlClass')

    if (withFileUrlWrapper.length > 0) {
      const viewer = withFileUrlWrapper.dive()
      await flushPromises()
      return viewer
    } else {
      const viewer = wrapper.find(ViewerControls.displayName).childAt(0)
      return viewer
    }
  }

  it('should render the various viewers', async () => {
    const files = [
      {
        _id: 'audiofileid',
        class: 'audio',
        mime: 'audio/mp3',
        name: 'sample.mp3'
      },
      {
        _id: 'imagefileid',
        class: 'image',
        mime: 'image/jpg',
        name: 'sample.jpg'
      },
      {
        _id: 'pdffileid',
        class: 'pdf',
        mime: 'application/pdf',
        name: 'sample.pdf'
      },
      {
        _id: 'textfileid',
        class: 'text',
        mime: 'text/plain',
        name: 'sample.txt'
      },
      {
        _id: 'markdownfileid',
        class: 'text',
        mime: 'text/markdown',
        name: 'sample.md'
      },
      {
        _id: 'videofileid',
        class: 'video',
        mime: 'video/mp4',
        name: 'sample.mp4'
      },
      {
        _id: 'unknownfileid',
        class: '???',
        mime: 'something/unsupported',
        name: 'sample.unsupported'
      },
      {
        _id: 'shortcutfileid',
        class: 'shortcut',
        mime: 'application/internet-shortcut',
        name: 'cozy.url'
      }
    ]

    const component = shallow(
      <Viewer files={files} breakpoints={{}} currentIndex={0} />,
      shallowRenderOptions
    )

    const audioViewer = await getViewerComponent(component)
    expect(audioViewer).toMatchSnapshot('audioviewer')

    component.setProps({
      currentIndex: 1
    })
    const imageViewer = await getViewerComponent(component)
    expect(imageViewer).toMatchSnapshot('imageviewer')

    component.setProps({
      currentIndex: 2
    })
    const pdfViewer = await getViewerComponent(component)
    expect(pdfViewer).toMatchSnapshot('pdfviewer')

    component.setProps({
      currentIndex: 3
    })
    const textViewer = await getViewerComponent(component)
    expect(textViewer).toMatchSnapshot('textviewer')

    component.setProps({
      currentIndex: 4
    })
    const markdownViewer = await getViewerComponent(component)
    expect(markdownViewer).toMatchSnapshot('markdownviewer')

    component.setProps({
      currentIndex: 5
    })
    const videoViewer = await getViewerComponent(component)
    expect(videoViewer).toMatchSnapshot('videoviewer')

    component.setProps({
      currentIndex: 6
    })
    const noViewer = await getViewerComponent(component)
    expect(noViewer).toMatchSnapshot('noviewer')

    component.setProps({
      currentIndex: 7
    })
    const shortcutViewer = await getViewerComponent(component)
    expect(shortcutViewer).toMatchSnapshot('shortcutviewer')
  })
})
