import { type CountryAPIResponse } from '@/types/countryAPIRespone'

async function getDataCountry (name: string) {
  name = name.replaceAll('-', '%20')
  const res = await fetch(`http://localhost:3000/api/country/${name}`)
  const data = await res.json()
  return data[0] as CountryAPIResponse
}

interface Props {
  params: {
    name: string
  }
}

async function CountryPage ({ params }: Props) {
  const country = await getDataCountry(params.name)

  return (
    <div>{country.name.common}</div>
  )
}

export default CountryPage
