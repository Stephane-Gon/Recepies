import { Recepies } from "@/types/recepies"

export const getRecepie = async (text: string): Promise<Recepies> => {

  const response = await fetch(`http://localhost:3000/api/recepies/all/${text}`, {
    cache: 'no-store'
  })

  const data = await response.json()
  return data
}

