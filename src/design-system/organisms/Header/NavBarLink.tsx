import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

interface NavBarLinkProps {
  text: string,
  link: string
}


const NavBarLink = (props: NavBarLinkProps) => {
  return (
    <div className={styles.linkWrapper}>
      <Link href={props.link} className={styles.link} >{props.text}</Link>
    </div>
  )
}

export default NavBarLink