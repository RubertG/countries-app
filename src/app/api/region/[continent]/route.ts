import { URL_API_CONTINENT } from '@/consts/consts'
import { NextResponse } from 'next/server'

interface PropsRes {
  params: {
    continent: string
  }
}

export async function GET (request: Request, { params }: PropsRes) {
  const res = await fetch(`${URL_API_CONTINENT}${params.continent}`)
  const data = await res.json()
  return NextResponse.json(data)
}
