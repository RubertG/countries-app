'use client'
import { ACTIONS_TYPES_ENUM } from '@/consts/consts'
import { reducer } from '@/reducer/reducer'
import { type CountryAPIResponse } from '@/types/countryAPIRespone'
import { type ReducerType, type ActionReducerType } from '@/types/types'
import { formatCountriesToShort } from '@/utils/utils'
import { createContext, useContext, useEffect, useReducer, type ReactNode } from 'react'

interface ValueProvider {
  countries: ReducerType
  dispatch: (action: ActionReducerType) => void
}

export const ProjectsContext = createContext<ValueProvider | null>(null)

export function useCountryContext () {
  const context = useContext(ProjectsContext)
  if (context == null) throw new Error("Can't access context")
  return context
}

export function CountryProvider ({ children }: { children: ReactNode }) {
  const [countries, dispatch] = useReducer(reducer, {
    countries: undefined,
    loading: false,
    filter: undefined
  })

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch('api/country')
      const data = await res.json() as CountryAPIResponse[]
      const formattedData = formatCountriesToShort({ data })
      dispatch({ type: ACTIONS_TYPES_ENUM.SET_COUNTRIES, payload: formattedData })
    }
    void getCountries()
  }, [])

  return (
    <ProjectsContext.Provider value={{ countries, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  )
}
