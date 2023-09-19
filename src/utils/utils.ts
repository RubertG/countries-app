import { type CountryAPIResponse } from '@/types/countryAPIRespone'
import { type CountryShort } from '@/types/types'

interface Props {
  data: CountryAPIResponse[]
}

export function formatCountriesToShort ({ data }: Props): CountryShort[] {
  return data.map((c: CountryAPIResponse) => {
    return {
      name: c.name,
      flags: c.flags,
      capital: c.capital,
      population: c.population
    }
  })
}
