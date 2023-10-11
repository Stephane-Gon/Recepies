
interface RegisterProps {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const register = async (body: RegisterProps) => {

  const response = await fetch(`http://localhost:3000/api/register`, {
    method: 'POST',
    cache: 'no-store',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()
  return data
}

