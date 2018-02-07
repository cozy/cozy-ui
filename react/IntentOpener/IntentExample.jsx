import React from 'react'
import IntentHeader from '../IntentHeader'

const IntentExample  = function ({ onClick, action, doctype, options }) {
  return (
    <div onClick={onClick}>
      <IntentHeader appName='IntentExample' appEditor='EditorExample' />
      Action: {action}<br/>
      Doctype: {doctype}<br/>
      Options: {JSON.stringify(options)}<br/>
      <br/>
      Click to complete intent
    </div>
  )
}

export default IntentExample
