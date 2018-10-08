'use strict'
/* eslint-env jest */

import React from 'react'

import IntentModal from '../IntentModal'

describe('IntentModal component', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it(`renders as expected`, () => {
    const component = shallow(
      <IntentModal
        action="ANY"
        closable
        create={jest.fn().mockName('createMock')}
        doctype="io.cozy.whatever"
        dismissAction={jest.fn().mockName('onDismissMock')}
        onComplete={jest.fn().mockName('onCompleteMock')}
        onDismiss={jest.fn().mockName('dismissActionMock')}
        onError={jest.fn().mockName('onErrorMock')}
        options={{ key: 'value' }}
        overflowHidden
      />
    ).getElement()

    expect(component).toMatchSnapshot()
  })
})
