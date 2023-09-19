'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

// Components
import Button from '@/design-system/atoms/Button/Button';

const NavBarAuth =  () => {
  const router = useRouter()
  const { data: session } = useSession()

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