import React from 'react'
import { Form } from 'react-final-form'
import renderer from 'react-test-renderer'

import HasValueCondition from './HasValueCondition'

describe('HasValueCondition component', () => {
  it('should render its children if value is truthy', () => {
    const jsx = (
      <Form
        initialValues={{ foo: 'anything' }}
        onSubmit={jest.fn()}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <HasValueCondition name="foo">
              <span>Foo should be here</span>
            </HasValueCondition>
          </form>
        )}
      />
    )
    const tree = renderer.create(jsx).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should not render its children if value is falsy', () => {
    const jsx = (
      <Form
        initialValues={{ foo: '' }}
        onSubmit={jest.fn()}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <HasValueCondition name="foo">
              <span>Foo should not be here</span>
            </HasValueCondition>
          </form>
        )}
      />
    )
    const tree = renderer.create(jsx).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render its children if value is falsy but other condition is fulfilled', () => {
    const jsx = (
      <Form
        initialValues={{ foo: '' }}
        onSubmit={jest.fn()}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <HasValueCondition name="foo" otherCondition={true}>
              <span>Foo should be here</span>
            </HasValueCondition>
          </form>
        )}
      />
    )
    const tree = renderer.create(jsx).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should not render its children if value is falsy and other condition is not fulfilled', () => {
    const jsx = (
      <Form
        initialValues={{ foo: '' }}
        onSubmit={jest.fn()}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <HasValueCondition name="foo" otherCondition={false}>
              <span>Foo should not be here</span>
            </HasValueCondition>
          </form>
        )}
      />
    )
    const tree = renderer.create(jsx).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
