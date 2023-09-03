import React from 'react'
//COMPONENTS
import HeroSection from './components/HeroSection/HeroSection'
import SecondSection from './components/SecondSection/SecondSection'
// TYPES
import { Hit } from "@/types/recepies"
// API
import { getRecipeByID } from '@/api/Recepies/calls'
// STYLES
import styles from './styles.module.css'

const Recipe = async ({params}: any) => {

  let data: Promise<Hit>
  let featuredRecepie: Hit | null = null

  if(params.slug) {
    data = getRecipeByID(params.slug)
    featuredRecepie = await data
  }

  const recipe = featuredRecepie?.recipe
  
  return (
    <div className={styles.wrapper}>
      <HeroSection recipe={recipe ? recipe : null}/>
      <SecondSection recipe={recipe ? recipe : null}/>
    </div>
  )
}

export default Recipe