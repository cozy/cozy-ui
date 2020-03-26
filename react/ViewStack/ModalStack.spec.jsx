import { mount } from 'enzyme'
import React, { useEffect } from 'react'
import ModalStack from './ModalStack'
import { useViewStack } from './context'
import Modal from '../Modal'

function Inside() {
  return <aside>Inside</aside>
}

describe('ModalStack', () => {
  it('should wrap the component inside a modal', () => {
    function Main({ component }) {
      const { stackPush } = useViewStack()
      useEffect(() => {
        stackPush(component)
      }, [])
      return <main>Main content</main>
    }

    const root = mount(
      <ModalStack>
        <Main component={<Inside />} />
      </ModalStack>
    )
    expect(root.find(Modal)).toHaveLength(1)
  })

  describe('when using noModalStackWrapper:true as props', () => {
    it('should not wrap the component inside a modal', () => {
      function Main({ component }) {
        const { stackPush } = useViewStack()
        useEffect(() => {
          stackPush(component, { noModalStackWrapper: true })
        }, [])
        return <main>Main content</main>
      }

      const root = mount(
        <ModalStack>
          <Main component={<Inside />} />
        </ModalStack>
      )
      expect(root.find(Modal)).toHaveLength(0)
    })
  })
})
