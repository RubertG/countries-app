import { ACTIONS_TYPES_ENUM } from '@/consts/consts'
import { type ActionReducerType, type ReducerType } from '@/types/types'

export function reducer (state: ReducerType, action: ActionReducerType): ReducerType {
  if (action.type === ACTIONS_TYPES_ENUM.SET_COUNTRIES) {
    return {
      countries: action.payload,
      loading: false,
      filter: action.payload
    }
  }

  if (action.type === ACTIONS_TYPES_ENUM.SET_LOADING) {
    return {
      ...state,
      loading: action.payload
    }
  }

  if (action.type === ACTIONS_TYPES_ENUM.FILTER_CONTINENT) {
    const filterContinent = state.countries?.filter(country => country.region === action.payload)
    return {
      ...state,
      filter: filterContinent
    }
  }

  if (action.type === ACTIONS_TYPES_ENUM.SEARCH_COUNTRY) {
    const searchCountry = state.countries?.filter(country => country.name.common.toLowerCase().includes(action.payload.toLowerCase()))
    return {
      ...state,
      filter: searchCountry
    }
  }

  if (action.type === ACTIONS_TYPES_ENUM.RESET_FILTER) {
    return {
      ...state,
      filter: state.countries
    }
  }

  return state
}
