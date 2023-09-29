'use client'
import { ACTIONS_TYPES_ENUM } from '@/consts/consts'
import { Region } from '@/types/countryAPIRespone'
import { type ActionReducerType } from '@/types/types'

const ALL = 'all'

interface Props {
  dispatch: (action: ActionReducerType) => void
}

function FilterOptions ({ dispatch }: Props) {
  const handleChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const optionValue = e.target.value
    if (optionValue === ALL) {
      dispatch({ type: ACTIONS_TYPES_ENUM.RESET_FILTER })
    } else {
      // dispatch({ type: ACTIONS_TYPES_ENUM.SET_LOADING, payload: true })
      // const res = await fetch(`/api/region/${optionValue}`)
      // const data = await res.json()
      // const formattedData = formatCountriesToShort({ data })
      dispatch({ type: ACTIONS_TYPES_ENUM.FILTER_CONTINENT, payload: optionValue as Region })
      // dispatch({ type: ACTIONS_TYPES_ENUM.SET_LOADING, payload: false })
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
          value={ALL}>Todos los paises</option>
        <option
          value={Region.Africa}>África</option>
        <option
          value={Region.Americas}>América</option>
        <option
          value={Region.Asia}>Asia</option>
        <option
          value={Region.Europe}>Europa</option>
        <option
          value={Region.Oceania}>Oceanía</option>
      </select>
    </div>
  )
}

export default FilterOptions
