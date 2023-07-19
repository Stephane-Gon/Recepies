'use client'
import Link from 'next/link'

import React, { useRef } from 'react'
import styles from './styles.module.css'

type InitialProps = {
  link?: string,
  text: string
}

const Button: React.FC<InitialProps> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <button ref={buttonRef} className={styles.mainButton}>
      {
        props.link ? (
          <Link className={styles.link} href={props.link}>{props.text}</Link>
        ) : (
          <p className={styles.btnText}>{props.text}</p>
        )
      }
    </button>
  )
}

export default Button