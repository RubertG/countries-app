import { type THEME } from '@/consts/consts'
import { type CountryAPIResponse } from './countryAPIRespone'

export type ThemeType = typeof THEME[keyof typeof THEME]

export type CountryShort = Pick<CountryAPIResponse, 'name' | 'flags' | 'population' | 'capital'>
