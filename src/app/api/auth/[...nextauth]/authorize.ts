
type AuthorizeProps = {
  email: string;
  password: string;
} | undefined

export const authorize = async (credentials: AuthorizeProps) => {
  if(!credentials || !credentials.email || !credentials.password) return null
        
  const user = { id: "1", username: "stef", email: "stef@gmail.com", password: "1234" }

  if (credentials.email === user.email && credentials.password === user.password) {
    return user
  } 
  return null
}