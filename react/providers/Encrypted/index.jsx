import React, { useContext } from 'react'

export const EncryptedContext = React.createContext()

export const useEncrypted = () => {
  const context = useContext(EncryptedContext)

  if (!context) {
    throw new Error('useEncrypted must be used within a EncryptedProvider')
  }
  return context
}

const EncryptedProvider = ({ url, children }) => {
  const contextValue = {
    url
  }
  return (
    <EncryptedContext.Provider value={contextValue}>
      {children}
    </EncryptedContext.Provider>
  )
}

export default React.memo(EncryptedProvider)
