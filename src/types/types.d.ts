import { type ACTIONS_TYPES_ENUM, type THEME } from '@/consts/consts'
import { type Region, type CountryAPIResponse } from './countryAPIRespone'

export type ThemeType = typeof THEME[keyof typeof THEME]
export type ContinentType = typeof Region[keyof typeof Region]

export type CountryShort = Pick<CountryAPIResponse, 'name' | 'flags' | 'population' | 'capital' | 'region' >

export interface ReducerType {
  countries: CountryShort[] | undefined
  loading: boolean
  filter: CountryShort[] | undefined
}

export type ActionReducerType =
  { type: ACTIONS_TYPES_ENUM.SET_COUNTRIES, payload: CountryShort[] } |
  { type: ACTIONS_TYPES_ENUM.FILTER_CONTINENT, payload: Region } |
  { type: ACTIONS_TYPES_ENUM.SET_LOADING, payload: boolean } |
  { type: ACTIONS_TYPES_ENUM.SEARCH_COUNTRY, payload: string } |
  { type: ACTIONS_TYPES_ENUM.RESET_FILTER }
