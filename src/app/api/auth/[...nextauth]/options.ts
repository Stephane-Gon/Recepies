import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth";
import { authorize } from "./authorize";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "random@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) =>  authorize(credentials),
    })
  ]
}


export {
  options
}