import { collection, query, where, getDoc, doc } from 'firebase/firestore/lite';
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth'

import { db, auth } from '@/app/firebase';

type AuthorizeProps = {
  username: string;
  password: string;
} | undefined

const authorize = async (credentials: AuthorizeProps) => {
  if (!credentials || !credentials.username || !credentials.password) return null


  return null
}

export { authorize }