import React, { ReactNode } from 'react'

import styles from './styles.module.css'

interface GridSectionGridProps {
  children: ReactNode
}

const GridSectionGrid = (props: GridSectionGridProps ) => {
  return (
    <div className={styles.grid}>
      { props.children }
    </div>
  )
}

export default GridSectionGrid