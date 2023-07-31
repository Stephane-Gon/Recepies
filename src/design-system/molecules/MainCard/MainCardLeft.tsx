import React, { ReactNode } from 'react'

import styles from './styles.module.css'

interface MainCardLeftProps {
  children: ReactNode
}

const MainCardLeft = (props: MainCardLeftProps) => {
  return (
    <div className={styles.leftContent}>
      { props.children }
    </div>
  )
}

export default MainCardLeft