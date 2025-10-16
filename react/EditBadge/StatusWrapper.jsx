import cx from 'classnames'
import React from 'react'

import Spinner from '../Spinner'
import { AddPropsToChildren } from '../utils/react'

const StatusWrapper = ({ src, status, setStatus, timestamp, children }) => {
  if (status === 'LOADING') {
    return (
      <>
        {AddPropsToChildren(children, childProps => ({
          className: cx(childProps.className, 'u-o-50')
        }))}
        <Spinner className="u-m-0" middle size="large" />
      </>
    )
  }

  if (status === 'PRESENT') {
    return AddPropsToChildren(children, () => ({
      key: timestamp,
      src,
      onError: () => setStatus('ABSENT')
    }))
  }

  return AddPropsToChildren(children, () => ({
    key: timestamp
  }))
}

export default StatusWrapper
