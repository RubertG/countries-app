'use client'
import { type CountryAPIResponse } from '@/types/countryAPIRespone'
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryCardSqueleton from './CountryCardSqueleton'
import { useCountryContext } from '@/context/CountryContext'
import { type CountryShort } from '@/types/types'
import Searcher from '../Searcher/Searcher'
import { formatCountriesToShort } from '@/utils/utils'
import FilterOptions from '../FilterOptions/FilterOptions'

const Countries = () => {
  const [countriesFilter, setCountriesFilter] = useState<CountryShort[]>()
  const [loading, setLoading] = useState(false)
  const { countries, setCountries } = useCountryContext()

  useEffect(() => {
    if (countries != null) return
    const getCountries = async () => {
      const res = await fetch('/api/country')
      const data = await res.json() as CountryAPIResponse[]
      const formattedData = formatCountriesToShort({ data })
      setCountries(formattedData)
      setCountriesFilter(formattedData)
    }
    void getCountries()
  }, [])

  return (
    <section
      className='my-10'
    >
      <div
        className='md:flex md:gap-5 md:justify-between md:items-center'
      >
        <Searcher
          countries={countries}
          setCountries={setCountriesFilter}
          setLoading={setLoading} />
        <FilterOptions
          countries={countries}
          setCountries={setCountriesFilter}
          setLoading={setLoading} />
      </div>
      <div
        className='grid gap-5 gap-y-16 md:gap-y-[4.5rem] md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto my-16'
      >
        {
          (countriesFilter === undefined || loading) && (
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
      </div>
      {
        countriesFilter?.length === 0 && (
          <h3 className='text-center text-very-dark-blue-light dark:text-very-light-gray'>
            No hay paises que coincidan con tu búsqueda.
          </h3>
        )
      }
    </section>
  )
}

export default Countries
