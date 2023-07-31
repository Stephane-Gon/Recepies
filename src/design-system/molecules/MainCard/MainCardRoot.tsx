import React, { ReactNode } from 'react'

import styles from './styles.module.css'

interface MainCardRootProps {
  children: ReactNode
}

const MainCardRoot = (props: MainCardRootProps) => {
  return (
    <div className={styles.mainCardWrapper}>
      { props.children }
    </div>
  )
}

export default MainCardRoot