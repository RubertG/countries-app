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
  setLoading: (loading: boolean) => void
}

function Searcher ({ countries, setCountries, setLoading }: Props) {
  const [country, setCountry] = useState('')

  const handleChange = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
      }, 500)
    , []
  )

  useEffect(() => {
    if (country === '') {
      if (countries !== undefined) {
        setCountries(countries)
      }
      return
    }
    const getCountries = async () => {
      setLoading(true)
      const res = await fetch(`${URL_API_COUTRY}${country}`)
      const data = await res.json()
      if (data.message === NOT_FOUND_API.notFound) {
        setCountries([])
        setLoading(false)
        return
      }
      if (data.message === NOT_FOUND_API.pageNotFount) {
        if (countries !== undefined) {
          setCountries(countries)
          setLoading(false)
        }
        return
      }
      setCountries(formatCountriesToShort({ data }))
      setLoading(false)
    }

    void getCountries()
  }, [country])

  useEffect(() => {
    return () => {
      handleChange.cancel()
    }
  }, [handleChange])

  return (
    <div className='bg-white dark:bg-dark-blue shadow-lg rounded-md flex items-center px-6 gap-5 border-[1px] border-gray-100 dark:border-very-dark-blue lg:text-lg max-w-lg md:min-w-[26rem]'>
      <MagnifyingGlass className='w-7 h-7 fill-dark-gray dark:fill-very-light-gray' />
      <input
        type="text"
        placeholder="Buscar país..."
        onChange={handleChange}
        className='bg-inherit text-dark-blue dark:text-very-light-gray py-4 w-full focus:outline-none'
      />
    </div>
  )
}

export default Searcher
