import Link from 'next/link'

import styles from './styles.module.css'

interface NavBarLogoProps {
  link: string
}

const NavBarLogo = (props: NavBarLogoProps) => {
  return (
    <Link href={props.link} className={styles.logo}>
      RECEPIES LOGO
    </Link>
  )
}

export default NavBarLogo