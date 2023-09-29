import { type CountryShort } from '@/types/types'
import Link from 'next/link'

function CountryCard ({ name, flags, capital, population }: CountryShort) {
  const nameRef = name.common.toLocaleLowerCase().replaceAll(' ', '-')

  return (
    <Link href={`/country/${nameRef}`}>
      <article
        className='group w-full max-w-xs md:max-w-none bg-white dark:bg-dark-blue mx-auto rounded-lg p-5 md:p-4 shadow-xl md:hover:shadow-2xl md:transition-shadow'>
        <picture className='block w-full aspect-video rounded-lg overflow-hidden -mt-12 md:group-hover:scale-[1.03] md:transition-transform md:ease-in-out'>
          <img src={flags.png} alt={flags.alt} className='w-full h-full object-cover' />
        </picture>
        <h2
          className='font-extrabold text-center text-xl mt-4'
        >{name.common}</h2>
        <p
          className='mt-3'
        ><strong className='opacity-70'>Población: </strong> {population.toLocaleString()}</p>
        <p><strong className='opacity-70'>Capital: </strong> {capital}</p>
      </article>
    </Link>
  )
}

export default CountryCard
