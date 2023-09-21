import Button from '@/design-system/atoms/Button/Button'
import RootLayout from './layout'

const NotFound = () => {
  return (
    <main className="main">
      <h2>This page doesn&#39;t exist!</h2>
      <Button text='Go back to home page?' link="/" />
    </main>
  )
}

export default NotFound