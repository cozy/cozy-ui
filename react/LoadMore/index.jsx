import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
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

  const checkIntersectionsEntries = intersectionEntries => {
    if (intersectionEntries.filter(entry => entry.isIntersecting).length > 0)
      startFetchMore()
  }

  useEffect(() => {
    const observer = new IntersectionObserver(checkIntersectionsEntries)
    observer.observe(elementRef.current)

    return () => {
      // TODO: validate the deps are correct
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(elementRef.current)
      observer.disconnect()
    }
  })

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
