import React, { ReactNode } from 'react'
import styles from './styles.module.css'

interface SliderCardProps {
  children: ReactNode
}


const SliderCard = (props: SliderCardProps) => {
  return (
    <div>
      <div className={styles.sliderCard}>
        { props.children }
      </div>
    </div>
  )
}

export default SliderCard