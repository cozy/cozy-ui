import React, { useContext } from 'react'

export const ViewStackContext = React.createContext()
export const useViewStack = () => useContext(ViewStackContext)
