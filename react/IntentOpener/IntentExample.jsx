import React from 'react'
import IntentHeader from '../IntentHeader'

const IntentExample  = function ({ onComplete, action, doctype, options }) {
  return (
    <div>
      <IntentHeader
        appIcon={'http://lorempixel.com/90/90/cats'}
        appName='IntentExample'
        appEditor='EditorExample' />
      <p style={{ margin: '1rem' }}>
        Action: {action}<br/>
        Doctype: {doctype}<br/>
        Options: <pre>{JSON.stringify(options, null, 2)}</pre><br/>
        <br/>
        <button onClick={onComplete}>Click to complete intent</button>
      </p>
    </div>
  )
}

export default IntentExample
