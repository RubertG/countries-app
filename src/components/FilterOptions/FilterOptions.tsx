'use client'
import { CONTINENTS_OPTIONS } from '@/consts/consts'
import { type CountryShort } from '@/types/types'
import { formatCountriesToShort } from '@/utils/utils'

interface Props {
  countries: CountryShort[] | undefined
  setCountries: (countries: CountryShort[]) => void
}

function FilterOptions ({ countries, setCountries }: Props) {
  const handleChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const optionValue = e.target.value
    if (optionValue === CONTINENTS_OPTIONS.ALL) {
      if (countries !== undefined) {
        setCountries(countries)
      }
    } else {
      const res = await fetch(`/api/region/${optionValue}`)
      const data = await res.json()
      const formattedData = formatCountriesToShort({ data })
      setCountries(formattedData)
    }
  }

  return (
    <div
      className='bg-white dark:bg-dark-blue shadow-lg rounded-md inline-block mt-6 px-6 border-[1px] border-gray-100 dark:border-very-dark-blue lg:text-lg md:max-w-md focus:outline-none md:mt-0'
    >
      <select
        className='bg-inherit cursor-pointer pr-6 py-4 focus:outline-none text-very-dark-blue dark:text-very-light-gray'
        onChange={(e) => { void handleChange(e) }}
      >
        <option
          className='font-bold'
          value={CONTINENTS_OPTIONS.ALL}>Todos los paises</option>
        <option
          className=''
          value={CONTINENTS_OPTIONS.AFRICA}>África</option>
        <option
          className=''
          value={CONTINENTS_OPTIONS.AMERICA}>América</option>
        <option
          className=''
          value={CONTINENTS_OPTIONS.ASIA}>Asia</option>
        <option
          className=''
          value={CONTINENTS_OPTIONS.EUROPE}>Europa</option>
        <option
          className=''
          value={CONTINENTS_OPTIONS.OCEANIA}>Oceanía</option>
      </select>
    </div>
  )
}

export default FilterOptions
