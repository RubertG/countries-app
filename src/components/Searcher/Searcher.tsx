'use client'
import { MagnifyingGlass } from '../Icons/Icons'
import { useMemo, useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { type CountryShort } from '@/types/types'
import { NOT_FOUND_API, URL_API_COUTRY } from '@/consts/consts'
import { formatCountriesToShort } from '@/utils/utils'

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
    if (country === '') return
    const getCountries = async () => {
      const res = await fetch(`${URL_API_COUTRY}${country}`)
      const data = await res.json()
      if (data.message === NOT_FOUND_API.notFound) {
        setCountries([])
        return
      }
      if (data.message === NOT_FOUND_API.pageNotFount) {
        if (countries !== undefined) {
          setCountries(countries)
        }
        return
      }
      setCountries(formatCountriesToShort({ data }))
    }

    void getCountries()
  }, [country])

  useEffect(() => {
    return () => {
      handleChange.cancel()
    }
  }, [handleChange])

  return (
    <div className='bg-white dark:bg-dark-blue shadow-lg rounded-md flex items-center px-6 gap-5 border-[1px] border-gray-100 dark:border-very-dark-blue lg:text-lg md:max-w-md'>
      <MagnifyingGlass className='w-7 h-7 fill-dark-gray dark:fill-very-light-gray' />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
        className='bg-inherit text-dark-blue dark:text-very-light-gray py-4 w-full focus:outline-none'
      />
    </div>
  )
}

export default Searcher
