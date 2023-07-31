import React from 'react'
import Image from 'next/image'

import styles from './styles.module.css'

interface SliderImgProps {
  image: string,
  label: string
}

const SliderImg = (props: SliderImgProps) => {
  return (
    <div className={styles.imgWrapper}>
      <Image className={styles.sliderImage} src={props.image} width={350} height={350} alt={props.label} />
    </div>
  )
}

export default SliderImg