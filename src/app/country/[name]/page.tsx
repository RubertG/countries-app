import { Arrow } from '@/components/Icons/Icons'
import { URL_API_COUTRY } from '@/consts/consts'
import { type CountryAPIResponse } from '@/types/countryAPIRespone'
import Link from 'next/link'

async function getDataCountry (name: string) {
  name = name.replaceAll('-', '%20')
  const res = await fetch(`${URL_API_COUTRY}${name}`)
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
    <>
      <Link
        href={'/'}
        className='inline-flex items-center justify-center gap-2 px-4 py-1 text-very-dark-blue-light dark:text-very-light-gray rounded-md shadow-md bg-white dark:bg-dark-blue mt-10 md:hover:scale-105 md:transition-transform'
      >
        <Arrow className='fill-black dark:fill-very-light-gray w-6 h-auto' />Atrás
      </Link>
      <section
        className='xl:grid xl:grid-cols-2 xl:items-center xl:justify-center xl:mt-10 xl:gap-5'
      >
        <picture
          className='block w-full aspect-[15/9] max-w-lg rounded-md overflow-hidden m-auto mt-10 xl:m-0'
        >
          <img
            className='w-full h-full object-cover'
            src={country.flags.png}
            alt={country.flags.alt} />
        </picture>
        <div>
          <h1
            className='font-extrabold text-2xl mt-7 text-center xl:m-0 xl:text-left lg:text-4xl'
          >{country.name.common}</h1>
          <article
            className='text-base m-auto mt-5 max-w-xl md:grid md:grid-cols-2 md:gap-2 xl:gap-3 xl:max-w-none'
          >
            <div>
              {
                country.name.nativeName !== undefined && (
                  <p className='dark:text-gray-300 mb-1'><strong className='text-very-dark-blue-light dark:text-gray-300'>Nombre nativo:</strong> {Object.values(country.name.nativeName)[0].official}</p>
                )
              }
              <p className='dark:text-gray-300 mb-1'><strong className='text-very-dark-blue-light dark:text-gray-300'>Población:</strong> {country.population}</p>
              <p className='dark:text-gray-300 mb-1'><strong className='text-very-dark-blue-light dark:text-gray-300'>Región:</strong> {country.region}</p>
              <p className='dark:text-gray-300 mb-1'><strong className='text-very-dark-blue-light dark:text-gray-300'>Subregión:</strong> {country.subregion}</p>
              <p className='dark:text-gray-300 mb-1'><strong className='text-very-dark-blue-light dark:text-gray-300'>Capital:</strong> {country.capital}</p>
            </div>
            <div className='mt-5 xl:mt-0'>
              {
                country.tld !== undefined && <p className='dark:text-gray-300 mb-1'><strong className='text-very-dark-blue-light dark:text-gray-300'>Dominio de nivel superior:</strong> {country.tld}</p>
              }
              {
                country.currencies !== undefined && <p className='dark:text-gray-300 mb-1'><strong className='text-very-dark-blue-light dark:text-gray-300'>Moneda:</strong> {Object.values(country.currencies)[0].name}</p>
              }
              {
                country.languages !== undefined && <p className='dark:text-gray-300 mb-1'><strong className='text-very-dark-blue-light dark:text-gray-300'>Idiomas:</strong> {Object.values(country.languages).toLocaleString().replaceAll(',', ', ')}</p>
              }
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default CountryPage
