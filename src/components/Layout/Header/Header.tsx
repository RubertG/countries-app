'use client'
import SunIcon, { MoonIcon } from '@/components/Icons/Icons'
import { THEME } from '@/consts/consts'
import { type ThemeType } from '@/types/types'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window === 'undefined') return THEME.LIGHT
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME.DARK
    }
    return THEME.LIGHT
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add(THEME.DARK)
    } else {
      document.querySelector('html')?.classList.remove(THEME.DARK)
    }
  }, [theme])

  const handleTheme = () => {
    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT))
  }

  return (
    <header
     className='bg-white dark:bg-dark-blue flex justify-between items-center py-6 px-5 shadow-md'
    >
      <h1
        className='font-extrabold text-xl'
      >¿Donde en el mundo?</h1>
      <button
        className='w-9 h-9 p-2 grid place-content-center bg-very-light-gray dark:bg-very-dark-blue rounded-full shadow-md md:hover:scale-110 md:transition-transform'
        onClick={handleTheme}>
        <MoonIcon className='w-full h-full block dark:hidden fill-very-dark-blue'/>
        <SunIcon className='w-full h-full hidden dark:block fill-very-light-gray'/>
      </button>
    </header>
  )
}
