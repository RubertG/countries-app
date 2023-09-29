export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
} as const

export const URL_API_COUTRY = 'https://restcountries.com/v3.1/name/'
export const URL_API_COUTRY_ALL = 'https://restcountries.com/v3.1/all'
export const URL_API_CONTINENT = 'https://restcountries.com/v3.1/region/'

export const NOT_FOUND_API = {
  notFound: 'Not Found',
  pageNotFount: 'Page Not Found'
} as const

export enum ACTIONS_TYPES_ENUM {
  SET_COUNTRIES = 'SET_COUNTRIES',
  FILTER_CONTINENT = 'FILTER_CONTINENT',
  SET_LOADING = 'SET_LOADING',
  SEARCH_COUNTRY = 'SEARCH_COUNTRY',
  RESET_FILTER = 'RESET_FILTER'
}
