'use client'
import { MagnifyingGlass } from '../Icons/Icons'
import { useMemo, useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { type ActionReducerType } from '@/types/types'
import { ACTIONS_TYPES_ENUM } from '@/consts/consts'

interface Props {
  dispatch: (action: ActionReducerType) => void
}

function Searcher ({ dispatch }: Props) {
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
      dispatch({ type: ACTIONS_TYPES_ENUM.RESET_FILTER })
      return
    }
    dispatch({ type: ACTIONS_TYPES_ENUM.SEARCH_COUNTRY, payload: country })

    /* const getCountries = async () => {
      dispatch({ type: ACTIONS_TYPES_ENUM.SET_LOADING, payload: true })
      dispatch({ type: ACTIONS_TYPES_ENUM.SET_LOADING, payload: false })
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
    } */

    // void getCountries()
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
