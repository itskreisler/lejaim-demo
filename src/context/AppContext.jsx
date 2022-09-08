/* eslint-disable react/prop-types */ // TODO: Actualizar a las últimas herramientas de Eslint
import React, { useContext, createContext } from 'react'

const AppContext = createContext({
  myApp: { }
})

export const TagAppContext = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        myApp: { }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => useContext(AppContext)
