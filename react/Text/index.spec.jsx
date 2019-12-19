import React from 'react'
import {
  Text,
  MainTitle,
  Title,
  SubTitle,
  Bold,
  Uppercase,
  Caption,
  ErrorMessage
} from './index'

describe('Text/*', () => {
  it('forwards ref to the HTML tag', () => {
    const components = [
      Text,
      MainTitle,
      Title,
      SubTitle,
      Bold,
      Uppercase,
      Caption,
      ErrorMessage
    ]
    components.forEach(Component => {
      const ref = React.createRef()
      mount(
        <div>
          <Component tag="div" ref={ref} />
        </div>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })
})
