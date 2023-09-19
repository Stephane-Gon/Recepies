import React from 'react'
import Link from 'next/link'

import RootLayout from '../../layout'

const NotFound = () => {
  return (
    <RootLayout>
      <main className="main">
        <h2>This recipe doesn&#39;t exist!</h2>
        <Link href="/">Go back to home page?</Link>
      </main>
    </RootLayout>
  )
}

export default NotFound