'use client'
import { MagnifyingGlass } from '../Icons/Icons'
import { useMemo, useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { type CountryShort } from '@/types/types'

interface Props {
  countries: CountryShort[] | undefined
  setCountries: (countries: CountryShort[]) => void
}

function Searcher ({ countries, setCountries }: Props) {
  const [country, setCountry] = useState('')

  const handleChange = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
      }, 500)
    , []
  )

  useEffect(() => {
    const countriesFilter = countries?.filter((c) => c.name.common.toLocaleLowerCase().includes(country.toLocaleLowerCase()))
    if (countriesFilter !== undefined) {
      setCountries(countriesFilter)
    }
  }, [country])

  useEffect(() => {
    return () => {
      handleChange.cancel()
    }
  }, [handleChange])

  return (
    <section>
      <MagnifyingGlass />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
        className='text-very-dark-blue-light'
      />
    </section>
  )
}

export default Searcher
