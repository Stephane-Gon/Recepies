import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const { body } = request
  console.log("🚀 body:", body)

  //TODO: Validar fields;
  //TODO: Verificar se já existe user;
  //TODO: se fields valid e não existe user:
  //TODO: Crio user


  //return NextResponse.json({ name, instrument })
  return NextResponse.json("Hello")
}