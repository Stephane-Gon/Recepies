import React from 'react'
import Link from 'next/link'

import { Recipe } from '@/types/recepies'
import styles from './styles.module.css'

interface SliderContentProps {
  recepie: Recipe
}

const SliderContent = (props: SliderContentProps) => {
  return (
    <div className={styles.content}>
      <div>
        <h1>{ props.recepie.label }</h1>
        <h2>{ props.recepie.mealType }</h2>
      </div>
      <Link className={styles.linkContent} href="#">Got hungry??</Link>
    </div>
  )
}

export default SliderContent