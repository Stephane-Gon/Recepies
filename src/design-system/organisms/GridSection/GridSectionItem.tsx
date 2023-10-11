import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

//ICONS
import Calories from '@/design-system/icons/Calories';
import Co2Emissions from '@/design-system/icons/Co2Emissions';
import Time from '@/design-system/icons/Time';

import { Recipe, Links } from "@/types/recepies"

import styles from './styles.module.css'

interface GridSectionItemProps {
  recepi: Recipe;
  links: Links
}

const GridSectionItem = ({ recepi, links }: GridSectionItemProps) => {
  const router = useRouter()

  return (
    <div 
      className={styles.item} 
      onClick={() => {
        const regex = /v2\/([^?]+)/;
        const match = links.self.href.match(regex);

        if(match) {
          router.push(`/recipe/${match[1]}`)
        } 
      }}
    >
      <Image src={recepi.image} alt={recepi.label} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }}/>
      <div className={styles.content}>
        <h3>{ recepi.label }</h3>
        {
          recepi.calories && (
            <div className={styles.iconBox}>
              <span>
                <h2>{recepi.calories.toFixed(2)}</h2>
                <h5>Calories</h5>
              </span>
              <Calories width={30} height={30} fill="#212121" />
            </div>
          )
        }
        {
          recepi.co2EmissionsClass && (
            <div className={styles.iconBox}>
              <span>
                <h2>{recepi.co2EmissionsClass}</h2>
                <h5>CO2 Emissions</h5>
              </span>
              <Co2Emissions width={30} height={30} fill="#212121" />
            </div>
          )
        }
        {
          recepi.totalTime && recepi.totalTime > 0  && (
            <div className={styles.iconBox}>
              <span>
                <h2>{recepi.totalTime}</h2>
                <h5>Total time</h5>
              </span>
              <Time width={30} height={30} fill="#212121" />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default GridSectionItem