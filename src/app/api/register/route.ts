import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';

export async function POST(request: any) {
  const body = await request.json()
  const { name, email, password, confirmPassword } = body
  if(!email || !name || !password || !confirmPassword) {
    return NextResponse.json({error: 'Missing Fields'}, {status: 400})
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if(existingUser) return NextResponse.json({error: 'Email already exists!'})

  if(password !== confirmPassword) return NextResponse.json({error: "Passwrods are diferent!"})

  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword
    }
  })

  return NextResponse.json({user: newUser}, { status: 200})
}