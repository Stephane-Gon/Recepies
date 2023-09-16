import type { NextAuthOptions } from "next-auth";
// Providers
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GIT_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GIT_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if(!credentials || !credentials.email || !credentials.password) return null
        
        const user = { id: "1", username: "stef", email: "stef@gmail.com", password: "1234" }

        if (credentials.email === user.email && credentials.password === user.password) {
          return user
        } 
        return null
      }
    })
  ],
  // session: {
  //   strategy: "jwt"
  // },
  secret: process.env.NEXT_PUBLIC_PROVIDER_SECRET,
  debug: process.env.NEXT_PUBLIC_NODE_ENV == 'development'
}


export {
  options
}