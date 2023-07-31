import React from 'react'
import Image from 'next/image'

import styles from './styles.module.css'

interface MainCardImgProps {
  link: string,
  label: string
}

const MainCardImg = (props: MainCardImgProps) => {
  return (
    <div className={styles.mainCardImg}>
      <Image src={props.link} width={500} height={500} alt={props.label} />
    </div>
  )
}

export default MainCardImg