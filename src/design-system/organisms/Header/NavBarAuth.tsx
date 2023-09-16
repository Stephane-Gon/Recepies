'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Button from '@/design-system/atoms/Button/Button';

import styles from './styles.module.css'

interface NavBarAuthProps {
  isLogged: boolean;
}


const NavBarAuth = ({ isLogged }: NavBarAuthProps) => {
  const router = useRouter()

  const text = isLogged ? 'Log out' : 'Log in'
  return (
    <Button text={text} onClick={() => router.push('/auth/login')}  />
  )
}

export default NavBarAuth