import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Button from '../deprecated/Button'
import Spinner from '../Spinner'

import 'intersection-observer' // polyfill for safari (mobile and desktop)

const LoadMore = ({ fetchMore, label }) => {
  const [isLoading, setIsLoading] = useState(false)
  const elementRef = useRef()

  const startFetchMore = useCallback(async () => {
    if (!isLoading) {
      setIsLoading(true)
      await fetchMore()
      setIsLoading(false)
    }
  }, [isLoading, fetchMore])

  const checkIntersectionsEntries = useCallback(
    intersectionEntries => {
      if (intersectionEntries.filter(entry => entry.isIntersecting).length > 0)
        startFetchMore()
    },
    [startFetchMore]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(checkIntersectionsEntries)
    /*
      The ref value 'elementRef.current' will likely have changed by the time this effect cleanup function runs
      It is better to copy the ref to a variable inside the effect
    */
    const observerRefValue = elementRef.current
    observer.observe(observerRefValue)

    return () => {
      observer.unobserve(observerRefValue)
      observer.disconnect()
    }
  }, [checkIntersectionsEntries])

  return (
    <span ref={elementRef}>
      <Button
        theme="text"
        onClick={startFetchMore}
        label={isLoading ? <Spinner noMargin /> : label}
      />
    </span>
  )
}

LoadMore.propTypes = {
  /** A function that is called when the next batch of data needs to be loaded.  Can return a promise. */
  fetchMore: PropTypes.func.isRequired,
  /** The label for the button */
  label: PropTypes.string.isRequired
}

export default LoadMore
