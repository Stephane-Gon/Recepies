import React, { ReactNode } from 'react'

import styles from './styles.module.css'

interface MainCardItemProps {
  children: ReactNode
}

const MainCardItem = (props: MainCardItemProps) => {
  return (
    <div className={styles.mainCardItem}>
      { props.children }
    </div>
  )
}

export default MainCardItem