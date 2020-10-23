import React from 'react'
import IntentWrapper from '../IntentWrapper'

const IntentExample = function({ onComplete, action, doctype, options }) {
  return (
    <IntentWrapper
      appIcon={'https://via.placeholder.com/90'}
      appName="IntentExample"
      appEditor="EditorExample"
    >
      <p>
        Action: {action}
        <br />
        Doctype: {doctype}
        <br />
        Options: <pre>{JSON.stringify(options, null, 2)}</pre>
        <br />
        <br />
        <button onClick={onComplete}>Click to complete intent</button>
      </p>
    </IntentWrapper>
  )
}

export default IntentExample
