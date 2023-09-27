import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Styles
import '@/design-system/themes/globalStyles.css'
import '@/design-system/themes/variations.css'
// Components
import { NavBar } from '@/design-system/organisms/Header'
import Provider from './context/AuthContext'

// Fonts
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recepies',
  description: 'Generated by Stephane-Gon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <NavBar.Root>
            <NavBar.Links>
              <NavBar.Link text='ABOUT' link="/about"/>
              <NavBar.Point />
              <NavBar.Link text='RECEPIES' link="/recepies"/>
              <NavBar.Point />
            </NavBar.Links>
            <NavBar.Logo link='/' />
            <NavBar.Links>
              <NavBar.Point />
              <NavBar.Link text='ME' link="/me"/>
              <NavBar.Point />
              <NavBar.Auth />
            </NavBar.Links>
          </NavBar.Root>
          {children}
        </Provider>
      </body>
    </html>
  )
}
