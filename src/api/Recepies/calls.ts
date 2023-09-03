import { Recepies, Hit } from "@/types/recepies"
import { notFound } from 'next/navigation';

export const getRecepie = async (text: string): Promise<Recepies> => {

  const textQS = text ? `?q=${text}` : ""
  const appIdQS = `app_id=${process.env.NEXT_PUBLIC_RECEPIES_API_ID}`
  const appKeyQS = `app_key=${process.env.NEXT_PUBLIC_RECEPIES_API_KEY}`
  const appTypeQS = `type=${process.env.NEXT_PUBLIC_RECEPIES_API_TYPE}`
  
  const response = await fetch(`https://api.edamam.com/api/recipes/v2${textQS}&${appIdQS}&${appKeyQS}&${appTypeQS}`, {
    cache: 'no-store'
  })

  if(!response.ok) {
    throw new Error('failed to fetch recepie')
  }
  const data = await response.json()

  return data
}

export const getRecipeByID = async (id: string): Promise<Hit> => {

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

  return data
  
}