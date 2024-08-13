import React, {
  useEffect,
  useMemo,
  useState,
  createContext,
  useContext
} from 'react'

import { useClient } from 'cozy-client'
import Spinner from 'cozy-ui/transpiled/react/Spinner'
import Backdrop from 'cozy-ui/transpiled/react/Backdrop'

export const IntentContext = createContext()

export const useIntent = () => {
  const context = useContext(IntentContext)

  if (!context) {
    throw new Error('useIntent must be used within a IntentProvider')
  }
  return context
}

const IntentProvider = ({ intentId, componentsProps, children }) => {
  const client = useClient()
  const [state, setState] = useState({
    service: null,
    intent: null,
    data: null
  })

  const value = useMemo(
    () => ({
      service: state.service,
      intent: state.intent,
      data: state.data
    }),
    [state]
  )

  useEffect(() => {
    const startService = async () => {
      let service

      try {
        service = await client.intents.createService(intentId, window)
        const intent = service.getIntent()
        const data = service.getData()

        setState({
          service,
          intent,
          data
        })
      } catch (error) {
        service.throw(error)
      }
    }

    if (!state.service) {
      startService()
    }
  }, [client, intentId, state.service])

  if (!state.service) {
    return (
      <Backdrop open {...componentsProps?.backdrop}>
        <Spinner
          className="u-m-0"
          size="xxlarge"
          middle
          {...componentsProps?.spinner}
        />
      </Backdrop>
    )
  }

  return (
    <IntentContext.Provider value={value}>{children}</IntentContext.Provider>
  )
}

export default IntentProvider
