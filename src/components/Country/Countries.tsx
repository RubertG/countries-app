'use client'
import { type CountryAPIResponse } from '@/types/countryAPIRespone'
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryCardSqueleton from './CountryCardSqueleton'
import { useCountryContext } from '@/context/CountryContext'
import { type CountryShort } from '@/types/types'
import Searcher from '../Searcher/Searcher'

function Countries () {
  const [countriesFilter, setCountriesFilter] = useState<CountryShort[]>()
  const { countries, setCountries } = useCountryContext()

  useEffect(() => {
    if (countries != null) return
    const getCountries = async () => {
      const res = await fetch('/api/country')
      const data = await res.json() as CountryAPIResponse[]
      const formattedData: CountryShort[] = data.map((c) => {
        return {
          name: c.name,
          flags: c.flags,
          capital: c.capital,
          population: c.population
        }
      })
      setCountries(formattedData)
      setCountriesFilter(formattedData)
    }
    void getCountries()
  }, [])

  return (
    <section
      className='grid gap-5 gap-y-16 md:gap-y-[4.5rem] md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto my-16'
    >
      <Searcher countries={countries} setCountries={setCountriesFilter}/>
       {
        countriesFilter === undefined && (
          Array(8).fill(null).map((_, i) => {
            return <CountryCardSqueleton key={i} />
          })
        )
      }
      {
        countriesFilter?.map((country, i) => {
          return (
            <CountryCard {...country} key={i} />
          )
        })
      }
    </section>
  )
}

export default Countries
