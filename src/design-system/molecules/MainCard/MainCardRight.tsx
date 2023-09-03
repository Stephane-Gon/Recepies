import React from 'react'

import Button from '@/design-system/atoms/Button/Button'
import styles from './styles.module.css'

interface MainCardRightProps {
  title: string,
  mealType: string[],
  hasButton?: boolean
}

const MainCardRight = ({title, mealType, hasButton = true}: MainCardRightProps) => {
  return (
    <div className={styles.rightContent}>
      <h1>{title}</h1>
      <span style={{marginBottom: "30px"}}>
        {
          mealType.map((mT, idx) => {
            return <h4 key={`${mT}-${idx}`}>{ mT }</h4>
          })
        }
      </span>
      
      {
        hasButton && <Button text='See More'/>
      }
    </div>
  )
}

export default MainCardRight