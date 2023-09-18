'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import type { Session } from 'next-auth';

// Components
import Button from '@/design-system/atoms/Button/Button';
// Styles
import styles from './styles.module.css'

interface NavBarAuthProps {
  session: Session | null;
}


const NavBarAuth =  ({ session }: NavBarAuthProps) => {
  const router = useRouter()


  const handleClick = () => {
    if(session && session.user) { 
      return router.push('/api/auth/signout') 
    } 
    return router.push('/api/auth/signin')
  }

  const text = session && session.user?.email ? session.user?.email : 'Log in'
  return (
    <Button text={text} onClick={handleClick}  />
  )
}

export default NavBarAuth