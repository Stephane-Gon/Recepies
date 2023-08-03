import React, { ReactNode } from 'react'

import styles from './styles.module.css'

interface GridSectionRootProps {
  children: ReactNode
}

const GridSectionRoot = (props: GridSectionRootProps) => {
  return (
    <div className={styles.root}>
      { props.children }
    </div>
  )
}

export default GridSectionRoot