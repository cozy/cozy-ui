import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Modal, { BODY_CLASS } from '.'
import { BreakpointsProvider } from '../../providers/Breakpoints'

describe('Modal', () => {
  const Example = () => {
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    return (
      <BreakpointsProvider>
        {showModal ? <Modal title="example 1">1</Modal> : null}
        {showModal2 ? <Modal title="example 2">2</Modal> : null}
        <button onClick={() => setShowModal(true)} />
        <button onClick={() => setShowModal2(true)} />
        <button onClick={() => setShowModal2(false)} />
        <button onClick={() => setShowModal(false)} />
      </BreakpointsProvider>
    )
  }

  const clickNthButton = (root, n) =>
    root
      .find('button')
      .at(n)
      .props()
      .onClick()

  const mountFirstModal = root => clickNthButton(root, 0)
  const mountSecondModal = root => clickNthButton(root, 1)
  const unmountSecondModal = root => clickNthButton(root, 2)
  const unmountFirstModal = root => clickNthButton(root, 3)

  const hasModalBodyClass = () => document.body.classList.contains(BODY_CLASS)

  afterEach(() => {
    document.body.classList.remove(BODY_CLASS)
  })

  it('should apply a class to the body when mounted', () => {
    const root = mount(<Example />)
    expect(hasModalBodyClass()).toBe(false)
    act(() => {
      mountFirstModal(root)
    })
    expect(hasModalBodyClass()).toBe(true)
    act(() => {
      unmountFirstModal(root)
    })
    expect(hasModalBodyClass()).toBe(false)
  })

  it('should not remove the class if two modals were mounted and the second one is removed', () => {
    const root = mount(<Example />)
    expect(hasModalBodyClass()).toBe(false)
    act(() => {
      mountFirstModal(root)
    })
    expect(hasModalBodyClass()).toBe(true)
    act(() => {
      mountSecondModal(root)
    })
    act(() => {
      unmountSecondModal(root)
    })
    expect(hasModalBodyClass()).toBe(true)
    act(() => {
      unmountFirstModal(root)
    })
    expect(hasModalBodyClass()).toBe(false)
  })
})
