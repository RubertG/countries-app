import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CountryCardSqueleton () {
  return (
    <article
      className='w-full max-w-xs md:max-w-none bg-white dark:bg-dark-blue mx-auto rounded-lg p-5 md:p-4 shadow-xl'>
      <picture className='block w-full aspect-video rounded-lg overflow-hidden -mt-12'>
        <Skeleton width={'100%'} height={'100%'} />
      </picture>
      <h2 className='mt-4 text-xl'><Skeleton /></h2>
      <p className='mt-3'><Skeleton /></p>
      <p><Skeleton /></p>
    </article>
  )
}

export default CountryCardSqueleton
