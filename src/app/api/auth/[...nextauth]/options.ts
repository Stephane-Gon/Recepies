import type { NextAuthOptions } from "next-auth";
// Providers
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
// Adaptor
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// Utils
import { authorize } from "./authorize";
// Prisma
import prisma from '../../../libs/prismadb'

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GIT_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GIT_CLIENT_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials) => authorize(credentials),
    })
  ],
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXT_PUBLIC_PROVIDER_SECRET,
  debug: process.env.NEXT_PUBLIC_NODE_ENV == 'development',
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
}


export {
  options
}