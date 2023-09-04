import { NextResponse } from 'next/server'

interface Props {
  params: {
    name: string
  }
}

export async function GET (request: Request, { params }: Props) {
  const { name } = params
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
  const data = await res.json()
  return NextResponse.json(data)
}
