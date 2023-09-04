import { NextResponse } from 'next/server'

export async function GET () {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()
  return NextResponse.json(data)
}
