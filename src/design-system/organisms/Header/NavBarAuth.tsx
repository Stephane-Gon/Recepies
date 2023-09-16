'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Button from '@/design-system/atoms/Button/Button';

import styles from './styles.module.css'

interface NavBarAuthProps {
  isLogged: boolean;
}


const NavBarAuth = (props: NavBarAuthProps) => {
  const router = useRouter()

  return (
    <Button text="Log in" onClick={() => router.push('/auth/login')}  />
  )
}

export default NavBarAuth