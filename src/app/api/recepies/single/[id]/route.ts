import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const id = context.params.id

  const appIdQS = `app_id=${process.env.NEXT_PUBLIC_RECEPIES_API_ID}`
  const appKeyQS = `app_key=${process.env.NEXT_PUBLIC_RECEPIES_API_KEY}`
  const appTypeQS = `type=public`

  const response = await fetch(`https://api.edamam.com/api/recipes/v2/${id}?${appIdQS}&${appKeyQS}&${appTypeQS}`, {
    cache: 'no-store'
  })

  if(!response.ok) {
    throw new Error('failed to fetch recepie')
  }
  const data = await response.json()

  //return NextResponse.json({ name, instrument })
  return NextResponse.json(data)
}