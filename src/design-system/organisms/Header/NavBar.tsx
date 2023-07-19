import Link from 'next/link'
import React from 'react'

import styles from './styles.module.css'

import Button from '@/design-system/atoms/Button/Button'

const NavBar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logoBox}>
        <h2>NATMAP</h2>
      </div>

      <ul className={styles.navbarLinks}>
        <Link href="/" className={styles.navbarLink}>HOME</Link>
        <Link href="/map" className={styles.navbarLink}>MAP</Link>
        <Link href="/" className={styles.navbarLink}>ABOUT</Link>
      </ul>

      <div className={styles.navbarAuthBox}>
        <Button 
          text='LOGIN'
        />
      </div>
    </header>
  )
}

export default NavBar