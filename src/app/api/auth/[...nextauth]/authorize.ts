
type AuthorizeProps = {
  email: string;
  password: string;
} | undefined

const authorize = async (credentials: AuthorizeProps) => {
  if (!credentials || !credentials.email || !credentials.password) return null

  //TODO: Check db for a user with the same email;
    //TODO: If none return null;
    //TODO: If onevalidate pass;

  return null
}

export { authorize }