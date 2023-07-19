import React, { ReactNode } from 'react'

import styles from './styles.module.css'

interface NavBarLinksProps {
  children: ReactNode
}


const NavBarLinks = (props: NavBarLinksProps) => {
  return (
    <div className={styles.links}>
      { props.children }
    </div>
  )
}

export default NavBarLinks