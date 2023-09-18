import { Arrow } from '@/components/Icons/Icons'
import Link from 'next/link'
import React, { Suspense, type ReactNode } from 'react'
import Skeleton from 'react-loading-skeleton'

function LayoutCountry ({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={
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
            <Skeleton width={'100%'} height={'100%'} />
          </picture>
          <div>
            <h1
              className='font-extrabold text-2xl mt-7 text-center xl:m-0 xl:text-left lg:text-4xl'
            ><Skeleton /></h1>
            <article
              className='text-base m-auto mt-5 max-w-xl md:grid md:grid-cols-2 md:gap-2 xl:gap-3 xl:max-w-none'
            >
              <div>
                <p className='dark:text-gray-300 mb-1'><Skeleton /></p>
                <p className='dark:text-gray-300 mb-1'><Skeleton /></p>
                <p className='dark:text-gray-300 mb-1'><Skeleton /></p>
                <p className='dark:text-gray-300 mb-1'><Skeleton /></p>
                <p className='dark:text-gray-300 mb-1'><Skeleton /></p>
              </div>
              <div className='mt-5 xl:mt-0'>
                <p className='dark:text-gray-300 mb-1'><Skeleton /></p>
                <p className='dark:text-gray-300 mb-1'><Skeleton /></p>
                <p className='dark:text-gray-300 mb-1'><Skeleton /></p>
              </div>
            </article>
          </div>
        </section>
      </>
    }>
      {children}
    </Suspense>
  )
}

export default LayoutCountry
