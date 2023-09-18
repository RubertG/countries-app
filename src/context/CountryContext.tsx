'use client'
import { type CountryShort } from '@/types/types'
import { createContext, useContext, useState, type ReactNode } from 'react'

interface ValueProvider {
  countries: CountryShort[] | undefined
  setCountries: (countries: CountryShort[]) => void
}

export const ProjectsContext = createContext<ValueProvider | null>(null)

export function useCountryContext () {
  const context = useContext(ProjectsContext)
  if (context == null) throw new Error("Can't access context")
  return context
}

export function CountryProvider ({ children }: { children: ReactNode }) {
  const [countries, setCountries] = useState<CountryShort[]>()

  return (
    <ProjectsContext.Provider value={{ countries, setCountries }}>
      {children}
    </ProjectsContext.Provider>
  )
}
