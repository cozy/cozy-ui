import cx from 'classnames'
import React from 'react'

import Spinner from '../Spinner'

const StatusWrapper = ({ src, status, setStatus, timestamp, children }) => {
  if (status === 'LOADING') {
    return (
      <>
        {React.Children.map(children, child =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                className: cx(child.props.className, 'u-o-50')
              })
            : null
        )}
        <Spinner className="u-m-0" middle size="large" />
      </>
    )
  }

  if (status === 'PRESENT') {
    return React.Children.map(children, child =>
      React.isValidElement(child)
        ? React.cloneElement(child, {
            key: timestamp,
            src,
            onError: () => setStatus('ABSENT')
          })
        : null
    )
  }

  return React.Children.map(children, child =>
    React.isValidElement(child)
      ? React.cloneElement(child, {
          key: timestamp
        })
      : null
  )
}

export default StatusWrapper
