import React from 'react'
import ReactDOM from 'react-dom'
import IntentExample from '../react/IntentOpener/IntentExample'

/** Fake cozy.client.intents.create to demonstrate features in Styleguide */
export const fakeIntentCreate = (action, doctype, options) => {
  let res
  const p = new Promise(resolve => {
    res = resolve
  })
  p.start = (node, onFrameLoaded) => {
    const iframe = document.createElement('iframe')
    iframe.onload = () => {
      onFrameLoaded()

      const onClick = () => {
        node.removeChild(iframe)
        res({ result: 'OK' })
      }
      ReactDOM.render(
        React.createElement(IntentExample, { onClick, action, doctype, options }),
        iframe.contentDocument.body
      )
    }
    node.appendChild(iframe)
    return p
  }
  return p
}
