'use client' // Error components must be Client Components
 
import { useEffect } from 'react'

import Button from '@/design-system/atoms/Button/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="main">
      <h2>Something went wrong with our server!</h2>
      <Button
        text='Try again?'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      />
    </div>
  )
}