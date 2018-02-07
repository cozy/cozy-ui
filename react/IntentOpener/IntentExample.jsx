import React from 'react'
import IntentHeader from '../IntentHeader'

const IntentExample  = function ({ onClick, action, doctype, options }) {
  return (
    <div onClick={onClick}>
      <IntentHeader
        appIcon={'http://lorempixel.com/90/90/cats'}
        appName='IntentExample'
        appEditor='EditorExample' />
      <p>
        Action: {action}<br/>
        Doctype: {doctype}<br/>
        Options: {JSON.stringify(options)}<br/>
        <br/>
        Click to complete intent
      </p>
    </div>
  )
}

export default IntentExample
