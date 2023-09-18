import { URL_API_COUTRY_ALL } from '@/consts/consts'
import { NextResponse } from 'next/server'

export async function GET () {
  const res = await fetch(URL_API_COUTRY_ALL)
  const data = await res.json()
  return NextResponse.json(data)
}
