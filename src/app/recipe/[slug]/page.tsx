import React from 'react'

import { Hit } from "@/types/recepies"
import { getRecipeByID } from '@/api/Recepies/calls'

const Recipe = async ({params}: any) => {
console.log("🚀 ~ file: page.tsx:7 ~ Recipe ~ params:", params)

  let data: Promise<Hit>
  let featuredRecepies: Hit | null = null

  if(params.slug) {
    // data = getRecipeByID(params.slug)
    // featuredRecepies = await data
  }
  
  return (
    <div>Recipe</div>
  )
}

export default Recipe