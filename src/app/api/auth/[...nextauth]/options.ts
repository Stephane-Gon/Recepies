import CredentialsProvider from "next-auth/providers/credentials"
import type { NextAuthOptions } from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from 'firebase-admin/app'

import { authorize } from "./authorize";

const options: NextAuthOptions = {
  // adapter: FirestoreAdapter({
  //   credential: cert({
  //     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  //     clientEmail: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
  //     privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  //   }),
  // }),
  providers: [
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "John" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize: (credentials) =>  authorize(credentials),
    // })
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