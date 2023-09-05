import Countries from '@/components/Country/Countries'
import { Header } from '@/components/Header/Header'

function page () {
  return (
    <>
      <Header />
      <main
        className='max-w-6xl px-4 m-auto'
      >
        <Countries />
      </main>
    </>
  )
}

export default page
