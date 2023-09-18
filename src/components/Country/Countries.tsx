'use client'
import { type CountryAPIResponse } from '@/types/countryAPIRespone'
import { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountryCardSqueleton from './CountryCardSqueleton'

function Countries () {
  const [countries, setCountries] = useState<CountryAPIResponse[]>()

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch('/api/country')
      const data = await res.json() as CountryAPIResponse[]
      setCountries(data)
    }
    void getCountries()
  }, [])

  return (
    <section
      className='grid gap-5 gap-y-16 md:gap-y-[4.5rem] md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto my-16'
    >
      {
        countries === undefined && (
          Array(8).fill(null).map((_, i) => {
            return <CountryCardSqueleton key={i}/>
          })
        )
      }
      {
        countries?.map((country, i) => {
          return (
              <CountryCard {...country} key={i} />
          )
        })
      }
    </section>
  )
}

export default Countries
