import Link from 'next/link'

import Button from '@/design-system/atoms/Button/Button'
import RootLayout from './layout'

const NotFound = () => {
  return (
    <RootLayout>
      <main className="main">
        <h2>This page doesn&#39;t exist!</h2>
        <Button text='Go back to home page?' link="/" />
      </main>
    </RootLayout>
  )
}

export default NotFound