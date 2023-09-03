'use'
import React, { ElementType, useState } from 'react'

import styles from './styles.module.css'

interface ItemProps {
  label: string,
  value: string | number,
  icon: ElementType
  color?: string
}


const Item = ({label, value, icon: Icon, color = "#b8ffc9"}: ItemProps) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <div 
      className={styles.item}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span>
        <h1 className={isHover ? styles.textOrange : ""}>{value}</h1>
        <h4 className={isHover ? styles.textOrange : ""}>{label}</h4>
      </span>
      <Icon width={40} height={40} fill={isHover ? "#feb028" : color} />
    </div>
  )
}

export default Item