import React, { useState } from 'react'
import Image from 'next/image'

import { Recipe } from "@/types/recepies"

import styles from './styles.module.css'

interface GridSectionItemProps {
  item: Recipe
}

const GridSectionItem = ({ item }: GridSectionItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)


  return (
    <div className={styles.item} onClick={() => setIsOpen(prevState => !prevState)}>
      <Image src={item.image} alt={item.label} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }}/>
      {
        isOpen && (
          <div className={styles.content}>
            <h3>{ item.label }</h3>
          </div>
        )
      }
    </div>
  )
}

export default GridSectionItem