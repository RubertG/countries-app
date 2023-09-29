'use client'
import CountryCard from './CountryCard'
import CountryCardSqueleton from './CountryCardSqueleton'
import { useCountryContext } from '@/context/CountryContext'
import Searcher from '../Searcher/Searcher'
import FilterOptions from '../FilterOptions/FilterOptions'

const Countries = () => {
  const { countries: { filter, loading }, dispatch } = useCountryContext()

  return (
    <section
      className='my-10'
    >
      <div
        className='md:flex md:gap-5 md:justify-between md:items-center'
      >
        <Searcher
          dispatch={dispatch} />
         <FilterOptions
          dispatch={dispatch} />
      </div>
      <div
        className='grid gap-5 gap-y-16 md:gap-y-[4.5rem] md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto my-16'
      >
        {
          (filter === undefined || loading) && (
            Array(8).fill(null).map((_, i) => {
              return <CountryCardSqueleton key={i} />
            })
          )
        }
        {
          filter?.map((country, i) => {
            return (
              <CountryCard {...country} key={i} />
            )
          })
        }
      </div>
      {
        filter?.length === 0 && (
          <h3 className='text-center text-very-dark-blue-light dark:text-very-light-gray'>
            No hay paises que coincidan con tu búsqueda.
          </h3>
        )
      }
    </section>
  )
}

export default Countries
