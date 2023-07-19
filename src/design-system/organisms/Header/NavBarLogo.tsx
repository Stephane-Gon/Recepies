import Link from 'next/link'

import styles from './styles.module.css'

const NavBarLogo = () => {
  return (
    <Link href="#" className={styles.logo}>
      RECEPIES
    </Link>
  )
}

export default NavBarLogo