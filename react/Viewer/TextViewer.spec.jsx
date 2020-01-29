import React from 'react'
import { shallow } from 'enzyme'
import { TextViewer, isMarkdown } from './TextViewer'
import { createMockClient } from 'cozy-client'
import renderer from 'react-test-renderer'
const props = {
  client: createMockClient({}),
  url: 'https://foo.mycozy.cloud',
  file: {
    _id: '1',
    _type: 'io.cozy.files',
    name: 'My File'
  }
}

describe('isMarkdown function', () => {
  it('test markdown function', () => {
    const note = {
      name: 'My Note.cozy-note',
      type: 'file',
      metadata: {
        content: 'my prosemirror content',
        schema: '1',
        title: 'prosemirror title',
        version: '3'
      }
    }
    expect(isMarkdown({ mime: 'text/markdown' })).toBe(true)
    expect(isMarkdown({ name: 'text.md' })).toBe(true)
    expect(isMarkdown(note)).toBe(true)
    expect(isMarkdown({ name: 'text.txt' })).toBe(false)
  })
})
describe('TextViewer Component', () => {
  it('should display the loader ', () => {
    const comp = shallow(<TextViewer {...props} />)
    expect(comp).toMatchSnapshot()
  })
  it('should display the error component and render with renderFallback', () => {
    const comp = renderer.create(
      <TextViewer
        {...props}
        renderFallbackExtraContent={file => <span>{file.name}</span>}
      />
    )
    comp.getInstance().setState({ error: true, loading: false })
    expect(comp.toJSON()).toMatchSnapshot()
  })
  it('should display the text viewer', () => {
    const comp = renderer.create(<TextViewer {...props} />)
    comp.getInstance().setState({
      loading: false,
      isMarkdown: false,
      text: 'The content of my file'
    })
    expect(comp.toJSON()).toMatchSnapshot()
  })

  it('should display the markdown viewer', () => {
    const comp = renderer.create(<TextViewer {...props} />)
    comp.getInstance().setState({
      loading: false,
      isMarkdown: true,
      text:
        "It's very easy to make some words **bold** and other words *italic* with Markdown"
    })
    expect(comp.toJSON()).toMatchSnapshot()
  })
})
