import bcrypt from 'bcrypt';
// Prisma
import prisma from '@/libs/prismadb'

type AuthorizeProps = {
  email: string;
  password: string;
} | undefined

export const authorize = async (credentials: AuthorizeProps) => {
  // Check if both inputs where filled
  if(!credentials || !credentials.email || !credentials.password) {
    throw new Error('Fields missing.')
  }

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: {
      email: credentials.email
    }
  })
  if(!user || !user?.hashedPassword) {
    throw new Error('No User Found!')
  }

  // Check if password is correct
  const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
  if(!passwordMatch) {
    throw new Error('Incorrect password!')
  }

  return user
}