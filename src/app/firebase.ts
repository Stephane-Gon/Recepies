import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import app from '../firebase/config'

const db = getFirestore(app)
const auth = getAuth()
export { db, auth }