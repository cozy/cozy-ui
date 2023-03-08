import { useState, useEffect } from 'react'

const useInstance = client => {
  const [instance, setInstance] = useState()
  const [context, setContext] = useState()
  const [state, setState] = useState('idle')
  useEffect(() => {
    const fetchData = async () => {
      try {
        setState('loading')
        const instancePromise = client
          .getStackClient()
          .fetchJSON('GET', '/settings/instance')

        const contextPromise = client
          .getStackClient()
          .fetchJSON('GET', '/settings/context')
        const promises = [instancePromise, contextPromise]

        const [instanceFetched, contextFetched] = await Promise.all(
          promises.map(p => p.catch(e => e))
        )
        if (!(instanceFetched instanceof Error)) {
          setInstance(instanceFetched)
        }
        if (!(contextFetched instanceof Error)) {
          setContext(contextFetched)
        }
        setState('loaded')
      } catch (e) {
        setState('failed')
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    state,
    instance,
    context
  }
}

export default useInstance
