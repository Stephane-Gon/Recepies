import React, { ReactNode } from 'react'

import styles from './styles.module.css'

interface NavBarRootProps {
  children: ReactNode
}


const NavBarRoot = (props: NavBarRootProps) => {
  return (
    <header className={styles.navbar}>
      { props.children }
    </header>
  )
}

export default NavBarRoot